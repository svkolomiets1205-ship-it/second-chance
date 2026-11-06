@echo off
setlocal
cd /d "%~dp0"
set "SECOND_CHANCE_NODE="
where node.exe >nul 2>nul
if not errorlevel 1 set "SECOND_CHANCE_NODE=node.exe"
if not defined SECOND_CHANCE_NODE if exist "%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" set "SECOND_CHANCE_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if not defined SECOND_CHANCE_NODE (
  echo Node.js was not found. Install Node.js LTS and reopen your terminal.
  pause
  exit /b 1
)
if not exist "node_modules\vite\bin\vite.js" (
  echo Dependencies are missing. Install Node.js LTS, then run npm.cmd install.
  pause
  exit /b 1
)
"%SECOND_CHANCE_NODE%" "node_modules\vite\bin\vite.js" --host 127.0.0.1 --open
if errorlevel 1 pause
