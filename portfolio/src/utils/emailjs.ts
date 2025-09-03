// src/utils/emailjs.ts
import emailjs from 'emailjs-com';

export const sendContactEmail = async (formData: { name: string; email: string; message: string }) => {
  const SERVICE_ID = 'service_rvroc0o';
  const TEMPLATE_ID = 'template_3pjp4yd';
  const PUBLIC_KEY = 'aOferTJcVxWA2j_iA';

  const templateParams = {
    name: formData.name,
    time: new Date().toISOString(),
    email: formData.email,
    message: formData.message,
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
};
