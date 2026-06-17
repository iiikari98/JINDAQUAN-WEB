import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const requiredFields = ["Name", "Email", "Company", "Country", "Product Requirement", "Message"];

function readValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatHtml(fields: Record<string, string>) {
  const rows = Object.entries(fields)
    .map(
      ([key, value]) =>
        `<tr><th align="left" style="padding:8px;border:1px solid #ddd;background:#f6f7f8;">${escapeHtml(
          key,
        )}</th><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(value || "-").replaceAll(
          "\n",
          "<br>",
        )}</td></tr>`,
    )
    .join("");

  return `<div style="font-family:Arial,sans-serif;color:#172018;">
    <h2>New website inquiry</h2>
    <p>A buyer submitted the ARGIOPE Jindaquan RFQ form.</p>
    <table style="border-collapse:collapse;width:100%;max-width:720px;">${rows}</table>
  </div>`;
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const fields = {
    Name: readValue(formData, "Name"),
    Email: readValue(formData, "Email"),
    Company: readValue(formData, "Company"),
    Country: readValue(formData, "Country"),
    "Product Requirement": readValue(formData, "Product Requirement"),
    Message: readValue(formData, "Message"),
  };

  const missing = requiredFields.filter((field) => !fields[field as keyof typeof fields]);
  if (missing.length > 0) {
    return NextResponse.json({ message: `Missing required field: ${missing.join(", ")}` }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.Email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.INQUIRY_TO || "gsq@jindaquan.com";
  const from = process.env.INQUIRY_FROM || user;
  const proxy = process.env.SMTP_PROXY;

  if (!host || !user || !pass || !from) {
    return NextResponse.json(
      { message: "Email service is not configured. Please set SMTP_HOST, SMTP_USER and SMTP_PASS." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465 || port === 994,
    ...(proxy ? { proxy } : {}),
    auth: {
      user,
      pass,
    },
  });

  const text = Object.entries(fields)
    .map(([key, value]) => `${key}: ${value || "-"}`)
    .join("\n");

  await transporter.sendMail({
    from: `"ARGIOPE Website RFQ" <${from}>`,
    to,
    replyTo: fields.Email,
    subject: `New RFQ from ${fields.Company} - ${fields.Country}`,
    text,
    html: formatHtml(fields),
  });

  return NextResponse.json({ message: "Inquiry sent successfully. Please check the business mailbox." });
}
