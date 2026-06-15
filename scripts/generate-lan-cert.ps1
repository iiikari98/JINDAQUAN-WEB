param(
  [Parameter(Mandatory = $true)]
  [string]$IpAddress
)

$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$certDir = Join-Path $root "certificates"
New-Item -ItemType Directory -Path $certDir -Force | Out-Null

$openssl = (Get-Command openssl -ErrorAction SilentlyContinue).Source
if (-not $openssl) {
  throw "OpenSSL was not found. Install Git for Windows or OpenSSL, then run this script again."
}

$caConf = Join-Path $certDir "lan-ca-openssl.cnf"
@"
[req]
default_bits = 2048
prompt = no
default_md = sha256
distinguished_name = dn
x509_extensions = v3_ca

[dn]
CN = ARGIOPE Local Preview CA

[v3_ca]
subjectKeyIdentifier = hash
authorityKeyIdentifier = keyid:always,issuer
basicConstraints = critical, CA:true
keyUsage = critical, keyCertSign, cRLSign
"@ | Set-Content -LiteralPath $caConf -Encoding ascii

$serverConf = Join-Path $certDir "lan-server-openssl.cnf"
@"
[req]
default_bits = 2048
prompt = no
default_md = sha256
distinguished_name = dn
req_extensions = v3_req

[dn]
CN = $IpAddress

[v3_req]
subjectAltName = @alt_names
keyUsage = critical, digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth

[alt_names]
DNS.1 = localhost
IP.1 = 127.0.0.1
IP.2 = $IpAddress
"@ | Set-Content -LiteralPath $serverConf -Encoding ascii

& $openssl req -x509 -new -nodes -days 1825 -keyout (Join-Path $certDir "lan-ca-key.pem") -out (Join-Path $certDir "lan-ca.pem") -config $caConf
& $openssl req -new -nodes -newkey rsa:2048 -keyout (Join-Path $certDir "lan-key.pem") -out (Join-Path $certDir "lan.csr") -config $serverConf
& $openssl x509 -req -in (Join-Path $certDir "lan.csr") -CA (Join-Path $certDir "lan-ca.pem") -CAkey (Join-Path $certDir "lan-ca-key.pem") -CAcreateserial -out (Join-Path $certDir "lan.pem") -days 825 -sha256 -extensions v3_req -extfile $serverConf

Write-Host "Generated local HTTPS certificates in $certDir"
Write-Host "Trust certificates\\lan-ca.pem on devices that should open the preview without a browser warning."
