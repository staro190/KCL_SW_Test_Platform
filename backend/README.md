# Backend

This directory contains a minimal Express-based RESTful API, following the system architecture outlined in `../docs/system_architecture.md`.

## Prerequisites
- Node.js (v18 or later)
- `express` package (install with `npm install`)

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   node index.js
   ```
3. The API will be available on `http://localhost:3000` by default.

### Example Endpoints
- `GET /reports` – list all reports
- `POST /reports` – create a new report

This is an initial draft to bootstrap development based on the system architecture document.
