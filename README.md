# Modern Developer Portfolio (MERN Stack)

A high-performance, responsive developer portfolio built using **Vite + React** on the frontend and **Node.js + Express** on the backend. This project showcases technical skills, professional experiences, and features a functional real-time communication contact system.

---

## 🚀 Features

### Modern Frontend Pipeline

* Migrated to **Vite + React** featuring advanced build optimizations.
* Fast development experience with lightning-fast HMR.

### Dynamic Backgrounds & Smooth Scrolling

* Custom SVG background layers.
* Native smooth layout transitions for a polished user experience.

### Interactive UI Cards

* Specialized gradient-masking hover glow effects.
* Responsive and engaging card interactions.

### Unified Multi-Channel Contact Hub

A secure contact form connected to a live **Node.js/Express API** that dispatches messages across multiple platforms simultaneously:

#### 📧 Nodemailer (Gmail SMTP)

* Sends clean HTML-formatted emails instantly.

#### 🤖 Telegram Bot Integration

* Push notifications delivered directly to your Telegram account.

#### 🛡️ Google reCAPTCHA v2 Security

* Protects contact endpoints from spam and malicious requests.

---

## 🛠️ Tech Stack

### Frontend

* **Framework:** React 19 (Vite)
* **Styling:** Tailwind CSS, Sass/SCSS
* **Icons:** React Icons

### Backend

* **Runtime:** Node.js (ES Modules)
* **Framework:** Express.js
* **Utilities:** Axios, Nodemailer, CORS, Dotenv

---

## 📁 Project Structure

```plaintext
portfolio/
├── frontend/                    # Vite + React Client
│   ├── src/
│   │   ├── components/
│   │   ├── css/
│   │   │   ├── Globals.scss
│   │   │   └── Card.scss
│   │   └── App.jsx              # Root Wrapper
│   └── .env                     # Client Environment Variables
│
└── backend/                     # Express Server
    ├── routes/
    │   └── contact.js           # Unified Notification Engine
    ├── server.js                # Main Server Entry
    └── .env                     # Backend Environment Variables
```

---

## ⚙️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

> Make sure Node.js is installed on your system.

---

### 2. Configure the Backend Server

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` directory:

```env
PORT=5000
EMAIL_ADDRESS=your-email@gmail.com
GMAIL_PASSKEY=your-16-character-app-password
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_telegram_chat_id
RECAPTCHA_SECRET_KEY=your_google_recaptcha_secret_key
```

---

### 3. Configure the Frontend Client

Open a new terminal:

```bash
cd frontend
npm install
```

Create a `.env` file inside the `frontend/` directory:

```env
VITE_APP_URL=http://localhost:5000
VITE_RECAPTCHA_SITE_KEY=your_google_recaptcha_site_key
```

---

## 🏃 Running the Application

Launch both frontend and backend servers in separate terminal windows.

### Start the Backend API

```bash
cd backend
node server.js
```

Expected output:

```bash
Server running smoothly on port 5000
```

---

### Start the Frontend Development Server

```bash
cd frontend
npm run dev
```

Expected output:

```bash
Local: http://localhost:5173/
```

---

## 🌐 Access the Application

Open the following URL in your browser:

```text
http://localhost:5173
```

Your fully functional MERN portfolio should now be running locally.

---

## 📌 Highlights

* Responsive design for all screen sizes
* Modern Vite-powered React frontend
* Secure Express.js backend
* Email notifications via Gmail SMTP
* Telegram instant message alerts
* Google reCAPTCHA spam protection
* Optimized project architecture
* Easy deployment and customization

---

## 📄 License

This project is open-source and available under the MIT License.
