# Extended Client Requirements
*Based on consultation with Client (Theresa Blum, Shop Owner).*

## General Expectations
- **Deadline:** End of the semester.
- **Goal:** Make the purchasing process easier and more intuitive for customers.
- **Target Audience:** Individual B2C customers (Not for large B2B clients).

## Design & UI
- **Color Palette:** Warm green, cream, and graphite.
- **Tone:** Friendly and welcoming.
- **Personalized UI:** Different interfaces and recommendations based on the selected animal type.

## Core Features
1. **User Accounts & Shopping:**
   - Registration and login.
   - Shopping cart and payment options.
   - Order tracking and status updates.
2. **Product Catalog & Details:**
   - Filter products based on animal, weight, age, and allergies.
   - Product cards: Image, price, description, packaging variants, availability (in-stock/ordered).
   - Badges for allergies and eco-friendly products.
   - Recommendations on intake, quantity, and feeding routine.
   - "You might also like" cross-selling recommendations.
   - Compare products in a table, specific to the animal type.
3. **Content & Guidance:**
   - Guides categorized by: animal, allergies, weight, age, and activity level.
   - Both text-based and image-based guides.
   - Advice feature directly on product cards.
4. **Interactive Services:**
   - Book a consultation call.
   - Book an in-person visit.
   - Send questions directly to the admin panel.
   - AI-powered support feature.

## Admin Features (Shop Team)
- Admin panel to upload and edit product data.
- Track customer orders and inquiries.
- Receive updates from suppliers to update the database.

## Technical Constraints
- Backend: Node.js (No framework like Express if strict, though standard Web App courses allow Express).
- Frontend: Vanilla (No React, Vue, or other frontend frameworks).
- Database: No real database allowed. Only JSON files for data storage.
- Architecture: REST API connecting frontend and JSON backend.
