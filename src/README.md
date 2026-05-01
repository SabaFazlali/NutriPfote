# Src

Hier liegt spaeter die serverseitige Logik der Express-Anwendung.

Empfohlene Aufteilung:

- `routes/`: URL-Struktur und HTTP-Methoden
- `controllers/`: Verarbeitung von Request und Response
- `services/`: Lesen, Schreiben und Filtern der JSON-Daten
- `utils/`: kleine Hilfsfunktionen, z. B. Validierung

Ziel: Controller bleiben kurz, Services enthalten die Datenlogik.

