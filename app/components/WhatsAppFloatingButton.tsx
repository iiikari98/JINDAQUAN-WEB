import { MessageCircle } from "lucide-react";

const whatsappMessage =
  "Hello%2C%20I%20am%20interested%20in%20your%20products.%20Please%20send%20me%20more%20details.";

export function WhatsAppFloatingButton() {
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/8618926013309?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact ARGIOPE on WhatsApp"
    >
      <MessageCircle size={30} strokeWidth={2.4} aria-hidden="true" />
    </a>
  );
}
