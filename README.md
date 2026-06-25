# NutriPfote

NutriPfote is a small pet food webshop built as a Web Applications study project. The project keeps the stack intentionally simple: Node.js, Express, EJS templates, Vanilla JavaScript, CSS, and JSON files in `data/`.

## Start

```bash
npm install
npm start
```

For development with auto-reload:

```bash
npm run dev
```

The app runs at `http://localhost:3000`.

## Implemented Features

- Start page with animal world entry points for dog, cat, horse, and small animals.
- Shop page with visible client-side filters for animal type, life stage, weight class, allergy/digestibility, and purpose.
- Product cards with image, description, starting price, variants, stock, animal type, tags, compare, and cart actions.
- Product detail pages with variants, selected package, feeding amounts, feeding/care instructions, and related guides.
- Product comparison for up to three products.
- Cart stored in `localStorage` and simple checkout that saves orders to `data/orders.json`.
- Ratgeber pages with filters, category colors, related products, and allergy-based product suggestions.
- Consultation request form that saves questions to `data/questions.json`.
- Login/register/profile pages using sessions.
- Minimal admin area for users with `role === "admin"` to manage products and guides and view orders/questions.
- REST API for products, guides, orders, and questions.

## Test Logins

To test the different user roles, you can use the following credentials on the `/login` page:

**Admin:**
```text
Email: admin@nutripfote.local
Password: admin123
```
*Note: The Admin link will only appear in the user profile after a successful admin login.*

**Customer:**
```text
Email: customer@nutripfote.local
Password: password123
```

All users log in through the normal `/login` page.

## REST API

The OpenAPI file is available at:

```text
http://localhost:3000/api-docs
```

Implemented endpoints:

- `GET /api/products`
- `GET /api/products/:id`
- `GET /api/guides`
- `GET /api/guides/:id`
- `POST /api/orders`
- `POST /api/questions`

## Data Storage

All data is stored as JSON in `data/`:

- `products.json`
- `guides.json`
- `orders.json`
- `questions.json`
- `users.json`

No SQL/NoSQL database, real payment system, supplier integration, or real AI feature is used.

## Architecture

The app follows the simple course architecture:

```text
routes -> controllers -> services -> data
```

This keeps the project understandable for first-year bachelor students while still showing routing, validation, sessions, REST endpoints, templates, client-side JavaScript, and JSON persistence.
