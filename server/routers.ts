import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { adminProcedure, publicProcedure, router } from "./_core/trpc";
import nodemailer from "nodemailer";
import { z } from "zod";
import { ENV } from "./_core/env";
import { notifyOwner } from "./_core/notification";
import {
  createContactSubmission,
  getContactSubmissionById,
  listContactSubmissions,
  updateContactSubmissionCrm,
  updateContactSubmissionStatus,
} from "./db";
import { broadcastContactCreated } from "./contactEvents";

const contactInput = z.object({
  name: z.string().trim().min(2).max(160),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().min(6).max(40),
  service: z.string().trim().min(2).max(160),
  message: z.string().trim().min(10).max(10000),
});

const statusInput = z.enum(["new", "in_progress", "quoted", "won", "lost"]);

type ContactLead = {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

async function syncLeadToCrm(lead: ContactLead) {
  if (!ENV.crmWebhookUrl) return { status: "not_configured" as const };

  const response = await fetch(ENV.crmWebhookUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      source: "blconstrucoes.com",
      lead,
      receivedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error(`CRM webhook returned ${response.status}`);
  }

  return { status: "synced" as const };
}

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  contact: router({
    status: publicProcedure.query(() => ({
      configured: ENV.contactTo.length > 0,
    })),

    sendEmail: publicProcedure
      .input(contactInput)
      .mutation(async ({ input }) => {
        let leadId: number | null = null;

        try {
          leadId = await createContactSubmission({
            ...input,
            status: "new",
            crmStatus: ENV.crmWebhookUrl ? "pending" : "not_configured",
          });
        } catch (error) {
          console.error("[Contact] Falha ao guardar pedido:", error);
        }

        if (leadId) {
          broadcastContactCreated({ id: leadId, name: input.name, service: input.service });
        }

        try {
          console.log("[SMTP] Iniciando envio de email...");
          const transporter = nodemailer.createTransport({
            host: ENV.smtpHost,
            port: ENV.smtpPort,
            secure: ENV.smtpPort === 465,
            requireTLS: true,
            auth: { user: ENV.smtpUser, pass: ENV.smtpPass },
            tls: { rejectUnauthorized: false },
            logger: true,
            debug: true,
          });

          await new Promise((resolve, reject) => {
            transporter.verify((error, success) => error ? reject(error) : resolve(success));
          });

          const clientEmailContent = `
Olá ${input.name},

Obrigado por contactar a B&L Construções!

Recebemos o seu pedido de orçamento com os seguintes dados:
- Nome: ${input.name}
- Email: ${input.email}
- Telefone: ${input.phone}
- Tipo de Serviço: ${input.service}

Mensagem:
${input.message}

A nossa equipa analisará o seu pedido e entrará em contacto dentro de 24 horas úteis.

Atenciosamente,
B&L Construções
Tel: 928 095 224
Email: geral@blconstrucoes.com
          `;

          const companyEmailContent = `
Novo pedido de orçamento recebido!

Dados do Cliente:
- Nome: ${input.name}
- Email: ${input.email}
- Telefone: ${input.phone}
- Tipo de Serviço: ${input.service}

Mensagem:
${input.message}

Data: ${new Date().toLocaleString("pt-PT")}
          `;

          await transporter.sendMail({
            from: ENV.smtpUser,
            to: input.email,
            replyTo: ENV.contactTo,
            subject: "Confirmação de Pedido de Orçamento - B&L Construções",
            text: clientEmailContent,
          });

          await transporter.sendMail({
            from: ENV.smtpUser,
            to: ENV.contactTo,
            subject: `Novo Pedido de Orçamento - ${input.name}`,
            text: companyEmailContent,
          });

          if (leadId && ENV.crmWebhookUrl) {
            try {
              await syncLeadToCrm({ id: leadId, ...input });
              await updateContactSubmissionCrm(leadId, {
                crmStatus: "synced",
                crmError: null,
                crmSyncedAt: new Date(),
              });
            } catch (crmError) {
              const message = crmError instanceof Error ? crmError.message : "Erro desconhecido no CRM";
              await updateContactSubmissionCrm(leadId, {
                crmStatus: "failed",
                crmError: message,
                crmSyncedAt: null,
              });
              console.warn("[CRM] Sincronização falhou:", message);
            }
          }

          void notifyOwner({
            title: "Novo pedido de orçamento",
            content: `${input.name} pediu orçamento para ${input.service}. Telefone: ${input.phone}`,
          }).catch(error => console.warn("[Notification] Falha ao notificar proprietário:", error));

          return { success: true, message: "Emails enviados com sucesso", leadId };
        } catch (error) {
          console.error("[SMTP] Erro ao enviar email:", error);
          return { success: false, message: "Erro ao enviar email", leadId };
        }
      }),

    list: adminProcedure.query(async () => ({
      items: await listContactSubmissions(100),
      crmConfigured: Boolean(ENV.crmWebhookUrl),
      notificationsConfigured: Boolean(ENV.forgeApiUrl && ENV.forgeApiKey),
    })),

    updateStatus: adminProcedure
      .input(z.object({ id: z.number().int().positive(), status: statusInput }))
      .mutation(async ({ input }) => ({
        success: await updateContactSubmissionStatus(input.id, input.status),
      })),

    syncCrm: adminProcedure
      .input(z.object({ id: z.number().int().positive() }))
      .mutation(async ({ input }) => {
        const lead = await getContactSubmissionById(input.id);
        if (!lead) return { success: false, status: "not_found" as const };
        if (!ENV.crmWebhookUrl) return { success: false, status: "not_configured" as const };

        try {
          await syncLeadToCrm(lead);
          await updateContactSubmissionCrm(input.id, {
            crmStatus: "synced",
            crmError: null,
            crmSyncedAt: new Date(),
          });
          return { success: true, status: "synced" as const };
        } catch (error) {
          const message = error instanceof Error ? error.message : "Erro desconhecido no CRM";
          await updateContactSubmissionCrm(input.id, {
            crmStatus: "failed",
            crmError: message,
            crmSyncedAt: null,
          });
          return { success: false, status: "failed" as const };
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
