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
          console.log('[SMTP] Iniciando envio de email...');
          console.log('[SMTP] Host:', ENV.smtpHost);
          console.log('[SMTP] Port:', ENV.smtpPort);
          console.log('[SMTP] User:', ENV.smtpUser);
          console.log('[SMTP] Contact To:', ENV.contactTo);
          
          // Criar transporter SMTP
          const transporter = nodemailer.createTransport({
            host: ENV.smtpHost,
            port: ENV.smtpPort,
            secure: ENV.smtpPort === 465, // true para 465, false para 587
            requireTLS: true,
            auth: {
              user: ENV.smtpUser,
              pass: ENV.smtpPass,
            },
            tls: {
              rejectUnauthorized: false,
            },
            logger: true,
            debug: true,
          });
          
          // Verificar conexão SMTP
          console.log('[SMTP] Verificando conexão...');
          await new Promise((resolve, reject) => {
            transporter.verify((error, success) => {
              if (error) {
                console.error('[SMTP] Erro na verificação:', error);
                reject(error);
              } else {
                console.log('[SMTP] Conexão verificada com sucesso!');
                resolve(success);
              }
            });
          });

          console.log('[SMTP] Conexão OK. Preparando emails...');
          
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
Email: geral@blconstrucoes.com
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
          console.log('[SMTP] Enviando email para cliente:', input.email);
          const clientResult = await transporter.sendMail({
            from: ENV.smtpUser,
            to: input.email,
            replyTo: ENV.contactTo,
            subject: "Confirmação de Pedido de Orçamento - B&L Construções",
            text: clientEmailContent,
          });
          console.log('[SMTP] Email cliente enviado:', clientResult.messageId);

          // Enviar email para a empresa
          console.log('[SMTP] Enviando email para empresa:', ENV.contactTo);
          const companyResult = await transporter.sendMail({
            from: ENV.smtpUser,
            to: ENV.contactTo,
            subject: `Novo Pedido de Orçamento - ${input.name}`,
            text: companyEmailContent,
          });
          console.log('[SMTP] Email empresa enviado:', companyResult.messageId);

          console.log('[SMTP] Emails enviados com sucesso!');
          return { success: true, message: 'Emails enviados com sucesso' };
        } catch (error) {
          console.error('[SMTP] Erro ao enviar email:', error);
          return { success: false, message: 'Erro ao enviar email' };
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
