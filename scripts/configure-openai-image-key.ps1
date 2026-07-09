$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "OpenAI image editing key setup" -ForegroundColor Cyan
Write-Host "Do not paste your API key into chat. Paste it only in this local window." -ForegroundColor Yellow
Write-Host ""
Write-Host "You can create or copy an API key from: https://platform.openai.com/api-keys"
Write-Host ""

$secureKey = Read-Host "Paste OPENAI_API_KEY here" -AsSecureString
$plainKey = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
  [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secureKey)
)

if ([string]::IsNullOrWhiteSpace($plainKey)) {
  throw "No key was entered."
}

if ($plainKey -notmatch "^sk-") {
  Write-Host ""
  Write-Host "Warning: this does not look like a standard OpenAI API key. I will still save it because key formats can change." -ForegroundColor Yellow
}

[Environment]::SetEnvironmentVariable("OPENAI_API_KEY", $plainKey, "User")
$env:OPENAI_API_KEY = $plainKey

Write-Host ""
Write-Host "OPENAI_API_KEY has been saved for this Windows user." -ForegroundColor Green
Write-Host "Close and reopen Codex or PowerShell if a running tool cannot see it immediately." -ForegroundColor Gray
Write-Host ""

