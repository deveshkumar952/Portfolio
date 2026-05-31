// backend/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// 1. Initialize environment variables FIRST
dotenv.config();

// 2. Import your routes AFTER dotenv has populated process.env
import contactRoutes from './routes/contact.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://portfolio-zjqi.onrender.com"
    ]
  })
);
app.use(express.json()); 

// Mount all portfolio contact utilities
app.use('/api', contactRoutes);
app.get('/api/test-env', (req, res) => {
  res.json({
    emailLoaded: !!process.env.EMAIL_ADDRESS,
    passkeyLoaded: !!process.env.GMAIL_PASSKEY,
    emailValue: process.env.EMAIL_ADDRESS || "Not found"
  });
});

app.listen(PORT, () => {
  console.log(`Server running smoothly on port ${PORT}`);
});