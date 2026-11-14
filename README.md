# README

# AI Troubleshooting Support Platform

This project is a full-stack computer troubleshooting platform with:

- FastAPI backend
- SQLite database
- React + Vite frontend
- AI provider abstraction with fallback rule-based support
- Knowledge base for troubleshooting articles
- Authentication and role-based access
- Admin management dashboard

## Features

- Plain-English issue analysis
- Structured troubleshooting sessions
- Knowledge base search and filters
- Dashboard analytics
- AI integration with fallback mode
- Secure auth and session management
- Docker deployment files

## Backend setup

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cd backend
python init_db.py
python seed_data.py
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## Frontend setup

```bash
npm install
npm run dev
```

## Production

```bash
docker-compose up --build
```

## Default admin account

Email: admin@example.com
Password: admin123

## API env

Copy .env.example to .env and configure credentials.
