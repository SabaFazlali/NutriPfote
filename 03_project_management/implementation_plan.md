# Umsetzungsplan

## Phase 1 - Vorbereitung

- Anforderungen in `01_requirements/` finalisieren
- Demo-Daten in `data/` pruefen
- API-Endpunkte anhand der SRS-Liste festlegen
- einfache Wireframes fuer Start, Shop, Detail, Ratgeber, Warenkorb und Admin skizzieren

## Phase 2 - Backend-Grundlage

- `server.js` mit Express erstellen
- statische Dateien aus `public/` ausliefern
- JSON-Lese- und Schreibfunktionen in `src/services/` erstellen
- Routen fuer Produkte, Ratgeber, Bestellungen und Anfragen anlegen
- Validierung fuer POST-Anfragen einfuehren

## Phase 3 - Frontend-Grundlage

- HTML/EJS-Seiten fuer Hauptbereiche anlegen
- CSS-Basis mit Variablen, Grid/Flexbox und responsiven Regeln schreiben
- Produktliste per `fetch()` aus der REST API laden
- Filterlogik mit Vanilla JavaScript umsetzen
- Warenkorb im `localStorage` speichern

## Phase 4 - Admin und Abschluss

- einfachen Admin-Login umsetzen
- Produkt- und Ratgeberformulare bauen
- Bestellungen und Anfragen anzeigen
- README, SRS, API-Uebersicht und KI-Nutzungslog aktualisieren
- Live-Demo vorbereiten

## Minimaler Demo-Pfad

1. Startseite oeffnen
2. Tierwelt Hund waehlen
3. Produkte filtern
4. Produktdetail ansehen
5. zwei Produkte vergleichen
6. Produkt in Warenkorb legen
7. Bestellung absenden
8. im Admin-Bereich Bestellung sehen

