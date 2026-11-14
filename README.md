# SupportPilot AI — project guide

A clearly separated React/Vite frontend and FastAPI backend. The `launcher/` scripts and icon utility are for Windows desktop launchers; `data/` stores the SQLite database at runtime.

## Project layout

```text
.
├── backend/                 # FastAPI application and Python dependencies
│   ├── app/                 # API application
│   ├── scripts/             # Database initialization and seed utilities
│   └── tests/               # Backend tests
├── frontend/                # React + Vite web client
│   ├── src/                 # App entry, pages, shared components, API helper
│   └── public/              # Static assets
├── launcher/                # Windows start/stop scripts and icon generator
├── data/                    # Local SQLite database (not committed)
├── .env.example
├── Dockerfile
├── docker-compose.yml
├── requirements.txt
└── README.md
```

## Local development

Prerequisites: Python 3.11+, Node.js 20+, npm.

1. Copy `.env.example` to `.env` and replace `SECRET_KEY` with a random secret.
2. Backend:
   ```bash
   python -m venv .venv
   # Windows: .venv\\Scripts\\activate
   # macOS/Linux: source .venv/bin/activate
   pip install -r requirements.txt
   python -m backend.scripts.init_db
   python -m uvicorn backend.app.main:app --reload --host 127.0.0.1 --port 8000
   ```
3. Frontend (in another terminal):
   ```bash
   npm --prefix frontend install
   npm --prefix frontend run dev
   ```
4. Open http://localhost:5173. API health is at http://localhost:8000/api/health.

## Production deployment

Build the static frontend and run the API server. The API serves `frontend/dist` when that directory exists:

```bash
npm --prefix frontend ci
npm --prefix frontend run build
pip install -r requirements.txt
python -m backend.scripts.init_db
python -m uvicorn backend.app.main:app --host 0.0.0.0 --port 8000 --workers 1
```

Or use `docker compose up --build`; keep `data/` on a persistent volume and configure a strong `SECRET_KEY` plus any AI-provider credentials in the deployment environment. Use HTTPS at the hosting platform/reverse proxy. SQLite is suitable for a single-instance deployment; use a managed database before scaling to multiple instances.

## Windows launcher

After building `frontend/dist` and installing the Python requirements, double-click `launcher/start-support-desk.bat`. Close its server window or run `launcher/stop-support-desk.bat` to stop it. Run `python launcher/build_icon.py` to generate `launcher/support-desk.ico`.

## Notes

- Browser diagnostics are limited; the web application does not silently inspect the computer.
- The current starter API exposes health and static-app delivery. Configure and validate authentication, AI-provider integration, and administrative endpoints before exposing the service publicly.
- Do not commit `.env`, `data/support.db`, credentials, or user-generated database files.
