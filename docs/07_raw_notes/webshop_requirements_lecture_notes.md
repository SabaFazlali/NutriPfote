# Exercise Notes: Webshop Project Requirements

## 1. Context

The task is to design and implement a webshop project for a pet-related business.  
The client wants a modern e-commerce website that presents products, guides customers through the buying process, and allows the business to manage products, guides, orders, and consultation bookings.

The project should be treated like a real client requirement discussion.  
The client is non-technical, so technology choices are mostly open, as long as the required functionality is implemented.

---

## 2. Core Project Idea

The website should be a webshop for different pet-related product worlds.

The shop should:

- present different animal-related products
- guide customers through the buying process
- allow customers to compare products
- offer guides and advice about pet care
- allow customers to book consultations
- include a customer account system
- include a shopping cart and order process
- include an admin area for managing products, guides, orders, and bookings
- possibly connect to an inventory / stock management system via an interface

The general goal is not only to sell products, but also to help customers choose the right product for their animal.

---

## 3. Target Users

The main target users are private pet owners.

Examples:

- dog owners
- cat owners
- horse owners
- owners of small animals
- customers looking for pet food, care products, or advice

The shop is not primarily business-to-business oriented.  
However, there may be supplier-related functionality in the background, for example stock updates from suppliers.

---

## 4. Visual Design Requirements

The client gave some design preferences.

Preferred color direction:

- warm green
- cream
- coffee / brown tones
- possibly one friendly accent color

The design should feel:

- warm
- friendly
- trustworthy
- natural
- pet-oriented
- easy to understand

The website should not look cold, overly technical, or generic.

---

## 5. Main Website Areas

The website should probably contain the following areas:

### 5.1 Homepage

The homepage should introduce the business and guide users to the most important actions.

Possible homepage elements:

- product overview
- animal categories
- call-to-action for booking a consultation
- links to guides
- featured products
- product recommendations
- introduction to the shop concept
- contact option

The homepage should help users quickly understand:

- what the shop offers
- which animal categories exist
- where to find advice
- how to buy products
- how to book a consultation

---

### 5.2 Product Shop

The shop area is the central e-commerce part.

Required / expected features:

- product listing
- product categories
- product filters
- product detail pages
- product images
- product descriptions
- product variants
- product quantity selection
- shopping cart
- checkout / ordering process
- product comparison
- related products
- links to relevant guides

Products should be displayed with:

- image
- name
- short description
- price
- category
- availability / stock status
- possibly animal type
- possibly product type
- button to add to cart
- option to compare

---

### 5.3 Product Detail Pages

Each product should have its own detail page.

Possible content:

- product name
- several product images
- detailed description
- variants / package sizes
- quantity selector
- add-to-cart button
- feeding or usage instructions
- suitable animal type
- suitable weight class
- related products
- relevant guide links
- product recommendations

Example mentioned in the discussion:

A food product may have different package sizes:

- 2.5 kg
- 7.5 kg
- 15 kg large package

The customer should be able to select the desired size before ordering.

---

### 5.4 Product Variants

Products may have selectable variants.

Examples:

- package size
- quantity
- possibly animal type
- possibly flavor or product version

The product page should allow the customer to select the correct variant before adding the product to the cart.

---

### 5.5 Shopping Cart

The customer should have a normal shopping cart.

Expected functionality:

- add products to the cart
- view cart contents
- change product quantities
- remove products
- see selected variants
- see total price
- continue to checkout / order process

The cart should work in a standard e-commerce way.

---

### 5.6 Customer Account

Customers should be able to register and log in.

Possible customer account features:

- registration
- login
- profile data
- order history
- consultation bookings
- possibly saved products
- possibly saved animal information

The customer account should make the buying and consultation process easier.

---

### 5.7 Consultation Booking

The client wants the option for customers to book consultations.

Possible implementation:

- form-based booking
- customer selects topic
- customer enters contact details
- customer selects preferred date/time or submits a request
- admin can view consultation bookings in the backend

The discussion did not require live chat or AI functionality.  
A classic form-based booking system is enough unless extra functionality is added voluntarily.

Possible booking topics:

- product advice
- nutrition advice
- allergies
- weight management
- animal care
- activity level / feeding recommendation

---

### 5.8 Guides / Advice Section

The website should contain guide articles that the shop owner can create and edit.

Guides should be text-based and may include images.

Possible guide content:

- how to feed a specific animal
- how to care for a specific animal
- allergies
- weight management
- activity level
- nutrition recommendations
- product usage instructions
- animal-specific care routines

Guides should not be completely isolated from products.  
They should be connected to products through categories, tags, or recommendations.

Example:

A guide about dog allergies could link to suitable allergy-friendly dog food products.

---

## 6. Guide Structure

The guides should be categorized and filterable.

Possible guide categories:

- allergies
- weight management
- activity level
- feeding
- care
- animal type
- product type

Possible animal categories:

- dogs
- cats
- horses
- small animals

Example structure:

```text
Guides
├── Allergies
│   ├── Dogs
│   ├── Cats
│   └── Horses
├── Weight Management
│   ├── Underweight animals
│   ├── Overweight animals
│   └── Normal weight animals
├── Activity Level
│   ├── Low activity
│   ├── Medium activity
│   └── High activity
└── Feeding
    ├── Dogs
    ├── Cats
    └── Horses
```
