@echo off
setlocal EnableExtensions
rem Starts SupportPilot AI; one process serves API and built React app.
for %%I in ("%~dp0..") do set "ROOT=%%~fI"
cd /d "%ROOT%"
set "PYTHON=%ROOT%\.venv\Scripts\python.exe"
if not exist "%PYTHON%" set "PYTHON=python"
powershell -NoProfile -Command "try{ Invoke-WebRequest -UseBasicParsing -Uri http://127.0.0.1:8000/api/health -TimeoutSec 2 | Out-Null; exit 0 } catch { exit 1 }" >nul 2>&1
if %errorlevel%==0 (echo Support desk is already running.& start "" "http://127.0.0.1:8000"& exit /b 0)
if not exist "%ROOT%\frontend\dist\index.html" (echo Build the frontend first: npm --prefix frontend ci ^&^& npm --prefix frontend run build& pause& exit /b 1)
if not exist "%ROOT%\data\support.db" (echo Creating database...& "%PYTHON%" -m backend.scripts.init_db)
echo Starting http://127.0.0.1:8000. Close this window to stop the server.
start "" /min cmd /c "ping -n 5 127.0.0.1 ^>nul ^& start http://127.0.0.1:8000"
"%PYTHON%" -m uvicorn backend.app.main:app --host 127.0.0.1 --port 8000 --workers 1
