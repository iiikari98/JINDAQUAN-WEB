import type { Metadata } from "next";
import { WhatsAppFloatingButton } from "./components/WhatsAppFloatingButton";
import { I18nProvider } from "./i18n/I18nProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plastic Additives Manufacturer | ARGIOPE Jindaquan",
  description:
    "ARGIOPE Jindaquan is a China-based manufacturer of plastic and rubber polymer functional additives for global B2B buyers, with TDS/SDS, samples and technical support available.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>
          {children}
          <WhatsAppFloatingButton />
        </I18nProvider>
      </body>
    </html>
  );
}
