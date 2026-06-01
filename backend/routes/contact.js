// backend/routes/contact.js
import 'dotenv/config';
import express from 'express';
import axios from 'axios';
import { Resend } from 'resend';

const router = express.Router();

// Initialize the Resend SDK with your environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

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
      message: 'Server is reaching routes successfully!',
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

    // Create the execution array for both third-party platforms
    const notifications = [];

    // 1. Queue Telegram Dispatch
    notifications.push(
      axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        text: messageContent,
        chat_id,
      }).catch(err => {
        console.error('Production Telegram notification failed:', err.message);
      })
    );

    // 2. Queue Resend SDK Dispatch
    notifications.push(
      resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'deveshkumar952@gmail.com', // Explicitly set to ensure delivery
        subject: `New Message From ${name}`,
        html: generateEmailTemplate(name, email, userMessage),
        reply_to: email,
      }).catch(err => {
        console.error('Production Email delivery failed:', err);
      })
    );

    // 3. WAIT for both APIs to respond before letting Render spin down the CPU
    await Promise.all(notifications);

    // 4. NOW RESPOND TO THE FRONTEND
    return res.status(200).json({
      success: true,
      message: 'Message processed and sent successfully!',
    });

  } catch (error) {
    console.error('Systems Error:', error.message);
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