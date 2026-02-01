@echo off
echo Starting Vercel Deployment...
echo.
echo If this is your first time, it will ask to log in.
echo Please follow the instructions in the browser window that opens.
echo.
echo When asked about settings, just press ENTER to accept defaults.
echo.
call npx vercel
echo.
echo Deployment command finished.
pause
