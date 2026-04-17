# 🛒 Buy Smart – MERN E-commerce Application

🚀 A full-stack e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

---

## 🌐 Live Demo

🔗 Frontend: https://buy-smart-three.vercel.app
🔗 Backend API: https://buy-smart-52yy.onrender.com/api

---

## 📸 Features

* 🛍️ Browse and view products
* 🔍 Search and sort products
* 🛒 Add to cart functionality
* 🔐 User authentication (JWT based)
* 📦 Product management (CRUD)
* 🖼️ Image upload using Multer
* 📱 Fully responsive design

---

## 🛠️ Tech Stack

### Frontend

* React.js
* CSS
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/Buy-Smart.git
cd Buy-Smart
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create a `.env` file inside `server` folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

```bash
cd client
npm install
```

Create `.env` file inside `client` folder:

```env
VITE_API_URL=https://buy-smart-52yy.onrender.com/api
```

Run frontend:

```bash
npm run dev
```

---

## 📁 Folder Structure

```
Buy-Smart/
│
├── client/       # React Frontend
├── server/       # Node/Express Backend
│   ├── uploads/  # Product Images
│   ├── controllers/
│   ├── routes/
│   └── ...

---

## 🚧 Challenges Faced

* Handling image uploads in production
* Fixing deployment issues (Vercel + Render)
* Managing environment variables
* Debugging API and frontend integration

---

## 🧠 What I Learned

* Full-stack development using MERN
* REST API integration
* Deployment and production debugging
* Handling real-world bugs and fixes

---

## 📬 Contact

👤 Sufiyan Omer Ali
📧 [sufiyanomerali00@gmail.com](mailto:sufiyanomerali00@gmail.com)
🔗 GitHub: https://github.com/sufiyanomeraliomerali-899

---

⭐ If you like this project, please give it a star!
