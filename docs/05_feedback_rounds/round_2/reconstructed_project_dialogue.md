# Reconstruction of the Project Dialogue

> **Text Status:** reconstruction from automatic transcription.  
> The phrasing has been converted into normal English (from German/Russian), and the remarks have been assigned to roles. Where the original transcription does not allow for a confident reconstruction of a single word or specific interface element, it is marked as `[unintelligible]` or conveyed by meaning rather than verbatim.  
> **Participants:** `Lecturer`, `Student 1`, `Student 2`.  
> Subsequent conversations about active participation, the exam, and Live Coding, which are unrelated to the project, have been excluded from the original recording.

---

## 1. Introduction: Team, AI Usage, and Meeting Goal

**Student 1:**  
Unfortunately, there are only two of us left now. I don't know if that will be a problem in the end. Another person is registered for the exam, but apparently is not participating.

**Lecturer:**  
We need to keep an eye on that. During the presentation or exam, I can of course ask that person questions as well.

**Student 1:**  
We have used AI heavily. But you said that we are allowed to use it for general, everyday things, as long as we document its use. Without AI, we wouldn't have reached the current state in the available time.  
However, we want to be able to explain every relevant line and the architecture during the presentation. That's why we consciously try to implement a minimal, but complete version. The less unnecessary complexity we have, the better we can explain everything.

**Student 2:**  
The application is already running online. We wanted to show it briefly.

**Lecturer:**  
Good. Let's look at the site together. I'll compare it with the ideal or customer-expected website and tell you directly what needs to be changed so that it comes as close to the goal as possible.  
Take notes. You don't need to ask many questions during this; just ask if something is unclear.

**Student 1:**  
Can we record the meeting?

**Lecturer:**  
That would be problematic from a data protection perspective. Data protection and data security are not the same thing: Data protection asks whether and for what purpose personal data may be collected at all; data security asks whether existing data is sufficiently protected. For a recording, you need a legal basis or consent.

---

## 2. Tour of the Current Shop and Comparison Page

**Student 1:**  
On the start page, we have links to the information areas. In the shop, all products are displayed. There are filters; filters can be set and removed again.  
You can select products and then click on "Compare" at the top.

**Lecturer:**  
The comparison function is good. That already looks clean.  
However, add a clear path to the shopping cart. I shouldn't just be able to click on "Details", but should also be able to get directly to the shopping cart if needed.

**Student 2:**  
Directly on the comparison page?

**Lecturer:**  
Yes. Check whether a clear shopping cart button or a shopping cart icon makes sense there.

**Lecturer:**  
Visually, the general rule is: The elements in the reference project are not as heavily rounded. You can use slight roundings, but not these very soft, "cute" pills and cards.  
This applies to buttons, tiles, tables, and other containers.

**Student 1:**  
We deliberately chose the strong rounding because the design was supposed to look friendly and "cute" and fit the illustrations.

**Lecturer:**  
I'm not evaluating here which design I personally prefer. I'm evaluating how close you come to the customer website or the requirements. If the customer demands a different design, that is authoritative.

**Lecturer:**  
For tables: Make the rows alternately slightly different in brightness. So zebra striping — one row lighter, the next slightly darker.  
The tables and cards should generally be less heavily rounded.

---

## 3. Desired Navigation and Start Page

**Lecturer:**  
In the reference design, the navigation is not at the top, but on the left. It is fixed.  
When you scroll, the content area scrolls; the navigation stays put. The three dots or the menu also remain visible, only the content next to it scrolls.

**Student 2:**  
So a fixed sidebar on the left and a scrollable content area?

**Lecturer:**  
Exactly.

**Lecturer:**  
On the start page: The large hero image and the text stand side by side. The text is on one side, the image on the other. Make the components less round.  
In the "Animal Worlds" or categories, image and text are in cards. Under each category, there should be an explicit link that jumps to the shop and activates the appropriate filter — for example, "Show all products for dogs" or "Show all products for cats".

**Student 1:**  
Jumping to the shop with the activated filter is already working.

**Lecturer:**  
Good. Then make it visually and textually explicit. Currently, it could look like a purely decorative element. The link must clearly state what happens.

**Lecturer:**  
The shop itself is already largely functionally correct. In the reference design, the filter is positioned differently or closer to the navigation. The most important things are:
- less rounding on tiles and containers,
- visible shopping cart icon,
- clear structure,
- place filter and comparison comprehensibly.

---

## 4. Product Detail Page and Shopping Cart

**Lecturer:**  
The detail page is there, that is good. But I would rearrange it.  
At the top should be, above all, the information that distinguishes this product from others. Directly below that come available options, quantity, and the shopping cart button.

**Student 2:**  
So you shouldn't have to scroll all the way down the page before you can buy?

**Lecturer:**  
Exactly. If someone selects three kilograms, for example, that person should be able to select the quantity directly and then put it in the shopping cart immediately. The shopping cart area must be as far up as possible, right after the relevant options.

**Student 1:**  
Should we reduce the roundings here as well?

**Lecturer:**  
Yes. Consistent everywhere. Less heavily rounded, closer to the template.

---

## 5. Login and Admin Area

**Student 1:**  
There is also a login.

**Lecturer:**  
When you log in as an admin, it should look more or less like an admin dashboard.

**Student 2:**  
What exactly should be visible there?

**Lecturer:**  
Key figures can be at the top, such as:
- How many products are there?
- How many orders are there?
- Other short status values.

Below that follows the administrative navigation. As subpages you need at least:
- Products,
- Guides or consultation content,
- Orders,
- Inquiries.

The navigation should be clear links in the sidebar. When someone is logged in, it should be visible which user is currently logged in; that's where "Login" or "Logout" belongs too.

**Student 1:**  
And what should the administration pages look like?

**Lecturer:**  
Not as individual large card blocks. More like simple tables.  
Example "Products":
- a "Create new product" button at the top,
- below that a large table with the existing products,
- on the right per row actions like "Edit" and "Delete".

The same principle applies to guides, orders, and inquiries. You essentially already have the content and functionality. It is primarily about the presentation and a uniform administration interface.

---

## 6. CMS, JSON Files, Routes, and Controllers

**Lecturer:**  
Another point is the Content Management System. In the reference project, you can edit content for the respective pages — title, text, and image. This can again be displayed in a tabular format.

**Student 2:**  
So an editable start page?

**Lecturer:**  
Yes. You basically need three corresponding areas or data sources:
1. Start page,
2. Shop,
3. Guides.

For each of these, you have JSON data, associated routes, and controllers. Technically, it is the same process, just implemented three times for different pages.

**Student 1:**  
We have implemented some things as realistically as possible, for example, orders and other functions. Should these things stay? Is that more of an advantage?

**Lecturer:**  
That is not particularly important for the evaluation. The admin panel and orders were mentioned, but you don't need to add unnecessary new complexity.  
You already have the relevant functionality. What I described today is essentially: Rebuild it visually and structurally so that it matches the template.

---

## 7. Question of Reducing the Scope

**Student 1:**  
Can we still reduce the scope? For example, keep the filter, search, and comparison logic more compact or reduce the number of fields on cards?  
Our concern is that the project will become too much. During the presentation and the questions, we have to be able to explain everything. The more compact the project, the better we can prepare.

**Lecturer:**  
The page is there, the functionality is there. You do not need to build even more new features now.  
I have not requested any additional content today. The functionality you have is good and complete enough. The main need for rework is in the visual design and structure:
- Sidebar instead of top navigation,
- less strong roundings,
- tables in the admin area,
- rearrange product detail page,
- categories with clear filter links,
- visual approach to the reference.

**Student 2:**  
Can we generally keep the color palette?

**Lecturer:**  
The color palette is essentially fine. In the reference design, different gradations of the same color are used: for example, for navigation, filters, and darker accents.  
Use dark accents purposefully, not everywhere; for example, for important actions like the shopping cart.

---

## 8. Evaluation and Exam Questions

**Student 1:**  
How do the questions work? Do we first get the points for the project and then additional points for answers?

**Lecturer:**  
The exact question sets have not been written yet. Later there will be a uniform list so that everyone gets the same types of questions.

**Student 2:**  
In what direction might the questions go? Architecture, functionality, comments in the code?

**Lecturer:**  
A possible question could refer to something that I do not see directly in the presentation. Example: Your API.  
If the API was part of the requirements, I might ask about it because during the presentation I might not immediately see whether it works and how it is structured.

**Student 1:**  
Do additional comments help for documentation?

**Lecturer:**  
[No clear answer in the recording.] What matters is that you can explain what you have built and why.

**Lecturer:**  
According to my explanation, the evaluation is roughly composed of the following areas:
- **2 Points:** Time management or adherence to the presentation time,
- **10 Points:** Required pages and functionality,
- **5 Points:** Typography, Corporate Identity, and Form,
- **3 Points:** Visual implementation or closeness to the reference.

> **Note:** The total of 20 points is very likely from the recording; individual terms in the description of the last three points were acoustically not entirely clear.

**Student 2:**  
Are the ten points for the pages divided among individual pages?

**Lecturer:**  
At the core, I check per page: Is it there, and does it work?  
This includes, for example, the start page, shop, comparison page, and the other required areas.

---

## 9. AI Reflection for the Presentation

**Student 1:**  
What exactly is meant by a reflection on the use of AI? Should we reflect on how we implemented MVC, controllers, and services?

**Lecturer:**  
No. You do not need this special reflection for MVC, controllers, and services.  
The reflection refers to the use of AI.

**Student 2:**  
What should be in it?

**Lecturer:**  
Briefly describe what you learned when working with AI. For example:
- What happens if you give the AI too little context?
- How must prompts be structured so that usable code or usable content is produced?
- How often did you have to correct results?
- What typical problems were there — such as loss of context, conflicts, or false assumptions?

This doesn't have to be a long text. A short paragraph or a bullet point on a slide is enough.

**Student 1:**  
Additionally, can we show in one or two slides: "This was covered in the course, and this is how we implemented it"?

**Lecturer:**  
Yes. That is a function and architecture description, not an AI reflection. That can be one or two short slides.

---

## 10. Presentation Duration and Division

**Student 2:**  
How long is the presentation?

**Lecturer:**  
Twelve minutes, including the demonstration of the website.

**Student 1:**  
And if three of us were presenting, should everyone speak for about four minutes?

**Lecturer:**  
You can divide the presentation internally however you like. I don't give a fixed rule on who speaks for how long.

---

# Concrete To-Do List from the Conversation

## Mandatory Visual Adjustments

1. **Rebuild Navigation**
   - Fixed left sidebar instead of primarily top navigation.
   - Content area scrollable separately.
   - Keep menu/three-dots element visible or fixed.

2. **Reduce Roundings Everywhere**
   - Buttons, cards, tables, product tiles, and containers only slightly rounded.
   - Do not use the current very "cute"/pill-like design.

3. **Align Start Page with Template**
   - Hero: Text and image side by side.
   - Categories "Dog"/"Cat" with image and text.
   - Under each category an explicit link to the shop with activated filter.

4. **Improve Shop and Comparison**
   - Show shopping cart icon or clear access to the shopping cart.
   - Structure filter and comparison clearly.
   - Tables with alternating background colors.

5. **Rearrange Product Detail Page**
   - Distinguishing product information at the top.
   - Directly after that, options, quantity selection, and "Add to cart".

6. **Rebuild Admin Dashboard**
   - Sidebar links for products, guides, orders, and inquiries.
   - Compact key figures at the top.
   - Administration pages as tables, not as cards.
   - "Create new product", "Edit", "Delete" visible.
   - Show login/logout and logged-in user.

7. **Add or Make Visible CMS / Content Management**
   - Make content such as title, text, and image editable for the start page, shop, and guide respectively.
   - Cleanly separate data/routes/controllers per area.

## Presentation

1. Total duration: **12 minutes including live demo**.  
2. Briefly explain:
   - Pages and functionality,
   - MVC/Controller/Service as implementation description,
   - API, because an exam question is possible on this.
3. Include a brief AI reflection:
   - Prompt context,
   - Typical errors,
   - Necessary corrections,
   - Insights from the usage.
4. Do not artificially inflate the project further. The functionality is already considered good according to the lecturer; focus on visual alignment and safe explainability.
