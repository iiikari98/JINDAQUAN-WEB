# JINDAQUAN-WEB

ARGIOPE Jindaquan product website built with Next.js.

## Local Setup

```bash
npm install
npm run dev
```

## Inquiry Email

Copy `.env.example` to `.env.local`, then fill in the real SMTP authorization code:

```env
SMTP_PASS=your_netease_smtp_authorization_code
```

Do not commit `.env.local`.

## LAN HTTPS Preview

Generate local certificates for your current LAN IP:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\generate-lan-cert.ps1 -IpAddress 192.168.11.197
```

Then start the HTTPS preview:

```cmd
start-lan-https-dev.cmd
```

Open the preview from other devices on the same network:

```text
https://YOUR_LAN_IP:3443
```

If the browser shows a certificate warning, trust `certificates\lan-ca.pem` on that device or continue only for local testing.
