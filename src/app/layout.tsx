import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SiteMotion from "@/components/SiteMotion";
import { localFonts } from "@/lib/fonts";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});

/**
 * Corre durante el parseo del HTML, antes de que se pinte nada. Decide si el
 * sitio anima o no, así el CSS puede esconder los bloques que aparecen al
 * scrollear sin riesgo de un parpadeo ni de dejar contenido invisible cuando
 * el usuario pidió menos movimiento.
 */
const MOTION_INIT = `document.documentElement.dataset.motion=window.matchMedia("(prefers-reduced-motion: reduce)").matches?"off":"on";`;

export const metadata: Metadata = {
  title: "Santa Maria - Atins",
  description: "Pousada Santa Maria em Atins, Lençóis Maranhenses",
  icons: {
    icon: "/images/logo-om-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Obtener todas las variables CSS de las fuentes locales
  const localFontVariables = Object.values(localFonts)
    .map((font: { variable: string }) => font.variable)
    .join(" ");

  return (
    /* El script de arriba escribe data-motion en <html> antes de hidratar, así
       que ese atributo siempre difiere del HTML del servidor. Es intencional. */
    <html lang="en" data-theme="coco" suppressHydrationWarning>
      <body className={`${josefin.variable} ${localFontVariables} font-sans`}>
        <script dangerouslySetInnerHTML={{ __html: MOTION_INIT }} />
        <SiteMotion />
        <Navbar />
        <div
          className="min-h-[80vh]"
          style={{ background: "var(--page-bg)" }}
        >
          <PageTransition>{children}</PageTransition>
        </div>
        <Footer />
      </body>
    </html>
  );
}
