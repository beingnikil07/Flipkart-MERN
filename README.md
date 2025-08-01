# 🛒 Flipkart Clone

A full-stack **Flipkart Clone** built using the **MERN stack (MongoDB, Express, React, Node.js)**. This project replicates core functionalities of the Flipkart e-commerce platform — including product listings, cart, login/signup, checkout, and admin functionalities.

---

## 🔥 Key Features

- 🛍️ User authentication with JWT (Login / Register)
- 📦 Product listing with categories
- 🛒 Add to Cart & Checkout flow
- 💳 Payment gateway
- 🧾 Order history
- 🌐 Fully responsive UI

---

## 🚀 Tech Stack

### 🧠 Frontend
- React.js
- Redux (Toolkit or Thunk)
- Axios
- React Router DOM
- Material UI

### 🛠 Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for auth
- bcryptjs for password hashing
- dotenv for environment variables

---

## 📁 Folder Structure

```
flipkart-clone/
│
├── backend/
│   ├── config/            # DB config & environment
│   ├── controllers/       # Business logic
│   ├── middleware/        # Auth, error handling
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API endpoints
│   ├── utils/             # Helper functions
│   ├── server.js          # Entry point
│   └── .env

├── frontend/
│   ├── public/
│   └── src/
│       ├── components/    # Reusable UI
│       ├── screens/       # Pages (Home, Login, Cart, etc.)
│       ├── redux/         # Redux store setup
│       ├── App.js
│       ├── index.js
│       └── App.css

├── .gitignore
├── README.md
```

---

## 📸 Screenshots

```
screenshots/
├── home.png
├── product-page.png
├── cart.png
├── checkout.png
├── admin-dashboard.png
```

---

## 🧑‍💻 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/beingnikil07/flipkart-MERN.git
cd flipkart-clone
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🛡️ Authentication Flow

- Register new users with name, email, password
- Passwords are hashed using `bcrypt`
- JWT tokens used for protected routes
- Auth token stored in local storage

---

## 🔐 Admin Features

- Add/Edit/Delete products
- Manage users
- View orders
- Access admin panel via `/admin/dashboard`

---

## 📄 .gitignore Example

```gitignore
# Node
node_modules/
.env

# React
build/
.DS_Store
```

---

## 💡 Future Enhancements

- ✅ OTP-based login
- 🛒 Coupon system
- 🌙 Dark mode
- 📊 Sales analytics for admin
- 📱 Progressive Web App (PWA) support

---

## 👤 Author

**Nikil Kumar**  
Java Backend Developer | AI Enthusiast  
- GitHub: [beingnikil07](https://github.com/beingnikil07)  
- LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/nikilkumar07)  
- Portfolio: [your-portfolio.com](https://nikhilrana07.vercel.app/)

---

> If you found this project helpful, don't forget to ⭐ the repo and share it with others!
