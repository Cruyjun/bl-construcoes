import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const smtpHost = process.env.SMTP_HOST;
const smtpPort = parseInt(process.env.SMTP_PORT || '587');
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const contactTo = process.env.CONTACT_TO;

console.log('Testando conexão SMTP...');
console.log('Host:', smtpHost);
console.log('Port:', smtpPort);
console.log('User:', smtpUser);
console.log('Contact To:', contactTo);

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: false, // true para 465, false para 587 com STARTTLS
  requireTLS: true,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

// Testar conexão
transporter.verify((error, success) => {
  if (error) {
    console.error('Erro na conexão SMTP:', error);
    process.exit(1);
  } else {
    console.log('✅ Conexão SMTP bem-sucedida!');
    
    // Enviar email de teste
    const mailOptions = {
      from: smtpUser,
      to: contactTo,
      subject: 'Teste de Email - B&L Construções',
      text: 'Este é um email de teste do sistema de contactos.',
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Erro ao enviar email:', error);
        process.exit(1);
      } else {
        console.log('✅ Email enviado com sucesso!');
        console.log('Response:', info.response);
        process.exit(0);
      }
    });
  }
});
