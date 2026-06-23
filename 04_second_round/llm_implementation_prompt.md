# LLM Implementation Prompt: Visual Restructuring & Polishing

## Objective
Refactor the NutriPfote codebase to align with the instructor's feedback. Focus purely on visual layout restructures, style adjustments, and content management (CMS) requirements. Do not add any unrequested features or extra backend logic. 

---

## Core Guidelines
1. **Rely on Summary & Screenshots**: Study the screenshots in the [screenshots/](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/04_second_round/screenshots) directory and the summary notes ([short_en.md](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/04_second_round/short_en.md)) as your primary source of truth for the target interface.
2. **Keep Code Simple**: Write the simplest, most straightforward code possible. Minimize complexity to keep the project easy to present and explain.
3. **Add Orientation Comments**: Include brief explanatory comments in English inside your modified and newly created files to make navigation and review easier.
4. **No Overbuilding**: Do not add extra pages or complex database validations. Use JSON files under `data/` for mock persistence.

---

## Targeted Files
* **Modify**:
  - [public/css/style.css](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/public/css/style.css)
  - [views/partials/header.ejs](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/views/partials/header.ejs)
  - [views/partials/footer.ejs](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/views/partials/footer.ejs)
  - [views/index.ejs](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/views/index.ejs)
  - [views/shop.ejs](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/views/shop.ejs)
  - [views/product.ejs](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/views/product.ejs)
  - [views/compare.ejs](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/views/compare.ejs)
  - [public/js/main.js](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/public/js/main.js)
  - [public/js/cart.js](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/public/js/cart.js)
  - [src/controllers/adminController.js](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/src/controllers/adminController.js)
  - [src/routes/viewRoutes.js](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/src/routes/viewRoutes.js)
  - [views/admin/index.ejs](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/views/admin/index.ejs)
  - [views/admin/products.ejs](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/views/admin/products.ejs)
  - [views/admin/guides.ejs](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/views/admin/guides.ejs)
  - [views/admin/orders.ejs](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/views/admin/orders.ejs)
  - [views/admin/questions.ejs](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/views/admin/questions.ejs)
* **Create**:
  - `data/cms.json`
  - `src/services/cmsService.js`
  - `views/admin/cms.ejs`

---

## Required Changes

### 1. Fixed Left Sidebar Layout
* Convert [header.ejs](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/views/partials/header.ejs) into a fixed sidebar menu on the left side (`position: fixed; top: 0; left: 0; bottom: 0; width: 250px;`). 
* In [style.css](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/public/css/style.css), offset the main container to the right using `margin-left: 250px;` and ensure scrollable content flows next to the sidebar.
* **Fix Navbar Overlap**: Resolve the styling bug on logged-in admin/customer pages where content gets stuck or slides under the navigation header. Ensure the main container has correct padding/margins globally to prevent any clipping.
* The sidebar must display navigation links (Startseite, Shop, Ratgeber, Beratung, Über uns, Admin), cart trigger, comparison link, login status, and the user name/logout when logged in.

### 2. Style Tweaks: Angular Elements (Eckig) & Contrast
* Reduce border-radius variables in [style.css](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/public/css/style.css) to make buttons, cards, tables, and tiles angular/rectangular (`--border-radius-sm: 4px;`, `--border-radius-md: 4px;`, `--border-radius-lg: 6px;` or similar) instead of very rounded.
* Add zebra striping for tables: `.compare-table tbody tr:nth-child(even), .admin-table tbody tr:nth-child(even) { background-color: rgba(0, 0, 0, 0.04); }`.
* Set the background of [footer.ejs](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/views/partials/footer.ejs) to be a light shade matching the main page background (`#FAF6EC`), rather than very dark. Keep dark green reserved for core CTA actions like adding to cart.

### 3. Homepage Restructuring
* Restructure [index.ejs](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/views/index.ejs)'s hero banner: place the hero image and text side-by-side (2 columns) instead of overlaying text on a background image.
* Under the animal world category cards, add explicit text links pointing to the shop with the activated filter (e.g., "Alle Produkte für Hunde anzeigen" / "Alle Produkte für Katzen anzeigen").

### 4. Shop Page Cart Icon
* In [main.js](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/public/js/main.js), replace the plus icon (`+`) inside the add-to-cart button on product cards with a shopping cart icon SVG.

### 5. Product Detail Page & Quantity Selector
* Reorder [product.ejs](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/views/product.ejs): place the product options (variants), a new quantity input field, and the "In den Warenkorb" button at the top of the details column (above the fold).
* Update [cart.js](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/public/js/cart.js)'s `window.addToCart` to accept a quantity parameter, and hook it up to the input selector on the details page.

### 6. Comparison Page Cart Actions
* In [compare.ejs](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/views/compare.ejs), add a cart button or icon for each compared product to allow immediate purchase of its default variant.

### 7. Table-Based Admin Dashboard
* Restructure admin listings ([products.ejs](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/views/admin/products.ejs), [guides.ejs](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/views/admin/guides.ejs), [orders.ejs](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/views/admin/orders.ejs), [questions.ejs](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/views/admin/questions.ejs)) to render entries inside HTML `<table>` elements with Edit/Delete action columns instead of separate cards or div rows.
* Display dashboard metrics (counters for products, guides, orders, inquiries) as statistics boxes at the top of [index.ejs](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/views/admin/index.ejs).
* Clearly state which admin is logged in and provide a logout link.

### 8. Simple JSON CMS
* Create `data/cms.json` containing editable title/text/image parameters for the Homepage, Shop, and Guides views.
* Add `src/services/cmsService.js` to read/write `data/cms.json`, integrate it into [viewRoutes.js](file:///Users/damirahavaashova/Desktop/2%20semester/Web_Apps/Group_Project/NutriPfote/src/routes/viewRoutes.js) to render pages dynamically, and build simple admin routes (`/admin/cms`) to edit these values via forms.
