import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resend = new Resend('re_AB3HM9Ne_6XCRa8dxbCZ9bz2b44BbEezw');

// HTML dosyasını oku
const htmlContent = fs.readFileSync(path.join(__dirname, 'design-patterns.html'), 'utf-8');

async function sendEmail() {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'burakkaya4750@gmail.com',
      subject: 'GDG Design Patterns Event - Test Email',
      html: htmlContent
    });

    console.log('✅ Email başarıyla gönderildi!');
    console.log('Yanıt:', JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('❌ Email gönderilirken hata oluştu:');
    console.error('Error:', error);
    console.error('Message:', error.message);
    if (error.response) {
      console.error('Response:', error.response);
    }
  }
}

sendEmail();
