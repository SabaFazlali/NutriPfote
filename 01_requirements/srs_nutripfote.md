# Software Requirements Specification - NutriPfote

Orientierung: IEEE STD 29148-2018, angepasst auf ein Studienprojekt im Modul Web-Applikationen.

## 1. Einleitung

### 1.1 Zweck

Dieses Dokument beschreibt die Anforderungen an NutriPfote, einen webbasierten Tierfutter-Shop fuer private Haustierhalter und ein kleines Shop-Team.

### 1.2 Anwendungsbereich

NutriPfote unterstuetzt Produktsuche, Filterung, Ratgeberinhalte, Produktvergleich, Warenkorb, einfache Bestellung und Pflege von Produkt- und Ratgeberdaten.

### 1.3 Produktuebersicht

Das System besteht aus einem HTML/CSS/JavaScript-Frontend, einem Node.js/Express-Backend und JSON-Dateien als Datenbasis. Die Kommunikation zwischen Frontend und Backend erfolgt ueber REST-Endpunkte.

## 2. Quellen und Verweise

- `00_sources_original/raw_notes/initial_project_overview.md`
- `00_sources_original/raw_notes/webshop_requirements_lecture_notes.md`
- `00_sources_original/raw_notes/detailed_client_requirements.md`
- Kursfolien zu HTML, CSS, JavaScript, Express, REST, JSON, Sessions/JWT und Validierung

## 3. Anforderungen

### 3.1 Funktionen

FR-01: Kunden koennen Tierwelten wie Hund, Katze, Pferd und Kleintier aufrufen.  
FR-02: Kunden koennen Produkte nach Tierart, Lebensphase, Gewichtsklasse, Vertraeglichkeit/Allergie und Futterzweck filtern.  
FR-03: Kunden sehen Produktkarten mit Bild, Name, Kurzbeschreibung, Preis, Verpackungsvarianten und Verfuegbarkeit.  
FR-04: Kunden koennen eine Produktdetailseite mit Beschreibung, Fuetterungshinweisen, Varianten und passenden Ratgebern oeffnen.  
FR-05: Kunden koennen Produkte in einer einfachen Tabelle vergleichen.  
FR-06: Kunden koennen Produkte mit Variante und Menge in einen Warenkorb legen.  
FR-07: Kunden koennen eine einfache Bestellung absenden. Eine echte Zahlungsabwicklung ist nicht Teil des Kernumfangs.  
FR-08: Kunden koennen Ratgeber nach Tierart und Thema lesen.  
FR-09: Kunden koennen eine Beratungsanfrage ueber ein Formular senden.  
FR-10: Shop-Team-Mitglieder koennen sich in einem Admin-Bereich anmelden.  
FR-11: Das Shop-Team kann Produkte und Ratgeber anlegen, bearbeiten und loeschen.  
FR-12: Das Shop-Team kann Bestellungen und Beratungsanfragen ansehen.  
FR-13: Das Backend stellt Produkt-, Ratgeber-, Bestell- und Anfrage-Daten ueber REST-Endpunkte bereit.

### 3.2 Leistungsanforderungen

NFR-01: Die Anwendung soll mit kleinen JSON-Dateien fluessig nutzbar sein.  
NFR-02: Die Startseite und Produktliste sollen ohne spuerbare Wartezeit laden, solange nur Demo-Daten verwendet werden.  
NFR-03: Die Implementierung soll fuer Studierende im ersten Bachelorjahr nachvollziehbar bleiben.

### 3.3 Benutzerfreundlichkeit

NFR-04: Die Navigation soll maximal die Hauptbereiche Shop, Ratgeber, Beratung, Warenkorb und Admin zeigen.  
NFR-05: Filter sollen sichtbar und verstaendlich beschriftet sein.  
NFR-06: Fehlermeldungen bei Formularen sollen konkret sagen, welches Feld korrigiert werden muss.  
NFR-07: Das Layout soll auf Desktop und Smartphone nutzbar sein.

### 3.4 Schnittstellenanforderungen

API-01: `GET /api/products` liefert alle Produkte.  
API-02: `GET /api/products/:id` liefert ein Produkt.  
API-03: `GET /api/guides` liefert alle Ratgeber.  
API-04: `POST /api/orders` speichert eine einfache Bestellung.  
API-05: `POST /api/questions` speichert eine Beratungsanfrage.  
API-06: Admin-Endpunkte duerfen nur nach Anmeldung erreichbar sein.

### 3.5 Anforderungen an logische Datenbanken

DB-01: Die Daten werden in JSON-Dateien im Ordner `data/` gespeichert.  
DB-02: Produkte, Ratgeber, Bestellungen, Anfragen und Benutzer werden getrennt abgelegt.  
DB-03: Jede Entitaet besitzt eine eindeutige `id`.  
DB-04: Es wird keine SQL- oder NoSQL-Datenbank eingesetzt.

### 3.6 Designbeschraenkungen

DC-01: Das Frontend verwendet HTML5, CSS und Vanilla JavaScript.  
DC-02: Das Backend verwendet Node.js und Express.  
DC-03: Der Code wird in einfache Bereiche getrennt: routes, controllers, services, data.  
DC-04: Keine React-, Vue- oder Angular-Komponenten.  
DC-05: Keine echte Zahlung, keine echte Lieferantenintegration, keine echte KI-Funktion.

### 3.7 Eigenschaften des Softwaresystems

SQ-01: Verstaendlichkeit: Dateinamen und Funktionsnamen sollen ihren Zweck klar zeigen.  
SQ-02: Wartbarkeit: Datenzugriff wird in Services gekapselt, damit Controller klein bleiben.  
SQ-03: Nachvollziehbarkeit: Wichtige Entscheidungen werden in Markdown-Dateien dokumentiert.  
SQ-04: Sicherheit: Admin-Routen erhalten eine einfache Authentifizierung. Passwoerter werden nicht im Klartext gespeichert.

### 3.8 Ergaenzende Informationen

Dieses Dokument beschreibt den Kernumfang. Erweiterungen werden in `scope_and_out_of_scope.md` gesammelt.

