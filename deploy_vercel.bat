@echo off
title Deploy Amber AI to Vercel (common-vernacular-s-projects)
cd /d "%~dp0"

echo =====================================================================
echo ⚡ Deploying Amber AI (Chakramantra Edition) to Vercel
echo Team: common-vernacular-s-projects
echo =====================================================================
echo.
echo Choose deployment method:
echo 1) Login and Deploy directly with Vercel CLI
echo 2) Push to GitHub repo (joshivarnit/amber-web)
echo.

set /p choice="Enter choice (1 or 2): "

if "%choice%"=="1" (
    echo.
    echo Logging in to Vercel...
    call npx vercel login
    echo.
    echo Deploying to production...
    call npx vercel --prod --scope common-vernacular-s-projects
) else (
    echo.
    echo Enter your remote GitHub URL (e.g., https://github.com/joshivarnit/amber-web.git):
    set /p remoteUrl=""
    git remote remove origin 2>nul
    git remote add origin %remoteUrl%
    git push -u origin main
    echo.
    echo Pushed to GitHub! Now import it at:
    echo https://vercel.com/common-vernacular-s-projects
)

pause
