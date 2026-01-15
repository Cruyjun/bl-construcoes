import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const smtpHost = process.env.SMTP_HOST;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const contactTo = process.env.CONTACT_TO;

const logFile = '/tmp/smtp-test.log';

function log(msg) {
  const timestamp = new Date().toISOString();
  const logMsg = `[${timestamp}] ${msg}`;
  console.log(logMsg);
  fs.appendFileSync(logFile, logMsg + '\n');
}

log('=== TESTE SMTP ===');
log(`Host: ${smtpHost}`);
log(`User: ${smtpUser}`);
log(`Contact To: ${contactTo}`);

// Teste Porta 587 (STARTTLS)
async function testPort587() {
  log('\n--- Testando Porta 587 (STARTTLS) ---');
  
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    tls: {
      rejectUnauthorized: false,
    },
    connectionTimeout: 5000,
    socketTimeout: 5000,
  });

  return new Promise((resolve) => {
    const timeout = setTimeout(() => {
      log('❌ Porta 587: TIMEOUT (sem resposta do servidor)');
      resolve(false);
    }, 10000);

    transporter.verify((error, success) => {
      clearTimeout(timeout);
      if (error) {
        log(`❌ Porta 587: ${error.message}`);
        resolve(false);
      } else {
        log('✅ Porta 587: Conexão OK');
        resolve(true);
      }
    });
  });
}

// Teste Porta 465 (SSL)
async function testPort465() {
  log('\n--- Testando Porta 465 (SSL) ---');
  
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    tls: {
      rejectUnauthorized: false,
    },
    connectionTimeout: 5000,
    socketTimeout: 5000,
  });

  return new Promise((resolve) => {
    const timeout = setTimeout(() => {
      log('❌ Porta 465: TIMEOUT (sem resposta do servidor)');
      resolve(false);
    }, 10000);

    transporter.verify((error, success) => {
      clearTimeout(timeout);
      if (error) {
        log(`❌ Porta 465: ${error.message}`);
        resolve(false);
      } else {
        log('✅ Porta 465: Conexão OK');
        resolve(true);
      }
    });
  });
}

async function main() {
  const result587 = await testPort587();
  const result465 = await testPort465();
  
  log('\n=== RESUMO ===');
  log(`Porta 587: ${result587 ? 'OK' : 'FALHOU'}`);
  log(`Porta 465: ${result465 ? 'OK' : 'FALHOU'}`);
  
  if (!result587 && !result465) {
    log('\n⚠️  AMBAS AS PORTAS FALHARAM - Possível bloqueio de egress no hosting');
  }
  
  log('\nLogs salvos em: ' + logFile);
}

main().catch(err => {
  log(`Erro: ${err.message}`);
  process.exit(1);
});
