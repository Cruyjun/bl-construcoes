import { describe, it, expect } from 'vitest';
import { ENV } from './_core/env';
import { appRouter } from './routers';
import type { TrpcContext } from './_core/context';

const publicContext: TrpcContext = {
  user: null,
  req: {} as TrpcContext['req'],
  res: {} as TrpcContext['res'],
};

describe('contact.sendEmail - SMTP Configuration', () => {
  it('deve ter as variáveis SMTP configuradas corretamente', () => {
    // Verificar que todas as variáveis SMTP estão definidas
    expect(ENV.smtpHost).toBeDefined();
    expect(ENV.smtpPort).toBeDefined();
    expect(ENV.smtpUser).toBeDefined();
    expect(ENV.smtpPass).toBeDefined();
    expect(ENV.contactTo).toBeDefined();

    // Verificar que não estão vazias
    expect(ENV.smtpHost).not.toBe('');
    expect(ENV.smtpUser).not.toBe('');
    expect(ENV.smtpPass).not.toBe('');
    expect(ENV.contactTo).not.toBe('');
  });

  it('deve ter a porta SMTP correta (587 ou 465)', () => {
    // A porta deve ser 587 (TLS) ou 465 (SSL)
    expect([587, 465]).toContain(ENV.smtpPort);
  });

  it('deve ter o host SMTP configurado como mail.blconstrucoes.com', () => {
    expect(ENV.smtpHost).toBe('mail.blconstrucoes.com');
  });

  it('deve ter o email de contacto configurado como contacto@blconstrucoes.com', () => {
    expect(ENV.contactTo).toBe('contacto@blconstrucoes.com');
  });

  it('deve ter a porta SMTP configurada como 465 (SSL)', () => {
    expect(ENV.smtpPort).toBe(465);
  });

  it('deve confirmar a configuração do destinatário através do endpoint leve', async () => {
    const result = await appRouter.createCaller(publicContext).contact.status();

    expect(result).toEqual({ configured: true });
  });
});
