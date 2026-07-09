$ErrorActionPreference = "Stop"

if ([string]::IsNullOrWhiteSpace($env:OPENAI_API_KEY)) {
  $savedKey = [Environment]::GetEnvironmentVariable("OPENAI_API_KEY", "User")
  if (-not [string]::IsNullOrWhiteSpace($savedKey)) {
    $env:OPENAI_API_KEY = $savedKey
  }
}

if ([string]::IsNullOrWhiteSpace($env:OPENAI_API_KEY)) {
  Write-Host "OPENAI_API_KEY is not configured yet." -ForegroundColor Yellow
  exit 1
}

$probe = @'
import os
from openai import OpenAI

client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])
client.models.list()
print("OpenAI API key is working.")
print("Account can reach OpenAI models endpoint.")
'@

$probe | python -
