"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="w-full fixed top-0 left-0 z-50 backdrop-blur-sm"
      style={{
        background: "var(--section-bg, rgba(255,255,255,0.9))",
      }}
    >
      <div className="flex items-center justify-between px-4 py-3 uppercase mx-4 md:mx-8 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)]">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-widest"
          style={{ color: "var(--accent, #4C583E)" }}
        >
          <Image
            src="/images/logo-1.jpeg"
            alt="Logo Pousada Santa Maria"
            width={48}
            height={48}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span>Santa Maria</span>
            <span className="text-xs font-normal tracking-wide opacity-80">
              Atins - Lençóis Maranhenses
            </span>
          </div>
        </Link>

        {/* Botón hamburguesa para mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl z-50"
          style={{ color: "var(--accent, #4C583E)" }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menú de navegación */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row fixed md:relative inset-0 md:inset-auto top-0 left-0 w-full h-screen md:h-auto md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none p-4 md:p-0 gap-8 md:gap-6 text-xl md:text-base font-semibold items-center justify-start md:justify-start z-40 pt-20 md:pt-0`}
        >
          <Link
            href="/pousada"
            className="hover:opacity-80 transition py-4 md:py-0 w-full text-center md:w-auto"
            style={{ color: "var(--accent, #4C583E)" }}
            onClick={() => setIsOpen(false)}
          >
            A Pousada
          </Link>
          <Link
            href="/quartos"
            className="hover:opacity-80 transition py-4 md:py-0 w-full text-center md:w-auto"
            style={{ color: "var(--accent, #4C583E)" }}
            onClick={() => setIsOpen(false)}
          >
            Quartos
          </Link>
          <Link
            href="/experiencias"
            className="hover:opacity-80 transition py-4 md:py-0 w-full text-center md:w-auto"
            style={{ color: "var(--accent, #4C583E)" }}
            onClick={() => setIsOpen(false)}
          >
            Experiências
          </Link>
          <Link
            href="/contato"
            className="hover:opacity-80 transition py-4 md:py-0 w-full text-center md:w-auto"
            style={{ color: "var(--accent, #4C583E)" }}
            onClick={() => setIsOpen(false)}
          >
            Contato
          </Link>
          <Link
            href="/reservar"
            className="bg-[var(--accent,#D6B24C)] text-white px-12 py-4 md:px-8 md:py-3 hover:scale-105 hover:shadow-lg transition-all font-bold flex items-center justify-center w-full md:w-auto"
            onClick={() => setIsOpen(false)}
          >
            Reservar
          </Link>

          {/* Redes sociales - solo visible en móvil */}
          <div className="flex gap-6 md:hidden mt-8">
            <a
              href="#"
              aria-label="WhatsApp"
              className="text-4xl hover:scale-110 transition-transform"
              style={{ color: "var(--accent, #4C583E)" }}
              onClick={() => setIsOpen(false)}
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/santamaria_atins/"
              aria-label="Instagram"
              className="text-4xl hover:scale-110 transition-transform"
              style={{ color: "var(--accent, #4C583E)" }}
              onClick={() => setIsOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
