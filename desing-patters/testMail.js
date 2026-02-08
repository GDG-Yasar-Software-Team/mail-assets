import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname fix (ES module için)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// HTML dosyasını oku
const html = fs.readFileSync(
  path.join(__dirname, 'newsletter.html'),
  'utf8'
);

const resend = new Resend('re_AB3HM9Ne_6XCRa8dxbCZ9bz2b44BbEezw');

const sendMail = async () => {
  const { data, error } = await resend.emails.send({
    to: ['burakkaya4750@gmail.com'],
from: 'Test <onboarding@resend.dev>',
    subject: 'Design Patterns Event',
    html: html,
  });

  if (error) {
    console.error('HATA:', error);
    return;
  }

  console.log('Mail gönderildi 🚀', data);
};

sendMail();
