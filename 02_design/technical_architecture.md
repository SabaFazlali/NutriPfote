# Technical Architecture

## Architecture Decision

NutriPfote is implemented as a small monolithic Node.js/Express application. This form fits the course because it makes server logic, routing, REST, JSON, views, and static files visible in a manageable project.

## Layers

```text
Browser
  |
  | HTML, CSS, Vanilla JS, fetch()
  v
Express Server
  |
  | routes -> controllers -> services
  v
JSON files in data/
```

## Responsibilities

### Browser / Frontend

- display pages
- operate filters
- load products through the REST API
- manage the cart in `localStorage`
- submit forms

### Routes

- define URL and HTTP method
- example: `GET /api/products`
- contain as little business logic as possible

### Controllers

- read request data
- call the appropriate services
- send JSON or HTML responses

### Services

- read and write JSON files
- filter products
- validate simple data rules
- generate new IDs when needed

### Data

- contains demo data
- replaces a database
- stays small and easy to read

## Planned REST Endpoints

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/api/products` | load product list |
| `GET` | `/api/products/:id` | load one product |
| `GET` | `/api/guides` | load guides |
| `POST` | `/api/orders` | save an order |
| `POST` | `/api/questions` | save a consultation request |
| `POST` | `/api/admin/login` | log in as admin |
| `POST` | `/api/admin/products` | create a product |
| `PUT` | `/api/admin/products/:id` | update a product |
| `DELETE` | `/api/admin/products/:id` | delete a product |

## Intentionally Simple Implementation

- no real database
- no complex permission system
- no real payment logic
- no background jobs
- no external APIs

The architecture should show that the group can build web applications in a structured way without artificially increasing the project scope.
