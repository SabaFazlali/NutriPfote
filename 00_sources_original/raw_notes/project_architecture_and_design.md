# Architecture & Design Advice
*Based on client requirements and technical constraints.*

## Architecture
- **Monolithic Node.js App:** Since we must use Node.js and no frontend frameworks, build a monolithic architecture. Serve static files (HTML, CSS, JS) from a `public/` directory via Node.
- **RESTful API:** Create simple Express or plain Node `http` endpoints (e.g., `/api/products`, `/api/orders`) to handle client requests dynamically using `fetch()` in Vanilla JS.
- **JSON Data Storage:** Use Node's `fs` module to read/write to local `.json` files. Create a clear structure: `users.json`, `products.json`, `orders.json`, `guides.json`.
- **Authentication:** Implement JWT (JSON Web Tokens) for user and admin sessions. Store tokens in HTTP-only cookies or `localStorage`.

## Directory Structure
```
NutriPfote/
├── data/              # .json files acting as database
├── public/            # static assets
│   ├── css/           # Vanilla CSS styles
│   ├── js/            # Vanilla JS logic
│   ├── img/           # images and icons
│   └── index.html     # main entry point
├── src/               # backend code
│   ├── controllers/   # logic for API routes
│   ├── models/        # JSON file interaction wrappers
│   └── routes/        # API route definitions
└── server.js          # Node.js entry point
```

## UI / Design System
- **CSS Architecture:** Use standard CSS with CSS Variables (Custom Properties) for the color palette (`--color-primary: #8FBC8F; /* warm green */`, `--color-bg: #FFFDD0; /* cream */`, `--color-text: #2F4F4F; /* graphite */`).
- **Responsive Layouts:** Extensively use CSS Grid and Flexbox for product grids and alignment. 
- **Component Approach (Vanilla):** Create reusable UI components through JS template literals or HTML `<template>` tags for rendering product cards, guides, and tables dynamically based on JSON API responses.

## Key Features Implementation
- **Filter Logic:** Implement client-side filtering arrays for speed, or pass query parameters `?animal=dog&weight=5` to the REST API.
- **Shopping Cart:** Manage the cart state in `localStorage` on the frontend before submitting the final order via POST request to the API.
- **Admin Panel:** A separate HTML page (`/admin`) guarded by a JWT token check on the server, providing forms to edit the JSON data directly.
