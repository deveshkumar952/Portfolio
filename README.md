# Modern Developer Portfolio (MERN Stack)

A high-performance, responsive developer portfolio built using **Vite + React** on the frontend and **Node.js + Express** on the backend. This project showcases technical skills, professional experiences, and features a functional concurrent communication contact system.

---

## 🚀 Features

### Modern Frontend Pipeline

- Migrated to **Vite + React** featuring advanced build optimizations.
- Fast development experience with lightning-fast HMR.

### Dynamic Backgrounds & Smooth Scrolling

- Custom SVG background layers.
- Native smooth layout transitions for a polished user experience.

### Interactive UI Cards

- Specialized gradient-masking hover glow effects.
- Responsive and engaging card interactions.

### Unified Multi-Channel Contact Hub

A secure contact form connected to a live **Node.js/Express API** that dispatches messages across multiple platforms concurrently, optimized to prevent platform timeouts in serverless or cloud hosting environments.

#### 📧 Resend Email Integration

- Powered by the official **Resend Node.js SDK**.
- Sends clean, responsive HTML-formatted emails instantly to your inbox.
- Features configured `reply_to` headers to let you reply straight to your site visitors with a single click.

#### 🤖 Telegram Bot Integration

- Real-time push notifications delivered directly to your personal Telegram chat or channel via the Telegram Bot API.

#### 🛡️ Google reCAPTCHA v2 Security

- Protects contact endpoints from automated spam and malicious requests.

---

## 🛠️ Tech Stack

### Frontend

- **Framework:** React 19 (Vite)
- **Styling:** Tailwind CSS, Sass/SCSS
- **Icons:** React Icons

### Backend

- **Runtime:** Node.js (ES Modules)
- **Framework:** Express.js
- **Utilities:** Resend SDK, Axios, CORS, Dotenv

---

## 📁 Project Structure

```plaintext
portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── css/
│   │   │   ├── Globals.scss
│   │   │   └── Card.scss
│   │   └── App.jsx
│   └── .env
│
└── backend/
    ├── routes/
    │   └── contact.js
    ├── server.js
    └── .env
## ⚙️ Setup & Installation

### Prerequisites

Before starting, make sure you have installed:

- Node.js (v18 or higher recommended)
- npm or yarn
- Git

Verify installation:

```bash
node -v
npm -v
git --version
```

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

---

## 2️⃣ Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

### Required Packages

```bash
npm install express cors dotenv axios resend
```

Create a `.env` file inside the backend directory:

```env
PORT=5000

# Resend
RESEND_API_KEY=your_resend_api_key
EMAIL_ADDRESS=your_email@example.com

# Telegram
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_chat_id

# Google reCAPTCHA
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
```

Backend structure:

```plaintext
backend/
├── routes/
│   └── contact.js
├── server.js
├── package.json
└── .env
```

---

## 3️⃣ Frontend Setup

Open a new terminal and navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

### Required Packages

```bash
npm install react-icons
npm install react-google-recaptcha
npm install axios
```

Create a `.env` file:

```env
VITE_APP_URL=http://localhost:5000
VITE_RECAPTCHA_SITE_KEY=your_site_key
```

Frontend structure:

```plaintext
frontend/
├── src/
│   ├── assets/
│   ├── components/
│   ├── css/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
└── .env
```

---

## 4️⃣ Running the Backend

From the backend directory:

```bash
npm start
```

Or if using nodemon:

```bash
npm run dev
```

Expected Output:

```bash
Server running on port 5000
```

Backend URL:

```text
http://localhost:5000
```

---

## 5️⃣ Running the Frontend

From the frontend directory:

```bash
npm run dev
```

Expected Output:

```bash
VITE v7.x ready in xxx ms

➜ Local: http://localhost:5173/
```

Frontend URL:

```text
http://localhost:5173
```

---

## 6️⃣ Testing Contact Form

Fill in:

- Name
- Email
- Message
- Complete reCAPTCHA

On successful submission:

### Email

- Message is sent via Resend
- Delivered to configured inbox

### Telegram

- Instant notification appears in Telegram

### API Response

```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

---

## 7️⃣ Production Deployment

### Frontend (Vercel)

```bash
npm run build
```

Deploy:

```bash
vercel --prod
```

### Backend (Render)

1. Create a Web Service
2. Connect GitHub repository
3. Add Environment Variables
4. Deploy

Build Command:

```bash
npm install
```

Start Command:

```bash
npm start
```

---

## 8️⃣ Environment Variables Summary

### Backend

```env
PORT=
RESEND_API_KEY=
EMAIL_ADDRESS=
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
RECAPTCHA_SECRET_KEY=
```

### Frontend

```env
VITE_APP_URL=
VITE_RECAPTCHA_SITE_KEY=
```

---

## 9️⃣ Troubleshooting

### Resend Emails Not Sending

Check:

```env
RESEND_API_KEY
EMAIL_ADDRESS
```

Verify sender domain in Resend dashboard.

### Telegram Notifications Not Working

Verify:

```env
TELEGRAM_BOT_TOKEN
TELEGRAM_CHAT_ID
```

Test:

```bash
https://api.telegram.org/bot<token>/getMe
```

### reCAPTCHA Failure

Confirm:

```env
RECAPTCHA_SECRET_KEY
VITE_RECAPTCHA_SITE_KEY
```

Ensure both keys belong to the same Google reCAPTCHA project.

---

## 🔒 Security Features

- Environment variable protection
- Google reCAPTCHA validation
- CORS configuration
- Secure API routing
- Email spoofing protection with Reply-To headers

---

## 📈 Future Improvements

- Dark/Light Theme Toggle
- Blog Integration
- Project CMS
- Analytics Dashboard
- Resume Download Tracking
- GitHub Activity Feed
- Multi-language Support

---

