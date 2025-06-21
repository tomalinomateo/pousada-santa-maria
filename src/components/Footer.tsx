import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="w-full border-t pt-8 md:pt-10 pb-6 px-4"
      style={{
        background: "var(--main-bg, #fff)",
        borderColor: "var(--accent, #4C583E)",
        color: "var(--text, #222)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10">
        {/* Contacto y reservas */}
        <div className="flex-1 min-w-[220px]">
          <div className="mb-4">
            <span
              className="block font-mono text-xs md:text-sm mb-1"
              style={{ color: "var(--accent, #4C583E)" }}
            >
              RESERVAS:
            </span>
            <span className="block font-mono text-sm md:text-base mb-2">
              contato@pousadasantamaria.com
            </span>
          </div>
          <div className="mb-4">
            <span
              className="block font-mono text-xs md:text-sm mb-1"
              style={{ color: "var(--accent, #4C583E)" }}
            >
              TELEFONE:
            </span>
            <span className="block font-mono text-sm md:text-base mb-2">
              +55 99 99999-9999
            </span>
          </div>
          <div className="mb-4">
            <span
              className="block font-mono text-xs md:text-sm mb-1"
              style={{ color: "var(--accent, #4C583E)" }}
            >
              ENDEREÇO:
            </span>
            <span className="block font-mono text-sm md:text-base mb-2">
              Atins - Lençóis Maranhenses, Brasil
            </span>
          </div>
        </div>
        {/* Links útiles */}
        <div className="flex-1 min-w-[220px]">
          <ul className="font-mono text-sm md:text-base space-y-1">
            <li>
              <Link href="/contato" className="hover:underline">
                Contato
              </Link>
            </li>
            <li>
              <Link href="/pousada" className="hover:underline">
                A Pousada
              </Link>
            </li>
            <li>
              <Link href="/quartos" className="hover:underline">
                Quartos
              </Link>
            </li>
            <li>
              <Link href="/experiencias" className="hover:underline">
                Experiências
              </Link>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Política de Privacidade
              </a>
            </li>
          </ul>
          <div className="flex gap-4 mt-4 md:mt-6 text-xl md:text-2xl">
            <a
              href="#"
              aria-label="WhatsApp"
              style={{ color: "var(--accent, #4C583E)" }}
            >
              <FaWhatsapp />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              style={{ color: "var(--accent, #4C583E)" }}
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        {/* Logo */}
        <div className="flex-1 min-w-[220px] flex flex-col items-center justify-center">
          {/* Cambia logo.svg por el nombre real de tu archivo de logo */}
          <Image
            src="/images/logo-1.jpeg"
            alt="Logo Pousada Santa Maria"
            width={128}
            height={128}
            className="w-24 md:w-32 h-auto mb-2 opacity-80 rounded-full"
            style={{ filter: "grayscale(1)" }}
          />
          <span
            className="font-mono text-xs mt-2"
            style={{ color: "var(--accent, #4C583E)" }}
          >
            © {new Date().getFullYear()} Santa Maria
          </span>
        </div>
      </div>
    </footer>
  );
}
