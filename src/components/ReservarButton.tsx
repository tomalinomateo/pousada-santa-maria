"use client";

import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type ReservarButtonProps = {
  /** Optional room name to prefill WhatsApp message */
  roomName?: string;
  /** Button label */
  children?: React.ReactNode;
  /** Extra class names for layout (e.g. w-full, inline-flex) */
  className?: string;
};

const baseClass =
  "btn-motion inline-flex items-center justify-center gap-2 px-8 py-3 rounded-none font-bold uppercase tracking-wide text-white shadow-lg";

export default function ReservarButton({
  roomName,
  children = "Reservar",
  className = "",
}: ReservarButtonProps) {
  const href = getWhatsAppUrl(roomName);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClass} ${className}`.trim()}
      style={{
        background: "var(--accent)",
        color: "var(--button-text)",
      }}
    >
      <FaWhatsapp className="text-lg shrink-0" />
      {children}
    </a>
  );
}
