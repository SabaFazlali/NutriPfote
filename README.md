# 🐾 NutriPfote — Premium Pet Nutrition

NutriPfote is a modern pet food web application developed as a study project for the Web Applications course. It focuses on delivering a premium user experience while maintaining a clean, educational codebase.

## 🚀 Quick Start

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run in development mode:**
   ```bash
   npm run dev
   ```
   *The server will start at `http://localhost:3000` with nodemon auto-reload.*

3. **Run in production mode:**
   ```bash
   npm start
   ```

## 🛠 Tech Stack

- **Backend:** Node.js & Express.js
- **Frontend:** Vanilla JavaScript (ES6+), CSS3 (Custom Design System), EJS Templates
- **Data:** JSON-based local storage (no external database required)
- **Architecture:** Controller-Service-Repository pattern

## 📂 Project Structure

```text
NutriPfote/
├── data/                  # JSON data sources (products, guides, etc.)
├── public/                # Static assets (CSS, client-side JS, images)
│   ├── css/               # Modular CSS design system
│   └── js/                # Vanilla JS frontend logic
├── src/                   # Server-side logic
│   ├── controllers/       # Route handlers
│   ├── routes/            # Express route definitions
│   ├── services/          # Business logic & data processing
│   └── utils/             # Helper functions (JSON I/O)
├── views/                 # EJS templates for dynamic rendering
└── server.js              # Application entry point
```

## ✨ Key Features

- **Dynamic Product Grid:** Fetches and renders products from the internal API.
- **Product Details:** Dedicated pages for each product with variant selection.
- **Shopping Cart:** Fully functional cart drawer with local storage persistence.
- **User Authentication:** Registration and login system with session management.
- **Checkout Process:** Secure checkout form with validation and order tracking.
- **Product Comparison:** Compare up to 3 products side-by-side (nutrition, price, etc.).
- **Pet Care Guides:** Educational content filtered by animal type.
- **Premium Design:** Fully responsive, modern UI with smooth transitions.
- **RESTful API & Documentation:** Clean endpoints with OpenAPI/Swagger documentation at `/api-docs`.

## 🔐 Implementation Details

### Module 10: Authentication & Sessions
Implemented a user system using `express-session` and `bcryptjs`. User data is stored securely in `data/users.json`. Authentication state is preserved across requests, enabling personalized profile pages and order history.

### Module 11: Validation & Checkout
Integrated `express-validator` for robust server-side data validation. The checkout process captures customer details, verifies cart integrity, and persists orders in `data/orders.json`.

### Module 12: API Documentation & Polish
Developed a comprehensive `api-docs.yaml` following OpenAPI 3.0 standards. The documentation is accessible via the `/api-docs` endpoint, providing clear schemas for products and API responses.

---
*Created as part of the Web Applications Group Project.*

