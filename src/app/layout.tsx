import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { localFonts } from "@/lib/fonts";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});

export const metadata: Metadata = {
  title: "Pousada Santa Maria",
  description: "Pousada Santa Maria em Atins, Lençóis Maranhenses",
  icons: {
    icon: "/images/logo-1.jpeg",
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
    <html lang="en" data-theme="coco">
      <body className={`${josefin.variable} ${localFontVariables} font-sans`}>
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
