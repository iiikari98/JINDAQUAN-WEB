@echo off
setlocal
set "ROOT=%~dp0"
set "TOOLS_NODE=%ROOT%.tools\node-v24.14.0-win-x64"

if exist "%TOOLS_NODE%\node.exe" (
  set "NODE_DIR=%TOOLS_NODE%"
) else (
  set "NODE_DIR="
)

if defined NODE_DIR (
  set "PATH=%NODE_DIR%;%PATH%"
) else (
  where node >nul 2>nul
  if errorlevel 1 (
    echo Node.js was not found. Install Node.js LTS or add node.exe to PATH.
    exit /b 1
  )
)

cd /d "%ROOT%"

if not exist "certificates\lan-key.pem" (
  echo Missing certificates\lan-key.pem.
  echo Run: powershell -ExecutionPolicy Bypass -File scripts\generate-lan-cert.ps1 -IpAddress YOUR_LAN_IP
  exit /b 1
)

if not exist "certificates\lan.pem" (
  echo Missing certificates\lan.pem.
  echo Run: powershell -ExecutionPolicy Bypass -File scripts\generate-lan-cert.ps1 -IpAddress YOUR_LAN_IP
  exit /b 1
)

node "node_modules\next\dist\bin\next" dev --experimental-https --experimental-https-key "certificates\lan-key.pem" --experimental-https-cert "certificates\lan.pem" --hostname 0.0.0.0 --port 3443
