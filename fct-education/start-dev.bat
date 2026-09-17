@echo off
cd /d "%~dp0"
echo === Dang khoi dong FCT Education Website ===
echo Truy cap: http://localhost:3000
echo Nhan Ctrl+C de dung server
echo.
call npm run dev
pause
