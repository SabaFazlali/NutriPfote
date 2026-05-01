# Src

This folder will contain the server-side logic of the Express application.

Recommended structure:

- `routes/`: URL structure and HTTP methods
- `controllers/`: request and response handling
- `services/`: reading, writing, and filtering JSON data
- `utils/`: small helper functions, for example validation

Goal: controllers stay short, services contain the data logic.
