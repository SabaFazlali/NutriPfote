# Technische Architektur

## Architekturentscheidung

NutriPfote wird als kleine monolithische Node.js/Express-Anwendung umgesetzt. Diese Form passt zum Kurs, weil sie Server, Routing, REST, JSON, Views und statische Dateien in einem ueberschaubaren Projekt sichtbar macht.

## Schichten

```text
Browser
  |
  | HTML, CSS, Vanilla JS, fetch()
  v
Express Server
  |
  | routes -> controllers -> services
  v
JSON-Dateien in data/
```

## Verantwortlichkeiten

### Browser / Frontend

- Seiten anzeigen
- Filter bedienen
- Produkte per REST API laden
- Warenkorb im `localStorage` verwalten
- Formulare absenden

### Routes

- definieren URL und HTTP-Methode
- Beispiel: `GET /api/products`
- enthalten moeglichst keine Fachlogik

### Controllers

- lesen Request-Daten
- rufen passende Services auf
- senden JSON- oder HTML-Antworten zurueck

### Services

- lesen und schreiben JSON-Dateien
- filtern Produkte
- validieren einfache Datenregeln
- erzeugen neue IDs, falls noetig

### Data

- enthaelt Demo-Daten
- ersetzt eine Datenbank
- bleibt klein und gut lesbar

## Geplante REST-Endpunkte

| Methode | Pfad | Zweck |
| --- | --- | --- |
| `GET` | `/api/products` | Produktliste laden |
| `GET` | `/api/products/:id` | einzelnes Produkt laden |
| `GET` | `/api/guides` | Ratgeber laden |
| `POST` | `/api/orders` | Bestellung speichern |
| `POST` | `/api/questions` | Beratungsanfrage speichern |
| `POST` | `/api/admin/login` | Admin anmelden |
| `POST` | `/api/admin/products` | Produkt anlegen |
| `PUT` | `/api/admin/products/:id` | Produkt bearbeiten |
| `DELETE` | `/api/admin/products/:id` | Produkt loeschen |

## Bewusst einfache Umsetzung

- keine echte Datenbank
- keine komplexe Rechteverwaltung
- keine echte Zahlungslogik
- keine Hintergrundjobs
- keine externen APIs

Die Architektur soll zeigen, dass die Gruppe Web-Applikationen strukturiert aufbauen kann, ohne den Projektumfang kuenstlich zu vergroessern.

