// backend/routes/contact.js
import express from 'express';
import axios from 'axios';
import nodemailer from 'nodemailer';

const router = express.Router();

// 1. Initialize the Nodemailer Transporter ONCE at startup
// This reuses the SMTP connection pool instead of recreating it on every click.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY, 
  },
});

// HTML Email Template Generator
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #007BFF;">New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">${userMessage}</blockquote>
      <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
    </div>
  </div>
`;

// =========================================================================
// ROUTE 1: GET /api/data (Status check / test route)
// =========================================================================
router.get('/data', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'hle!',
    data: {
      message: 'Message and email sent successfully!',
    }
  });
});

// =========================================================================
// ROUTE 2: POST /api/contact (Optimized Asynchronous Messaging Engine)
// =========================================================================
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message: userMessage } = req.body;
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id = process.env.TELEGRAM_CHAT_ID;

    // Validate configuration variables immediately
    if (!token || !chat_id) {
      return res.status(400).json({
        success: false,
        message: 'Telegram token or chat ID is missing from system variables.',
      });
    }

    const messageContent = `New message from ${name}\n\nEmail: ${email}\n\nMessage:\n\n${userMessage}\n\n`;

    // 2. RESPOND IMMEDIATELY TO THE FRONTEND
    // This stops the UI spinner instantly so the user doesn't wait on slow email handshakes.
    res.status(200).json({
      success: true,
      message: 'Message processing started successfully!',
    });

    // 3. BACKGROUND WORKERS (Executed asynchronously without 'await')
    // Node's event loop processes these tasks silently after releasing the client.
    
    // Background Task A: Dispatch Telegram Alert
    axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
      text: messageContent,
      chat_id,
    }).catch((err) => {
      console.error('Production background Telegram notification failed:', err.message);
    });

    // Background Task B: Dispatch SMTP Mailer
    transporter.sendMail({
      from: "Portfolio", 
      to: process.env.EMAIL_ADDRESS, 
      subject: `New Message From ${name}`, 
      text: messageContent, 
      html: generateEmailTemplate(name, email, userMessage), 
      replyTo: email, 
    }).catch((err) => {
      console.error('Production background Email delivery failed:', err.message);
    });

  } catch (error) {
    console.error('Systems Error:', error.message);
    // Safe-check: Only reply with error if response headers haven't already been emitted
    if (!res.headersSent) {
      return res.status(500).json({ success: false, message: 'Server error occurred.' });
    }
  }
});

// =========================================================================
// ROUTE 3: POST /api/google-recaptcha (Remains awaited for structural score verification)
// =========================================================================
router.post('/google-recaptcha', async (req, res) => {
  const secret_key = process.env.RECAPTCHA_SECRET_KEY;
  const { token } = req.body;

  try {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;
    const googleRes = await axios.post(url);

    if (googleRes.data.success) {
      return res.status(200).json({
        message: "Captcha verification success!!",
        success: true,
      });
    }

    return res.status(500).json({ error: "Captcha verification failed!", success: false });
  } catch (error) {
    return res.status(500).json({ error: "Captcha verification failed!", success: false });
  }
});

export default router;