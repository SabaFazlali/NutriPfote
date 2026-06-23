# Extended Presentation Requirements & Expectations

This document combines the official presentation grading rubric (from `01_requirements/Presentation/Bestandteile und Bewertung der Präsentation.pdf`) with the instructor's detailed feedback and expectations gathered during the second round of review (from `04_second_round/short_en.md`).

By analyzing the instructor's comments, we have a much clearer understanding of what he actually expects to see and hear during the presentation, beyond the standard bullet points.

---

## 1. Time Management & Presentation Structure
**Standard Requirement:**
* The presentation must be exactly **12 minutes** (+/- 1 minute for full points).
* Grading: 2 Points for exact timing, 1 Point for 1-2 min deviation, 0 Points if off by more than 2 minutes.

**Instructor's Expanded Expectations:**
* The 12 minutes **includes** the live website demo.
* Do not waste time on overly long introductions. Be concise.
* The structure should briefly but clearly cover:
  1. **What pages exist** and **what functionality exists**.
  2. **Technical Architecture:** How the project is structured (MVC), how the API works.
  3. **Interface differences:** How the Admin and Customer interfaces differ.
  4. **AI Reflection:** How AI was used (briefly).
  5. **Task distribution** within the team.

---

## 2. Live Demo & Functional Components
**Standard Requirement:**
* Functional components: What functions should the website have?
* Required pages must be present and functionally complete (10 Points total: 1 point per page present, 1 point for functionality).
* Visual implementation according to customer wishes (5 Points: Font, Corporate Identity, Closeness to Mockups).

**Instructor's Expanded Expectations:**
* **Visuals Matter Heavily:** The instructor explicitly emphasized that the current UI is too "rounded" and doesn't match the reference design. The live demo must showcase a design that has been corrected (less border-radius, left-fixed sidebar, specific homepage layout).
* **Scope Control:** The instructor noted the existing functionality is mostly sufficient. Do not present newly added, overcomplicated features that were not requested. Focus the demo on showcasing the required, polished features:
  * Cart and comparison functionality.
  * Clear animal category filters.
  * Admin dashboard (which must be a proper table-based layout, not just a customer page with extra buttons).
  * CMS functionality (editable content for homepage, shop, advisor).

---

## 3. Technical Implementation & The Questioning Phase
**Standard Requirement:**
* Technical implementation: How were the functions implemented? (MVC, API, etc.)
* Final questioning: 10 Points (2 questions per person).

**Instructor's Expanded Expectations (CRITICAL):**
* **Individual Accountability:** Every single team member must understand the project completely and be able to explain their own contribution, the code, the architecture, and the implemented functionality. Being registered for the exam is not enough; if you cannot answer questions, you get zero points for this section.
* **The "Black Box" Warning:** Using AI to write code is allowed, but **not understanding the AI-generated code is unacceptable**. The team must be prepared to explain exactly how any generated code works.
* **Focus on the Backend/API:** The instructor specifically warned that he may ask about things *not directly visible* in the UI, especially the API. The team must be thoroughly prepared to explain:
  * Routes, Controllers, and Services (MVC structure).
  * Data storage and JSON structure.
  * API endpoints and how they connect to the frontend.
  * Login/Admin authorization logic.
  * Cart/Comparison and product filtering logic.

---

## 4. Use of AI & Reflection
**Standard Requirement:**
* Use of AI: In which areas was AI used in what way, and what conclusion can you draw?
* Grading: 3 Points (1.5 for Presentation, 1.5 for Reflection).

**Instructor's Expanded Expectations:**
* The AI reflection **does not need to be long**. A short paragraph or one slide with bullet points is enough.
* It should focus on the **actual practical use** of AI during the project, not a general philosophical discussion about AI architecture.
* **Key points to hit based on his feedback:**
  * AI was useful for boilerplate code and UI suggestions.
  * Context is key (vague prompts yielded unusable/inconsistent output).
  * Human oversight was mandatory: the team had to constantly correct AI-generated code, ensure it matched the required project architecture, and resolve conflicts it created.
  * **Conclusion:** AI-generated code must always be reviewed, tested, and understood by the developers.
