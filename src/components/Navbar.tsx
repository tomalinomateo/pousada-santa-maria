"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import ReservarButton from "@/components/ReservarButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="w-full fixed top-0 left-0 z-50 backdrop-blur-sm"
      style={{
        background: "var(--navbar-bg, rgba(255,255,255,0.97))",
        boxShadow: "var(--navbar-shadow, 0 1px 12px rgba(0,0,0,0.06))",
      }}
    >
      <div className="flex items-center justify-between px-4 py-2 uppercase mx-4 md:mx-8 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)]">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-widest"
          style={{ color: "var(--accent, #4C583E)" }}
        >
          <Image
            src="/images/logo-1.jpeg"
            alt="Logo Pousada Santa Maria"
            width={56}
            height={56}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
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

        {/* Menú de navegación - smooth open/close on mobile */}
        <div
          className="flex flex-col md:flex-row fixed md:relative inset-0 md:inset-auto top-0 left-0 w-full h-screen md:h-auto md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none p-4 md:p-0 gap-8 md:gap-6 text-xl md:text-base font-semibold items-center justify-start md:justify-start z-40 pt-20 md:pt-0
            transition-all duration-300 ease-out
            opacity-0 pointer-events-none translate-y-[-8px]
            data-[open=true]:opacity-100 data-[open=true]:pointer-events-auto data-[open=true]:translate-y-0
            md:opacity-100 md:pointer-events-auto md:translate-y-0"
          data-open={isOpen}
          aria-hidden={!isOpen}
        >
          <Link
            href="/"
            className="hover:opacity-80 transition-all duration-500 ease-out py-4 md:py-0 w-full text-center md:w-auto"
            style={{ color: "var(--accent, #4C583E)" }}
            onClick={() => setIsOpen(false)}
          >
            Início
          </Link>
          <Link
            href="/pousada"
            className="hover:opacity-80 transition-all duration-500 ease-out py-4 md:py-0 w-full text-center md:w-auto"
            style={{ color: "var(--accent, #4C583E)" }}
            onClick={() => setIsOpen(false)}
          >
            A Pousada
          </Link>
          <Link
            href="/quartos"
            className="hover:opacity-80 transition-all duration-500 ease-out py-4 md:py-0 w-full text-center md:w-auto"
            style={{ color: "var(--accent, #4C583E)" }}
            onClick={() => setIsOpen(false)}
          >
            Quartos
          </Link>
          <Link
            href="/como-chegar"
            className="hover:opacity-80 transition-all duration-500 ease-out py-4 md:py-0 w-full text-center md:w-auto"
            style={{ color: "var(--accent, #4C583E)" }}
            onClick={() => setIsOpen(false)}
          >
            Como chegar
          </Link>
          <Link
            href="/experiencias"
            className="hover:opacity-80 transition-all duration-500 ease-out py-4 md:py-0 w-full text-center md:w-auto"
            style={{ color: "var(--accent, #4C583E)" }}
            onClick={() => setIsOpen(false)}
          >
            Experiências
          </Link>
          <span onClick={() => setIsOpen(false)} className="w-full md:w-auto block">
            <ReservarButton className="w-full md:w-auto px-12 py-4 md:px-8 md:py-3" />
          </span>

          {/* Redes sociales - solo visible en móvil (solo Instagram; WhatsApp está en Reservar) */}
          <div className="flex gap-6 md:hidden mt-8">
            <a
              href="https://www.instagram.com/santamaria_atins/"
              aria-label="Instagram"
              className="text-4xl hover:scale-105 transition-transform duration-500 ease-out"
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
