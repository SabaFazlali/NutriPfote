# NutriPfote

NutriPfote ist ein Studienprojekt im Modul Web-Applikationen. Ziel ist ein kleiner, gut erklaerbarer Tierfutter-Webshop mit Produktfilterung, Ratgeberinhalten, Vergleichsfunktion, Warenkorb, einfachen Bestellungen und einem Admin-Bereich fuer das Shop-Team.

Der Fokus liegt nicht auf einem vollstaendigen echten Online-Shop, sondern auf einer sauberen Umsetzung der Kursthemen:

- semantisches HTML5
- CSS / responsive Layout
- Vanilla JavaScript und DOM
- Node.js und Express
- Routing
- EJS / Views
- JSON als Datenspeicher
- Controller-Service-Struktur
- REST API
- einfache Authentifizierung fuer das Shop-Team
- Validierung und nachvollziehbare Dokumentation

## Projektstruktur

```text
NutriPfote/
├── 00_sources_original/      # Originalquellen, Mitschriften, PDFs, Audio
├── 01_requirements/          # bereinigte Anforderungen und SRS
├── 02_design/                # Informationsarchitektur und visuelle Vorgaben
├── 03_project_management/    # Umsetzungsplan und KI-Nutzungslog
├── data/                     # JSON-Dateien als einfache Datenbasis
├── public/                   # statische Dateien: CSS, JS, Bilder
├── src/                      # serverseitige Express-Logik
├── views/                    # EJS-Templates
└── server.js                 # spaeterer Einstiegspunkt der Anwendung
```

## Grundsatz

Jede Funktion soll so klein bleiben, dass sie im Kurskontext erklaerbar ist. Komplexe Funktionen wie echte Zahlung, KI-Support oder Lieferantenintegration werden dokumentiert, aber nicht als Kernumfang umgesetzt.

