"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import ReservarButton from "./ReservarButton";

const LINKS = [
  { href: "/", label: "Início" },
  { href: "/pousada", label: "A Pousada" },
  { href: "/quartos", label: "Quartos" },
  { href: "/como-chegar", label: "Como chegar" },
  { href: "/experiencias", label: "Experiências" },
];

function NavLink({
  href,
  children,
  onClick,
  style,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  style?: React.CSSProperties;
}) {
  const pathname = usePathname();
  const isActive =
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
  return (
    <Link
      href={href}
      onClick={onClick}
      data-active={isActive}
      className="nav-link py-4 md:py-0 w-fit md:w-auto inline-block"
      style={{ color: "var(--nav-fg)", ...style }}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Sólo el home tiene el video a pantalla completa detrás de la navbar.
  // En el resto de las páginas la barra arranca sólida desde el principio.
  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Con el menú abierto la barra vuelve a ser sólida: sobre el panel blanco
  // el logo en blanco desaparecería.
  const transparent = isHome && !scrolled && !isOpen;

  // El menú mobile ocupa toda la pantalla: bloqueamos el scroll de atrás y
  // dejamos que Escape lo cierre.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  // Al cambiar de página el menú siempre queda cerrado.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className="w-full fixed top-0 left-0 z-50"
      style={
        {
          "--nav-fg": transparent ? "#ffffff" : "var(--accent, #4C583E)",
          textShadow: transparent ? "0 1px 14px rgba(0,0,0,0.55)" : "none",
          background: transparent ? "transparent" : "var(--navbar-bg, rgba(255,255,255,0.97))",
          boxShadow: transparent ? "none" : "var(--navbar-shadow, 0 1px 12px rgba(0,0,0,0.06))",
          backdropFilter: transparent ? "none" : "blur(4px)",
          transition:
            "background-color var(--dur-slow) var(--ease-soft), box-shadow var(--dur-slow) var(--ease-soft)",
        } as React.CSSProperties
      }
    >
      {/* Velo oscuro sólo mientras la barra es transparente: garantiza que el
          logo y los links se lean sobre cualquier fotograma del video, incluso
          sobre cielo blanco. Se extiende por debajo de la barra para que el
          corte no se note. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[220%]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.28) 45%, rgba(0,0,0,0) 100%)",
          opacity: transparent ? 1 : 0,
          transition: "opacity var(--dur-slow) var(--ease-soft)",
        }}
      />

      <div className="relative flex items-center justify-between px-4 py-2 uppercase mx-4 md:mx-8 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)]">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-widest"
          style={{
            color: transparent ? "#ffffff" : "var(--text)",
            transition: "color var(--dur-slow) var(--ease-soft)",
          }}
        >
          <Image
            src="/images/logo-om.png"
            alt="Logo Pousada Santa Maria"
            width={56}
            height={56}
            className="w-8 h-8 md:w-9 md:h-9 object-contain"
            style={{
              // El logo es oscuro: sobre el video se invierte a blanco.
              filter: transparent ? "brightness(0) invert(1)" : "none",
              transition: "filter var(--dur-slow) var(--ease-soft)",
            }}
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
          className="md:hidden text-2xl z-50 btn-motion"
          style={{ color: "var(--nav-fg)" }}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menú de navegación - smooth open/close on mobile */}
        <div
          className="flex flex-col md:flex-row fixed md:relative inset-0 md:inset-auto top-0 left-0 w-full h-screen md:h-auto md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none p-4 md:p-0 gap-8 md:gap-6 text-xl md:text-base font-semibold items-center justify-start md:justify-start z-40 pt-20 md:pt-0
            transition-all duration-300 ease-out
            invisible opacity-0 pointer-events-none translate-y-[-8px]
            data-[open=true]:visible data-[open=true]:opacity-100 data-[open=true]:pointer-events-auto data-[open=true]:translate-y-0
            md:visible md:opacity-100 md:pointer-events-auto md:translate-y-0"
          data-open={isOpen}
        >
          {LINKS.map((link, i) => (
            <div
              key={link.href}
              className="w-fit md:w-auto transition-all duration-500 ease-out
                opacity-0 translate-y-3
                md:opacity-100 md:translate-y-0"
              style={{
                // Escalonado sólo al abrir: al cerrar todo se va junto.
                transitionDelay: isOpen ? `${120 + i * 55}ms` : "0ms",
                ...(isOpen ? { opacity: 1, translate: "none" } : {}),
              }}
            >
              <NavLink href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </NavLink>
            </div>
          ))}

          <span
            onClick={() => setIsOpen(false)}
            className="w-full md:w-auto block transition-all duration-500 ease-out opacity-0 translate-y-3 md:opacity-100 md:translate-y-0"
            style={{
              transitionDelay: isOpen ? `${120 + LINKS.length * 55}ms` : "0ms",
              ...(isOpen ? { opacity: 1, translate: "none" } : {}),
            }}
          >
            <ReservarButton className="w-full md:w-auto px-12 py-4 md:px-8 md:py-3" />
          </span>

          {/* Redes sociales - solo visible en móvil (solo Instagram; WhatsApp está en Reservar) */}
          <div
            className="flex gap-6 md:hidden mt-8 transition-all duration-500 ease-out opacity-0 translate-y-3"
            style={{
              transitionDelay: isOpen ? `${120 + (LINKS.length + 1) * 55}ms` : "0ms",
              ...(isOpen ? { opacity: 1, translate: "none" } : {}),
            }}
          >
            <a
              href="https://www.instagram.com/santamaria_atins/"
              aria-label="Instagram"
              className="text-4xl btn-motion"
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
