@echo off
REM Start Super RSS Feed development server
cd /d "%~dp0"
echo Starting Super RSS Feed dev server...
call npm run dev
