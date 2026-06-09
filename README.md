# 📄 AI Invoice Generator & Analyzer

An elegant, modern web application designed to automatically parse invoice details using Google Gemini AI, manage invoices, track business profiles, and print/export structured invoices.

---

## ✨ Key Features

- **🤖 AI-Powered Invoice Parsing**: Transform raw text prompts (e.g., *"Invoice client John Doe $150 for consultation on 9 June"*) into structured invoices using the Google Gemini API (`gemini-2.5-flash`).
- **📊 Modern Dashboard**: Interactive KPI metrics tracking total invoices, total paid amounts, total outstanding unpaid amounts, and a list of the 5 most recent invoices.
- **💼 Business Profile Management**: Store your company details (name, email, address, phone, GSTIN) and default tax preferences.
- **🎨 Digital Asset Uploads**: Dynamic local storage for uploading company logos, digital signatures, and official stamps.
- **🖨️ PDF Generation & Print**: Clean, printable invoice templates styled for browser print dialogs or saving as PDFs.
- **🔒 Secure Authentication**: Integrated with Clerk for seamless authentication and secure API access.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js with Vite
- **Authentication**: Clerk React SDK
- **Styling**: Custom CSS & TailwindCSS
- **Routing**: React Router DOM

### Backend
- **Framework**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **AI Integration**: Google GenAI SDK (`@google/genai`)
- **File Uploads**: Multer middleware

---

## ⚙️ Environment Configuration

To run this project, configure the following environment variables in `.env` files (which are kept secure and ignored by Git):

### Backend (`/InvoiceGenerator/backend/.env`)
```env
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
FRONTEND_URL=http://localhost:5173         # Allowed CORS Origin
BACKEND_URL=http://localhost:4000          # Server public base URL
```

### Frontend (`/InvoiceGenerator/frontend/.env`)
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_BASE_URL=http://localhost:4000     # Backend server base API endpoint
```

---

## 🚀 Getting Started

### 1. Backend Server Setup
Navigate to the `backend` directory, install dependencies, and start the nodemon server:
```bash
cd InvoiceGenerator/backend
npm install
npm start
```
*The server will run on [http://localhost:4000](http://localhost:4000).*

### 2. Frontend Client Setup
Navigate to the `frontend` directory, install dependencies, and spin up the Vite dev server:
```bash
cd InvoiceGenerator/frontend
npm install
npm run dev
```
*The frontend client will run on [http://localhost:5173](http://localhost:5173).*

---

## 🌐 Deployment Guidelines

When deploying to platforms like Vercel, Netlify, Render, or Railway:

1. **Deploy Frontend (e.g. Vercel)**:
   - **Framework**: Vite / React
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Environment Variables**: Set `VITE_CLERK_PUBLISHABLE_KEY` and `VITE_API_BASE_URL` pointing to your deployed backend URL.

2. **Deploy Backend (e.g. Render)**:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment Variables**: Add your `MONGO_URI`, `GEMINI_API_KEY`, Clerk keys, and update `FRONTEND_URL` and `BACKEND_URL` to point to your live URLs.
