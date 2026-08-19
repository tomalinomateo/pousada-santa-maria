import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { getWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/whatsapp";

function formatWhatsAppDisplay(num: string) {
  if (num.startsWith("55")) {
    return `+55 ${num.slice(2, 4)} ${num.slice(4, 9)}-${num.slice(9)}`;
  }
  if (num.startsWith("54")) {
    return `+54 ${num.slice(2, 3)} ${num.slice(3, 6)} ${num.slice(6, 9)}-${num.slice(9)}`;
  }
  return num;
}

export default function Footer() {
  const accent = "var(--accent, #4C583E)";
  return (
    <footer
      className="w-full border-t pt-2 pb-2 px-4"
      style={{
        background: "var(--main-bg, #fff)",
        borderColor: "var(--accent, #4C583E)",
        color: "var(--text, #222)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-3 md:gap-4 text-xs md:text-sm">
        <span className="font-mono flex items-center gap-1.5">
          <span style={{ color: accent }}>Reservas:</span>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link flex items-center gap-1.5"
            style={{ color: accent }}
          >
            <FaWhatsapp className="shrink-0" />
            WhatsApp
          </a>
        </span>
        <span className="font-mono hidden md:inline" style={{ color: "var(--text, #222)", opacity: 0.5 }}>·</span>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link font-mono"
          style={{ color: accent }}
        >
          {formatWhatsAppDisplay(WHATSAPP_NUMBER)}
        </a>
        <span className="font-mono hidden md:inline" style={{ color: "var(--text, #222)", opacity: 0.5 }}>·</span>
        <span className="font-mono">
          Praia de Atins, Barreirinhas, MA
        </span>
        <span className="font-mono hidden md:inline" style={{ color: "var(--text, #222)", opacity: 0.5 }}>·</span>
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/santamaria_atins/"
            aria-label="Instagram"
            style={{ color: accent }}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-motion text-base"
          >
            <FaInstagram />
          </a>
        </div>
        <span className="font-mono hidden md:inline" style={{ color: "var(--text, #222)", opacity: 0.5 }}>·</span>
        <div className="flex items-center gap-2 md:gap-3">
          <Image
            src="/images/logo-om.png"
            alt="Logo Pousada Santa Maria"
            width={64}
            height={64}
            className="w-7 h-7 md:w-8 md:h-8 opacity-80 object-contain"
          />
          <span className="font-mono" style={{ color: accent }}>
            © {new Date().getFullYear()} Santa Maria
          </span>
        </div>
      </div>
    </footer>
  );
}
