@echo off
REM Stop Super RSS Feed development server (kills node processes on port 5173)
cd /d "%~dp0"
echo Stopping Super RSS Feed dev server...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :5173 ^| findstr LISTENING') do (
    taskkill /PID %%a /F >nul 2>&1
)
echo Server stopped.
