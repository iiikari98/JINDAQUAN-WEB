@echo off
setlocal
set "ROOT=%~dp0"
set "NODE_DIR=%ROOT%.tools\node-v24.14.0-win-x64"
set "PATH=%NODE_DIR%;%PATH%"
cd /d "%ROOT%"
start "ARGIOPE IPv6 localhost proxy" /b "%NODE_DIR%\node.exe" "scripts\localhost-ipv6-proxy.mjs" > "ipv6-proxy.log" 2>&1
"%NODE_DIR%\node.exe" "node_modules\next\dist\bin\next" dev --experimental-https --experimental-https-key "certificates\localhost-key.pem" --experimental-https-cert "certificates\localhost.pem" --hostname 127.0.0.1 --port 3443
