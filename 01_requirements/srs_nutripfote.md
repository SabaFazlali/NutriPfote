# Software Requirements Specification - NutriPfote

Orientation: IEEE STD 29148-2018, adapted to a study project in the Web Applications course.

## 1. Introduction

### 1.1 Purpose

This document describes the requirements for NutriPfote, a web-based pet food shop for private pet owners and a small shop team.

### 1.2 Scope

NutriPfote supports product search, filtering, guide content, product comparison, a cart, simple ordering, and maintenance of product and guide data.

### 1.3 Product Overview

The system consists of an HTML/CSS/JavaScript frontend, a Node.js/Express backend, and JSON files as the data source. Communication between frontend and backend is handled through REST endpoints.

## 2. Sources and References

- `00_sources_original/raw_notes/initial_project_overview.md`
- `00_sources_original/raw_notes/webshop_requirements_lecture_notes.md`
- `00_sources_original/raw_notes/detailed_client_requirements.md`
- course slides on HTML, CSS, JavaScript, Express, REST, JSON, sessions/JWT, and validation

## 3. Requirements

### 3.1 Functional Requirements

FR-01: Customers can open animal worlds such as dog, cat, horse, and small animals.  
FR-02: Customers can filter products by animal type, life stage, weight class, digestibility/allergy, and feeding purpose.  
FR-03: Customers can see product cards with image, name, short description, price, package variants, and availability.  
FR-04: Customers can open a product detail page with description, feeding advice, variants, and related guides.  
FR-05: Customers can compare products in a simple table.  
FR-06: Customers can add products with a selected variant and quantity to a cart.  
FR-07: Customers can submit a simple order. Real payment processing is not part of the core scope.  
FR-08: Customers can read guides by animal type and topic.  
FR-09: Customers can submit a consultation request through a form.  
FR-10: Shop team members can log in to an admin area.  
FR-11: The shop team can create, edit, and delete products and guides.  
FR-12: The shop team can view orders and consultation requests.  
FR-13: The backend provides product, guide, order, and request data through REST endpoints.

### 3.2 Performance Requirements

NFR-01: The application should be responsive when using small JSON files.  
NFR-02: The start page and product list should load without noticeable delay while demo data is used.  
NFR-03: The implementation should remain understandable for first-year bachelor's students.

### 3.3 Usability Requirements

NFR-04: The navigation should show only the main areas: shop, guides, consultation, cart, and admin.  
NFR-05: Filters should be visible and clearly labeled.  
NFR-06: Form error messages should clearly state which field needs to be corrected.  
NFR-07: The layout should be usable on desktop and smartphone screens.

### 3.4 Interface Requirements

API-01: `GET /api/products` returns all products.  
API-02: `GET /api/products/:id` returns one product.  
API-03: `GET /api/guides` returns all guides.  
API-04: `POST /api/orders` stores a simple order.  
API-05: `POST /api/questions` stores a consultation request.  
API-06: Admin endpoints may only be accessed after login. // Login для клиентов в интерфейсе, но в нормальном случае регистрация для апи и для админской панели сайта могут отличаться. Но можно заччилить и на апи логин забить, для апи логина просто забьем. 

### 3.5 Logical Database Requirements

DB-01: Data is stored in JSON files in the `data/` folder.  
DB-02: Products, guides, orders, requests, and users are stored separately.  
DB-03: Each entity has a unique `id`.  
DB-04: No SQL or NoSQL database is used.

### 3.6 Design Constraints

DC-01: The frontend uses HTML5, CSS, and Vanilla JavaScript.  // EJS вместо ваниллы.
DC-02: The backend uses Node.js and Express.  
DC-03: The code is separated into simple areas: routes, controllers, services, and data.  
DC-04: No React, Vue, or Angular components are used.  
DC-05: No real payment, real supplier integration, or real AI feature is implemented.

### 3.7 Software System Qualities

SQ-01: Understandability: file names and function names should clearly show their purpose.  
SQ-02: Maintainability: data access is encapsulated in services so controllers can stay small.  
SQ-03: Traceability: important decisions are documented in Markdown files.  
SQ-04: Security: admin routes receive simple authentication. Passwords are not stored in plain text.

### 3.8 Additional Information

This document describes the core scope. Extensions are collected in `scope_and_out_of_scope.md`.
