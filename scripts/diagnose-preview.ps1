$ErrorActionPreference = "Continue"

Write-Host "== DNS: localhost =="
Resolve-DnsName localhost | Select-Object Name, Type, IPAddress | Format-Table -AutoSize

Write-Host "`n== TCP: preview ports =="
Get-NetTCPConnection -LocalPort 3443,3000 -ErrorAction SilentlyContinue |
  Select-Object LocalAddress, LocalPort, State, OwningProcess |
  Format-Table -AutoSize

Write-Host "`n== WinHTTP proxy =="
netsh winhttp show proxy

Write-Host "`n== Browser/User proxy =="
Get-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Internet Settings" |
  Select-Object ProxyEnable, ProxyServer, ProxyOverride, AutoConfigURL |
  Format-List

Write-Host "`n== HTTPS checks =="
foreach ($url in @("https://127.0.0.1:3443/preview", "https://localhost:3443/preview", "https://[::1]:3443/preview")) {
  Write-Host "`n$url"
  & curl.exe -k -I --connect-timeout 3 $url
}
