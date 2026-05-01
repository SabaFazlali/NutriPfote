# 🐾 Project Specification: Pet Food Shop
> **Status:** Draft / Preparation for Stakeholder Meeting
> **Version:** 1.0

---

## 📋 Project Overview
| Attribute | Details |
| :--- | :--- |
| **Project Name** | Pet Food Shop |
| **Target Audience** | Pet owners (B2C), Shop Management Team (B2B/Internal) |
| **Primary Goal** | Streamlining the digital buying process through data-driven guidance. |

---

## 🔍 Initial Situation & Problem Statement
The current digital presence lacks a cohesive data structure. Customers struggle to find products that match specific health and life-stage requirements.
*   **Core Issue:** Lack of clear connection between animal species, life stage, and feeding purpose.
*   **Impact:** Poor navigation, inconsistent product data, and lack of professional advice during the purchase.

---

## 🎯 Project Goals
1.  **Integrated Animal Worlds:** Create intuitive entry points for different pet categories.
2.  **Smart Filtering:** Implement a robust filter logic (Species → Life Stage → Digestibility).
3.  **Content Hub:** Integrated guides and comparison tools for better decision-making.
4.  **Headless/CMS Driven:** Centralized content management for dynamic updates.
5.  **External Connectivity:** Provide a high-performance **REST API** for external system integrations.

---

## 🛠 Technical Scope
*Based on the "Web-Applikationen" Course Syllabus:*
- **Frontend:** Semantic HTML5, Advanced CSS (Layout/Design), JavaScript (DOM/Client-side logic).
- **Backend:** Node.js & Express (Routing & Server-side logic).
- **Data:** JSON-based REST API, Sequelize (Database interaction).
- **Security:** JWT Authentication for the Shop Team.

---

## ❓ Strategic Questions for the Stakeholder (Professor)
*To finalize the Technical Specification (TZ), we need clarification on the following functional and technical requirements:*

### 1. Data Structure & Business Logic
*   **Filter Logic:** Should filters be strictly hierarchical (e.g., choosing "Dog" restricts all further filters) or can customers apply global attributes like "Grain-free" across species?
*   **Product Relations:** How should the "Digestibility" and "Feeding Purpose" be quantified? (e.g., simple tags vs. structured nutritional data).
*   **CMS Scope:** Does the CMS need to handle product inventory, or is it strictly for "Guides and Comparisons" content?

### 2. API & Integration (REST/OpenAPI)
*   **Consumer Requirements:** Which external platforms are we prioritizing? (e.g., Mobile apps, price comparison engines). This determines the granularity of our REST API.
*   **External Data:** Is the API read-only for external systems, or should it support POST/PUT for partner stock updates?

### 3. User Roles & Security
*   **Authentication Flow:** For the "Shop Team", do we need granular permissions (e.g., Editor vs. Admin) or a single access level?
*   **Session Management:** Based on the syllabus (Topic 10), should we prioritize JWT or Session-based cookies for the internal shop area?

### 4. Technical Constraints
*   **Frameworks:** Are there specific CSS frameworks (e.g., Bootstrap) we MUST use, or are we encouraged to use Vanilla CSS for the core design?
*   **Database:** Since Sequelize is in the plan, should we prepare for a specific SQL dialect (PostgreSQL/MySQL)?

---
*Prepared for the "Gesprächsvorbereitung" (Week 2/3) - Web-Applikationen SOSE 2026*
Конспекты с консултациии с клиентом: 
- есть лайвдемо 
- сдаем до конца семестра
- заказчик - Тереза Блум, владелица магазина 
- веб-магазин, который разным животным показывает разыне проукдты 
- сравнивать продукты в зависимости от животного 
- если можно самому выкладывать и редактировать продукты 
- достичь, чтобы клиентам было леге покупать что-то 
- теплый зеленый с кремовым и графитом 
- дуржелюбный акцент 
- регистрация 
- корзина
- возможность платить 
- заказать товары
- можно зарезервивароть консультацию 
- гайды 
- сравнение между продуктами 
- админская панель
-отслеживание заказов 
- фильтровать продукты 
- продукты с карточкой: картинка, цены, описание, возможность получить совет 
- разные варианты упаковки 
- сколько в наличиеи есть, сколько заказано 
- рекомендации по приему, колчиеству, режиму 
- 5 килограмовая собака, которая имеет другие пожелания, в отлчиие от 20 килограмовой собаки 
- стурктуруа животного, заботы 
- рекемоендаци: "вам также можно будет инерерсено"
- гайды по категориям 
- гайд по аллергиям 
- гайд по весу
- гайд по счету 
- гайд по актвиности эивотного 
- знаки аллергий, знаки экологиченочсти
- ии поддержка 
- забронировать звонок
- забронировать посщеение 
- в табличке сравниение товаров 
- какие продукты
- какие категории
- статус заказов 
- есть ли продукт на сайте, показываетс яли продукт из наличия 
- текстовые гайды 
- гайды с картинками 
- разные инетфрейсы и еркдмендации и гайды для разных животных 
- отправлтяь вопросы в админскую панель 
- не делать для больших клиентов 
- получать обновления от поставщика и актуализировать базу даннынх 
- продукты, типы животных
- нодж
- без БД, только жсоны
- пересечение должно быть внутри как рест 
- без реакта, без фреймворка
- базироваться на ноуд 
- требование IEEE со слайда загрузить в ллмку и спросить ее