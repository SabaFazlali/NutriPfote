# Präsentationsskript NutriPfote (DE)

**Zeitlimit:** 12 Minuten (+/- 1 Minute für volle Punktzahl)
**Fokus:** Visuell, wenig Text auf den Slides, Live-Demo.

---

## Slide 1: Start (Titel & Team)
**Visual:** Großes NutriPfote Logo, klares Design, Namen der Teammitglieder.
**Text (Sprecher):**
*   Begrüßung.
*   Wir präsentieren **NutriPfote** – unsere Plattform für tiergerechte Ernährung und Beratung.
*   Ziel war es, eine moderne, intuitive und warme Oberfläche zu schaffen, die den Nutzer direkt abholt.

---

## Slide 2: Funktionale Bestandteile (Was kann die App?)
**Visual:** Ein schönes Mockup (z.B. Smartphone & Laptop nebeneinander), das zeigt, dass die App responsive ist. Eine Liste mit 5 Icons für die Hauptseiten.
**Text (Sprecher):**
*   Wir haben alle geforderten Funktionalitäten umgesetzt und noch erweitert.
*   Unsere **5 Hauptseiten**:
    1.  **Startseite:** Mit direktem Einstieg in die Tierwelten.
    2.  **Shop:** Übersichtliche Produktliste mit Filterung.
    3.  **Ratgeber:** Nützliche Infos rund ums Tier.
    4.  **Vergleichsseite:** Direkter Vergleich von Futter-Attributen.
    5.  **Admin-Dashboard:** Verwaltung von Produkten und Bestellungen.
*   *Bonus (Pluspunkte erwähnen):* Wir haben die App online gehostet und sie ist vollständig responsive für Mobile Devices.

---

## Slide 3: Live-Demo (Der wichtigste Teil!)
**Visual:** Slide mit der Aufschrift "Live Demo" und vielleicht einem kurzen Screencast-GIF, falls das Internet ausfällt (Backup).
**Aktion (Sprecher/Klicker):**
1.  **Startseite zeigen:** Zeigen, dass das Menü links fixiert ist (Feedback umgesetzt). Die "warmen" Farben (Beige, Grün) hervorheben.
2.  **Übergang zum Shop:** Auf eine Tierwelt klicken und zeigen, wie man im Shop landet.
3.  **Shop-Funktionen:** Ein Produkt zeigen. Klären, dass alle wichtigen Infos "auf einem Screen" ohne langes Scrollen sichtbar sind (Feedback umgesetzt). Ein Produkt in den Warenkorb legen (Warenkorb-Icon ändert sich, Zahl erscheint).
4.  **Übergang zum Ratgeber:** Zeigen, dass man vom Shop logisch zum Ratgeber verlinkt wird.
5.  **Admin-Dashboard:** Einloggen. Die übersichtliche Tabelle zeigen. Demonstrieren, wie man ein Produkt bearbeitet (Stift-Icon) oder löscht (Mülleimer-Icon). Erwähnen, dass der Admin Bestellungen aller Kunden sieht.

---

## Slide 4: Entwicklung & Feedback-Integration (Arbeit an Fehlern)
**Visual:** Vorher/Nachher Screenshots. z.B. altes braunes Design vs. neues Block-Design. Alte Admin-Ansicht vs. neue Tabellen-Ansicht.
**Text (Sprecher):**
*   Wir haben das Kundenfeedback aus den Zwischenpräsentationen intensiv genutzt.
*   Wir haben die Startseite in visuelle Blöcke unterteilt ("calm orientation").
*   Farben wurden angepasst, um Kontraste zu schaffen.
*   Das Admin-Dashboard wurde komplett überarbeitet (jetzt mit Tabellen und klaren Icons).

---

## Slide 5: Technische Umsetzung (Unter der Haube)
**Visual:** Ein einfaches Diagramm (Architektur): Client (Browser) <-> Node.js/Express <-> Daten (JSON/DB).
**Text (Sprecher):**
*   Wir verwenden eine klassische **MVC-Architektur** mit **Node.js** und **Express**.
*   **Routing & Controller:** Saubere Trennung der API-Routen (Shop, Admin).
*   **EJS (Template Engine):** Für serverseitiges Rendering und Partials (Header/Footer Wiederverwendung).
*   **DOM Manipulation & Async:** Für dynamische Interaktionen wie das Hinzufügen zum Warenkorb ohne Seiten-Reload.

---

## Slide 6: Einsatz von Künstlicher Intelligenz
**Visual:** Screenshot von einem komplexen Prompt oder einer strukturierten Mindmap neben ein bisschen Boilerplate-Code.
**Text (Sprecher):**
*   **Intensive, aber gezielte Nutzung:** Wir haben KI (LLMs) intensiv genutzt, aber mit einer klaren Strategie.
*   **Reflexion:** Die Kernarbeit – das mentale Modell, das UI/UX Konzept, die Architektur und das Beheben von logischen Fehlern – haben wir manuell gemacht.
*   Die KI wurde genutzt, um Standard-Code (Boilerplate), repetitive CSS-Klassen und Dummy-Daten schnell zu generieren.
*   *Fazit:* KI ist ein exzellenter Beschleuniger, ersetzt aber nicht das konzeptionelle Denken und das architektonische Verständnis des Entwicklers.

---

## Slide 7: Aufgabenverteilung & Abschluss
**Visual:** Fotos/Avatare des Teams mit Stichpunkten, wer was gemacht hat.
**Text (Sprecher):**
*   Kurze Erklärung, wer für Frontend, Backend, Design und Hosting zuständig war.
*   Vielen Dank für die Aufmerksamkeit! Wir sind bereit für die Endbefragung.
