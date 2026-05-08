# NutriPfote

NutriPfote is a study project for the Web Applications course. The goal is a small, easy-to-explain pet food webshop with product filtering, guide content, product comparison, a cart, simple orders, and an admin area for the shop team.

The focus is not a complete real-world online shop. The focus is a clean implementation of the course topics:

- semantic HTML5
- CSS / responsive layout
- Vanilla JavaScript and DOM
- Node.js and Express
- Routing
- EJS / Views
- JSON as data storage
- controller-service structure
- REST API
- simple authentication for the shop team
- validation and traceable documentation

## Project Structure

```text
NutriPfote/
├── 00_sources_original/      # original sources, notes, PDFs, audio
├── 01_requirements/          # cleaned requirements and SRS
├── 02_design/                # information architecture and visual guidelines
├── 03_project_management/    # implementation plan and AI usage log
├── data/                     # JSON files as a simple data source
├── public/                   # static files: CSS, JS, images
├── src/                      # server-side Express logic
├── views/                    # EJS templates
└── server.js                 # application entry point
```

## Current Status
**Phase 1-4 Implemented:**
- Basic server initialization with Express.js and EJS configuration.
- Data Layer configured with `fs/promises` utility to read/write from local JSON files.
- REST API structured correctly (`routes` -> `controllers` -> `services` -> `utils`) delivering `GET /api/products` and `GET /api/products/:id`.
- Responsive, premium frontend (pure CSS, Vanilla JS) fetching and rendering products dynamically on the main page.

## Guiding Principle

Every feature should stay small enough to be explained in the course context. Complex features such as real payment processing, AI support, or supplier integration are documented but are not part of the core implementation scope.
