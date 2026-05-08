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
- **Pet Care Guides:** Educational content filtered by animal type.
- **Premium Design:** Fully responsive, modern UI with smooth transitions.
- **RESTful API:** Clean endpoints for product and guide data retrieval.

---
*Created as part of the Web Applications Group Project.*

