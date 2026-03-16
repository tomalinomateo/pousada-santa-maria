export const WHATSAPP_NUMBER = "5493517475291";

const DEFAULT_MESSAGE =
  "Olá! Gostaria de mais informações ou fazer uma reserva com vocês.";

/**
 * Build WhatsApp URL with optional room-specific message.
 */
export function getWhatsAppUrl(roomName?: string): string {
  const text = roomName
    ? `Olá! Gostaria de mais informações ou fazer uma reserva para o quarto: ${roomName}.`
    : DEFAULT_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * Build WhatsApp URL with a custom message (e.g. for experience reservations).
 */
export function getWhatsAppUrlWithMessage(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
