# 💞 SwipeStack

<div align="center">

**A production-ready MERN dating application featuring secure authentication, real-time messaging, payment integration, and an intuitive swipe-based matching system.**

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](https://swipestack.shop/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](LICENSE)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Configuration](#-configuration) • [Deployment](#-deployment) • [Roadmap](#-roadmap)

</div>

---

## 🎯 Overview

SwipeStack is a modern dating application built with the MERN stack, designed to facilitate meaningful connections through an engaging user experience. The platform combines secure authentication, real-time communication, and seamless payment processing with a Tinder-inspired interface.

**🌐 Live Demo:** [swipestack.shop](https://swipestack.shop/)

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🔐 Security & Authentication
- JWT-based authentication
- HTTP-only cookies
- Password encryption (bcrypt)
- Input validation & sanitization

### 💬 Real-Time Communication
- Instant messaging (Socket.IO)
- Online status indicators
- Message history persistence
- Typing indicators

</td>
<td width="50%">

### 💳 Payment Integration
- Razorpay gateway
- Secure transactions
- Premium subscriptions
- Payment history

### 💞 Smart Matching
- Swipe-based interactions
- Smooth card animations
- Match notifications
- Profile recommendations

</td>
</tr>
</table>

### ⚙️ Technical Capabilities
- **Automated Tasks** — Cron jobs for scheduled operations
- **Production-Ready** — AWS EC2, Nginx, PM2, SSL/HTTPS
- **Clean Architecture** — MVC pattern, modular structure
- **Optimized Performance** — Code splitting, lazy loading

---

## 🛠️ Tech Stack

### Frontend Technologies

| Technology | Version | Purpose |
|:-----------|:--------|:--------|
| **React** | 18.x | UI Framework |
| **Vite** | 5.x | Build Tool & Dev Server |
| **Redux Toolkit** | 2.x | State Management |
| **React Router** | 7.x | Client-Side Routing |
| **Socket.IO Client** | 4.x | WebSocket Communication |
| **Tailwind CSS** | 4.1 | Utility-First Styling |
| **DaisyUI** | 4.x | Component Library |
| **Axios** | 1.x | HTTP Client |
| **React Spring** | 9.x | Animation Library |
| **React Tinder Card** | 1.x | Swipe Interactions |

### Backend Technologies

| Technology | Version | Purpose |
|:-----------|:--------|:--------|
| **Node.js** | 18.x+ | Runtime Environment |
| **Express.js** | 4.x | Web Framework |
| **MongoDB** | 6.x | NoSQL Database |
| **Mongoose** | 8.x | MongoDB ODM |
| **Socket.IO** | 4.x | WebSocket Server |
| **Razorpay SDK** | 2.x | Payment Gateway |
| **JWT** | 9.x | Authentication Tokens |
| **bcrypt** | 5.x | Password Hashing |
| **validator** | 13.x | Input Validation |
| **node-cron** | 3.x | Task Scheduling |

### Infrastructure & DevOps

| Component | Technology |
|:----------|:-----------|
| **Cloud Hosting** | AWS EC2 (Ubuntu 22.04) |
| **Web Server** | Nginx |
| **Process Manager** | PM2 |
| **Security** | SSL/TLS (Let's Encrypt) |
| **Version Control** | Git & GitHub |

---

## 📁 Project Structure

```
SwipeStack/
│
├── 📂 frontend/
│   ├── 📂 public/                    # Static assets
│   │   ├── favicon.ico
│   │   └── manifest.json
│   │
│   └── 📂 src/
│       ├── 📂 assets/                # Images, icons, fonts
│       ├── 📂 components/            # Reusable UI components
│       │   ├── Header.jsx
│       │   ├── ProfileCard.jsx
│       │   └── ChatWindow.jsx
│       ├── 📂 context/               # React context providers
│       ├── 📂 hooks/                 # Custom React hooks
│       ├── 📂 pages/                 # Route-level components
│       │   ├── Home.jsx
│       │   ├── Matches.jsx
│       │   └── Profile.jsx
│       ├── 📂 redux/                 # State management
│       │   ├── 📂 slices/            # Redux state slices
│       │   └── 📂 store/             # Redux store config
│       ├── 📂 services/              # API service layer
│       ├── 📂 styles/                # Global styles
│       ├── 📂 utils/                 # Helper functions
│       ├── App.jsx                   # Root component
│       └── main.jsx                  # Entry point
│
└── 📂 backend/
    ├── 📂 config/                    # Configuration files
    │   ├── db.js                     # Database connection
    │   └── razorpay.js               # Payment config
    ├── 📂 controllers/               # Request handlers
    │   ├── authController.js
    │   ├── userController.js
    │   └── matchController.js
    ├── 📂 middlewares/               # Custom middleware
    │   ├── auth.js
    │   └── errorHandler.js
    ├── 📂 models/                    # Database schemas
    │   ├── User.js
    │   ├── Match.js
    │   └── Message.js
    ├── 📂 routes/                    # API routes
    │   ├── authRoutes.js
    │   ├── userRoutes.js
    │   └── matchRoutes.js
    ├── 📂 utils/                     # Utility functions
    ├── server.js                     # Entry point
    └── package.json
```

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.x or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **MongoDB** - Local installation or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** - Version control

---

### Step 1️⃣ — Clone the Repository

```bash
git clone https://github.com/seekernothing/SwipeStack.git
cd SwipeStack
```

---

### Step 2️⃣ — Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
touch .env
```

**Configure your `.env` file** (see [Configuration](#-configuration) section below)

```bash
# Start development server
npm run dev
```

✅ **Backend running at:** `http://localhost:8000`

---

### Step 3️⃣ — Frontend Setup

Open a **new terminal window**:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create environment file
touch .env
```

**Configure your `.env` file** (see [Configuration](#-configuration) section below)

```bash
# Start development server
npm run dev
```

✅ **Frontend running at:** `http://localhost:5173`

---

### Step 4️⃣ — Running Both Simultaneously (Optional)

**Option A: Using two terminals**
```bash
# Terminal 1
cd backend && npm run dev

# Terminal 2
cd frontend && npm run dev
```

**Option B: Using concurrently**
```bash
# Install concurrently globally
npm install -g concurrently

# Run from project root
concurrently "cd backend && npm run dev" "cd frontend && npm run dev"
```

---

## ⚙️ Configuration

### Backend Environment Variables

Create a `.env` file in the **`backend/`** directory:

```env
# ===================================
# SERVER CONFIGURATION
# ===================================
PORT=8000
NODE_ENV=development

# ===================================
# DATABASE
# ===================================
MONGO_URI=

# ===================================
# AUTHENTICATION
# ===================================
JWT_SECRET=your_super_secure_jwt_secret_key_min_32_chars
JWT_EXPIRE=7d
COOKIE_EXPIRE=7

# ===================================
# PAYMENT GATEWAY (RAZORPAY)
# ===================================
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_razorpay_secret_key_here

# ===================================
# CORS & FRONTEND
# ===================================
FRONTEND_URL=http://localhost:5173
SOCKET_CORS_ORIGIN=http://localhost:5173

# ===================================
# EMAIL (OPTIONAL)
# ===================================
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_EMAIL=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

---

### Frontend Environment Variables

Create a `.env` file in the **`frontend/`** directory:

```env
# ===================================
# API CONFIGURATION
# ===================================
VITE_API_URL=http://localhost:8000
VITE_SOCKET_URL=http://localhost:8000

# ===================================
# PAYMENT GATEWAY
# ===================================
VITE_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx

# ===================================
# APPLICATION
# ===================================
VITE_APP_NAME=SwipeStack
VITE_APP_VERSION=1.0.0
```

---

### Environment Variables Reference

| Variable | Description | Required | Example |
|:---------|:------------|:---------|:--------|
| `PORT` | Backend server port | ✅ Yes | `8000` |
| `MONGO_URI` | MongoDB connection string | ✅ Yes | `mongodb+srv://...` |
| `JWT_SECRET` | Secret key for JWT signing (min 32 chars) | ✅ Yes | `your_secret_key_here` |
| `JWT_EXPIRE` | JWT token expiration time | ✅ Yes | `7d` |
| `RAZORPAY_KEY_ID` | Razorpay public/test key | ✅ Yes | `rzp_test_xxxxx` |
| `RAZORPAY_KEY_SECRET` | Razorpay secret key | ✅ Yes | `secret_key_here` |
| `FRONTEND_URL` | Frontend domain for CORS | ✅ Yes | `http://localhost:5173` |
| `VITE_API_URL` | Backend API endpoint | ✅ Yes | `http://localhost:8000` |
| `VITE_SOCKET_URL` | WebSocket server URL | ✅ Yes | `http://localhost:8000` |
| `SMTP_HOST` | Email server host | ❌ No | `smtp.gmail.com` |
| `SMTP_PORT` | Email server port | ❌ No | `587` |

---

## 🌐 Deployment

### Production Build

#### 🎨 Frontend

```bash
cd frontend

# Build for production
npm run build

# Preview production build (optional)
npm run preview
```

📦 **Output:** The optimized build will be in the `frontend/dist/` directory.

---

#### 🔧 Backend

Ensure all production environment variables are properly configured:

```bash
cd backend

# Install production dependencies only
npm install --production

# Test the server
NODE_ENV=production node server.js
```

---



## 🔮 Roadmap

<table>
<tr>
<td width="50%">

### 🔐 Authentication Enhancements
- ✅ JWT Authentication
- ⬜ Google OAuth
- ⬜ Facebook Login
- ⬜ Apple Sign-In
- ⬜ Two-Factor Authentication

### 🤖 AI & Machine Learning
- ⬜ Smart match recommendations
- ⬜ Compatibility scoring algorithm
- ⬜ Profile photo verification
- ⬜ Spam detection
- ⬜ Sentiment analysis in chat

</td>
<td width="50%">

### 📱 Mobile & Performance
- ⬜ Progressive Web App (PWA)
- ⬜ React Native mobile app
- ⬜ Push notifications
- ⬜ Offline mode
- ⬜ Performance optimization

### 🎨 Features & UX
- ⬜ Video profile support
- ⬜ Location-based matching
- ⬜ Video chat integration
- ⬜ Advanced filters
- ⬜ Dark mode

</td>
</tr>
</table>

### 📦 Infrastructure
- ⬜ AWS S3 for media storage
- ⬜ Redis for caching
- ⬜ CDN integration
- ⬜ Database replication
- ⬜ Load balancing

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit** your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open** a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

---



---

## 👨‍💻 Author

<div align="center">

### **Abhishek Biradar**

[![Website](https://img.shields.io/badge/Website-swipestack.shop-blue?style=for-the-badge&logo=google-chrome)](https://swipestack.shop/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/abhishekbiradar)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail)](mailto:contact@swipestack.shop)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/seekernothing)

</div>




---

**© 2024 SwipeStack. All rights reserved.**

</div>