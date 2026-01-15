import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import nodemailer from "nodemailer";
import { ENV } from "./_core/env";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    sendEmail: publicProcedure
      .input((data: any) => data)
      .mutation(async ({ input }) => {
        try {
          // Criar transporter SMTP
          const transporter = nodemailer.createTransport({
            host: ENV.smtpHost,
            port: ENV.smtpPort,
            secure: ENV.smtpPort === 465, // true para porta 465, false para outras
            auth: {
              user: ENV.smtpUser,
              pass: ENV.smtpPass,
            },
          });

          // Email para o cliente (confirmação)
          const clientEmailContent = `
Olá ${input.name},

Obrigado por contactar a B&L Construções!

Recebemos o seu pedido de orçamento com os seguintes dados:

**Dados do Contacto:**
- Nome: ${input.name}
- Email: ${input.email}
- Telefone: ${input.phone}
- Tipo de Serviço: ${input.service}

**Mensagem:**
${input.message}

A nossa equipa analisará o seu pedido e entrará em contacto dentro de 24 horas úteis.

Atenciosamente,
B&L Construções
Tel: 928 095 224
Email: info@blconstrucoes.com
          `;

          // Email para a empresa (notificação)
          const companyEmailContent = `
Novo pedido de orçamento recebido!

**Dados do Cliente:**
- Nome: ${input.name}
- Email: ${input.email}
- Telefone: ${input.phone}
- Tipo de Serviço: ${input.service}

**Mensagem:**
${input.message}

Data: ${new Date().toLocaleString('pt-PT')}
          `;

          // Enviar email para o cliente
          await transporter.sendMail({
            from: ENV.smtpUser,
            to: input.email,
            subject: "Confirmação de Pedido de Orçamento - B&L Construções",
            text: clientEmailContent,
          });

          // Enviar email para a empresa
          await transporter.sendMail({
            from: ENV.smtpUser,
            to: ENV.contactTo,
            subject: `Novo Pedido de Orçamento - ${input.name}`,
            text: companyEmailContent,
          });

          console.log('Emails enviados com sucesso para:', input.email, 'e', ENV.contactTo);
          return { success: true, message: 'Emails enviados com sucesso' };
        } catch (error) {
          console.error('Erro ao enviar email:', error);
          return { success: false, message: 'Erro ao enviar email' };
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
