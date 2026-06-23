# Project Feedback Summary — Expanded Notes

## 1. Team, exam registration, and responsibility

If Saba is registered for the exam but cannot answer questions about the project, she will receive zero points for the question part. Being registered is not enough. Each student must understand the project and be able to explain their own contribution, the code, the architecture, and the implemented functionality.

The teacher made it clear that AI usage is allowed, but only if the team understands what was generated and how it works. The project can be AI-assisted, but it must not be a black box. During the presentation and the follow-up questions, the team must be able to explain the implementation.

Key point: using AI is acceptable; not understanding the AI-generated code is not acceptable.

---

## 2. General evaluation of the current project

The teacher’s overall opinion was not that the project is functionally bad. The opposite: the main functionality is already there and mostly sufficient.

The main problem is that the current interface does not look close enough to the requested reference design / ideal customer version. The remaining work should focus mainly on visual restructuring and alignment with the expected design, not on adding a lot of new complex features.

Priority: do not overbuild the project. Make the existing functionality visually and structurally closer to the required version.

---

## 3. Global layout and navigation

The navigation should be changed to a fixed menu on the left side.

The left-side menu should stay fixed while the content area scrolls. The user should always see the navigation while moving through the page.

The top-right area should still contain important quick actions:

* cart,
* comparison,
* login/logout.

The teacher compared the current layout with the expected layout and clearly pointed out that the reference version has a more sidebar-based structure.

Required changes:

* move the main menu to the left,
* keep it fixed,
* keep cart / comparison / login accessible,
* avoid a layout where everything depends only on the top navigation.

---

## 4. General visual style

The current design is too rounded. The teacher repeatedly said that the buttons, product cards, tables, and containers should not be so heavily rounded.

Small border-radius is acceptable, but the current “cute”, very soft, pill-like style is too far from the reference design.

Required changes:

* reduce border-radius everywhere,
* make buttons less round,
* make cards less round,
* make tables less round,
* make the whole interface more similar to the customer reference.

The teacher did not say that the current style is ugly. He said that personal taste does not matter here. The grading is based on how close the project is to the requested design.

---

## 5. Homepage

The homepage should be restructured.

The main image should not be used as a background image behind the text. It should be placed next to the text, on the side. The expected layout is: text on one side, image on the other side.

Required changes:

* place the main image to the right of the text,
* avoid using the image as a background,
* reduce roundness of the homepage elements,
* align the homepage more closely with the reference design.

The “animal worlds” / animal category section should be positioned more clearly on the homepage. The teacher mentioned that the animal-related section should be visually clearer and closer to the expected layout.

The animal cards on the homepage must obviously lead to filtered product pages. At the moment, the cards may look like decorative elements. The user should clearly understand that clicking them opens the shop with the corresponding animal filter.

Required changes:

* make the dog/cat cards clearly clickable,
* add explicit text links under the cards,
* examples:

  * “Show all products for dogs”
  * “Show all products for cats”
* make these links lead to the shop with the correct filter already activated.

---

## 6. Shop page

The shop page should also use the left-side menu structure.

The shop layout should be more vertical and cleaner. The teacher mentioned that the filter/menu structure should be placed more like in the reference design.

Required changes:

* keep the shop structured in columns,
* use the left menu/sidebar,
* make filters clear,
* keep comparison functionality,
* make cart access obvious.

On product cards, the icon for adding something to the cart should be a cart icon, not just a plus. A plus icon is less clear. A cart icon communicates the action better.

Required changes:

* replace the plus icon with a cart icon,
* reduce card roundness,
* make product-card actions clearer.

---

## 7. Comparison page

The comparison page is already liked by the teacher, but some details should be corrected.

The table on the comparison page should use alternating background colors for rows. This improves contrast and readability.

Required changes:

* add zebra striping to the comparison table,
* use slightly different background shades for alternating rows,
* make the table visually closer to the reference.

The details on the comparison page should also be reviewed and adjusted where necessary. The teacher liked the comparison functionality, but the design still needs refinement.

---

## 8. Product detail page

The product detail page exists and is functionally fine, but it should be reorganized.

Important information should be moved higher on the page. The user should not need to scroll through a long page before seeing the relevant product options and the cart button.

The teacher specifically said that the information that makes the product different from other products should be shown higher up. After that, the user should immediately see:

* available options,
* quantity selector,
* add-to-cart button.

Required changes:

* reorder the product detail page,
* move important information above the fold,
* fit the most important content into one screen if possible,
* add quantity selection before adding to cart,
* place the cart action directly below the available options.

The page should answer quickly:

* What is this product?
* What options are available?
* How many pieces / units does the user want?
* How can the user add it to the cart?

---

## 9. Advisor / guide page

The advisor page seems acceptable. The teacher did not criticize it heavily.

Main action:

* keep the advisor page,
* visually align it with the rest of the design,
* reduce roundness if necessary,
* make sure it fits the same navigation/sidebar structure.

---

## 10. Cart, comparison, and login state

The interface should clearly show whether a user is logged in.

If a user is logged in, the interface should display who is currently logged in. Login/logout should be placed clearly in the navigation area or top-right user area.

Required changes:

* show the currently logged-in user,
* make login/logout status visible,
* keep cart and comparison visible in the user interface.

There are also some “stuck” or inconsistent text/texture/layout elements in the logged-in admin and customer versions. These should be cleaned up.

Required changes:

* fix broken or misplaced text elements,
* fix inconsistent UI pieces in admin mode,
* fix inconsistent UI pieces in customer mode,
* make logged-in and logged-out states visually stable.

---

## 11. Admin dashboard

The admin dashboard must be improved after login.

The teacher expects the admin interface to look like a real dashboard. It should not just be a normal customer page with a few extra functions.

Expected admin dashboard elements:

* overview statistics at the top,
* admin navigation,
* product management,
* guide/advisor content management,
* order management,
* request/inquiry management.

The admin interface should use tables for visual clarity. The teacher explicitly said that the admin area should not be shown mainly as separate blocks or cards. It should use large tables.

Required changes:

* create a proper admin dashboard,
* add a large table layout,
* use tables for products, advisor content, orders, and inquiries,
* add buttons such as:

  * “Create new product”
  * “Edit”
  * “Delete”
* make the admin interface visually distinct from the customer interface.

For the products admin page, the expected structure is:

1. Button at the top: “Create new product”
2. Large table below
3. Product entries as rows
4. Edit/delete actions at the end of each row

The same principle should be used for other admin sections.

---

## 12. CMS / editable content

For the admin login, there should be an editable CMS-like structure.

The teacher mentioned that content such as title, text, and image should be editable. This applies especially to the main content pages.

There are three main content areas/pages:

1. homepage,
2. shop,
3. advisor / guide page.

The idea is that the admin should be able to manage these contents through structured data, routes, and controllers.

Expected implementation idea:

* editable homepage content,
* editable shop-related content,
* editable advisor content,
* separate data structures / JSON files if needed,
* separate routes/controllers for these areas.

The teacher emphasized that the pattern is basically repeated. It is not conceptually new each time: it is the same CRUD / REST-style structure applied to several content areas.

---

## 13. Footer and colors

The footer should use a shade of the background color. The teacher mentioned that the reference design uses different shades of the same color palette.

The overall color palette is mostly acceptable, but it should be used more consistently.

Required changes:

* use background-color shades for footer and navigation,
* use darker accent colors only for important actions,
* do not overuse dark colors,
* keep the design close to the reference version.

The darker color should be used carefully, for example for important CTA elements such as cart-related actions.

---

## 14. Scope control

The teacher did not ask the team to add many new functions. The main message was: the functionality already exists and is mostly good enough.

The important work is:

* visual restructuring,
* better layout,
* closer alignment with the reference,
* clearer admin interface,
* clearer CMS/editing structure,
* better presentation readiness.

The team should avoid increasing the project complexity too much. The project must remain explainable during the presentation and question phase.

---

## 15. Presentation and questions

The presentation should take 12 minutes total, including the website demo.

The presentation should briefly cover:

* what pages exist,
* what functionality exists,
* how the project is structured,
* how the API works,
* how the admin/customer interfaces differ,
* how AI was used.

The teacher may ask about things that are not directly visible during the presentation, especially the API. Since the API was part of the requirements, it is a likely topic for questions.

The team should be prepared to explain:

* routes,
* controllers,
* services,
* data storage / JSON structure,
* API endpoints,
* login/admin logic,
* cart/comparison logic,
* product filtering,
* AI-generated parts of the code.

---

## 16. AI reflection

The AI reflection does not need to be long.

It should focus on the actual use of AI during the project, not on general architecture.

Possible points:

* AI was useful for generating boilerplate and UI/code suggestions.
* AI produced better results when given enough context.
* When prompts were vague, the output was often unusable or inconsistent.
* The team had to correct AI-generated code.
* The team had to check whether generated code matched the project structure.
* AI sometimes created conflicts with existing code or architecture.
* The team learned that AI-generated code must be reviewed, tested, and understood.

A short paragraph or one slide with bullet points is enough.

---

# Final prioritized task list

## Highest priority

1. Move navigation to a fixed left sidebar.
2. Reduce roundness everywhere.
3. Put homepage image next to the text, not behind it.
4. Make animal cards clearly link to filtered shop pages.
5. Improve shop/product card design.
6. Replace plus icon with cart icon.
7. Improve comparison table contrast with alternating row colors.
8. Reorder product detail page so key info, quantity, options, and cart button fit near the top.
9. Add quantity selection before adding to cart.
10. Rework admin dashboard into a proper table-based admin interface.
11. Show who is logged in.
12. Add/edit CMS-like content management for homepage, shop, and advisor page.
13. Fix inconsistent logged-in customer/admin UI elements.
14. Use footer/background color shades consistently.
15. Prepare to explain AI usage and the API.

## Do not waste time on

1. Adding many new features.
2. Overcomplicating the backend.
3. Creating unnecessary pages.
4. Making the design prettier according to personal taste instead of matching the reference.
5. Building functionality that the teacher did not ask for.
