# Naufal Farrel Pratama — Portfolio

Frontend v1: HTML, CSS, Vanilla JavaScript, PWA-ready.

## Run locally
Use a local server because service workers require a secure context (localhost is allowed).
Examples:
- VS Code Live Server
- `python -m http.server 8000`

Then open `http://localhost:8000`.

## Admin demo
Private route: `/admin/`
Demo credentials:
- username: `admin`
- password: `naufal-demo`

IMPORTANT: these are frontend demo credentials only. They are NOT secure for production. In the backend phase, authentication will be moved to Google Apps Script and the client-side demo check will be removed.

## Backend phase
1. Create Google Sheets database.
2. Create Google Drive folders.
3. Deploy Google Apps Script as Web App.
4. Connect frontend API module to Apps Script.
5. Replace demo admin auth with token/session validation.
6. Replace local project data with API reads.
7. Add CRUD and image upload.
8. Configure Vercel deployment and PWA icons.

## Customization
Main dummy content lives in `js/data.js`.
