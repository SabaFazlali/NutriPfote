# Technische Umsetzung (Course Topics Mapping)

Diese Übersicht verknüpft die Themen des Kurses "Web Applications" mit der tatsächlichen Implementierung in NutriPfote. Dies hilft für Teil "2. Technische Umsetzung" der Präsentation.

## 01-02 Web Development & Architektur
*   **Architektur:** Wir verwenden eine moderne Client-Server-Architektur basierend auf dem **MVC-Pattern (Model-View-Controller)**.
*   **Trennung der Anliegen (Separation of Concerns):** HTML (EJS) für die Struktur, CSS (Custom & Bootstrap) für das Styling, JavaScript (Client-seitig) für Interaktionen und Node.js/Express (Server-seitig) für die Logik.

## 03 CSS & Bootstrap
*   **Responsive Design:** Die Seite ist vollständig responsiv (Mobile First Ansatz) und passt sich an verschiedene Bildschirmgrößen an.
*   **Styling:** Eine Kombination aus Vanilla CSS für spezifisches Design (Farben, Block-Struktur) und Bootstrap für das Grid-System und Standard-Komponenten, um Entwicklungszeit zu sparen.

## 04 JS DOM Manipulation
*   **Interaktivität:** Wir nutzen Client-seitiges JavaScript zur Manipulation des Document Object Models (DOM). 
*   **Beispiele:** Dynamisches Aktualisieren der Warenkorb-Anzahl ohne Seiten-Reload, Filter-Funktionen im Shop.

## 05 Express.js
*   **Backend:** Als Web-Server Framework setzen wir Node.js mit Express ein.
*   **Statische Dateien:** Express liefert statische Assets wie CSS, Bilder und clientseitige Skripte aus (`express.static`).

## 06 Routing
*   **Seitenstruktur:** Wir haben ein klares Routing-Konzept implementiert. Jeder Bereich (Startseite, Shop, Ratgeber, Admin) hat definierte Endpunkte.
*   **RESTful Ansätze:** Die API-Routen sind logisch strukturiert (z.B. `/api/products`, `/admin/dashboard`).

## 07 EJS & Middleware
*   **Template Engine (EJS):** Wir nutzen Embedded JavaScript Templates (EJS) für Server-Side Rendering (SSR). Das ermöglicht uns, dynamische Daten (wie Produktlisten) direkt in den HTML-Code einzubetten, bevor er an den Client gesendet wird. Partial Views (`<%- include(...) %>`) werden für Header und Footer verwendet, um Code-Redundanz zu vermeiden.
*   **Middleware:** Express-Middleware wird genutzt für Logging, Request-Parsing (Body-Parser) und Authentifizierungsprüfungen.

## 08 JSON Formulare & 09 Controller/Service/REST
*   **Datenfluss:** Formular-Daten (z.B. beim Hinzufügen eines Produkts im Admin-Bereich) werden als JSON an den Server gesendet.
*   **Controller:** Die Logik ist in Controller ausgelagert (z.B. `productController.js`), die Anfragen entgegennehmen und Antworten senden.
*   **Services:** Die Datenverarbeitung (Datenbank-Simulation über JSON-Files oder In-Memory) findet in Service-Modulen statt.

## 10 Sessions & 11 Asynchrone Programmierung
*   **Authentifizierung:** Wir unterscheiden zwischen nicht eingeloggten Kunden und Admins, wofür Session-Management genutzt wird.
*   **Async/Await:** Interaktionen mit der API (Fetch-Aufrufe) und das Lesen/Schreiben von Daten auf dem Server erfolgen asynchron, um die Anwendung blockierungsfrei und performant zu halten.

## 12 Validieren und Dokumentieren
*   **Eingabe-Validierung:** Daten aus Formularen (z.B. neue Produkte) werden validiert, bevor sie verarbeitet werden, um XSS und Dateninkonsistenzen zu vermeiden.
