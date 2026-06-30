# Implementation Plan

## Phase 1 - Preparation

- finalize requirements in `01_requirements/`
- review demo data in `data/`
- define API endpoints based on the SRS list
- sketch simple wireframes for home, shop, detail, guides, cart, and admin

## Phase 2 - Backend Foundation

- create `server.js` with Express
- serve static files from `public/`
- create JSON read and write functions in `src/services/`
- add routes for products, guides, orders, and requests
- introduce validation for POST requests

## Phase 3 - Frontend Foundation

- create HTML/EJS pages for the main areas
- write CSS foundation with variables, Grid/Flexbox, and responsive rules
- load the product list from the REST API with `fetch()`
- implement filter logic with Vanilla JavaScript
- store the cart in `localStorage`

## Phase 4 - Admin and Completion

- implement simple admin login
- build product and guide forms
- display orders and requests
- update README, SRS, API overview, and AI usage log
- prepare live demo

## Minimal Demo Path

1. Open the home page
2. Choose the dog animal world
3. Filter products
4. View product detail
5. Compare two products
6. Add a product to the cart
7. Submit an order
8. View the order in the admin area
