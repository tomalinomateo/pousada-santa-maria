import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FontSwitcher from "@/components/FontSwitcher";
import StyleSwitcher from "@/components/StyleSwitcher";

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
  return (
    <html lang="en" data-theme="coco">
      <body className={`${josefin.variable} font-sans`}>
        <Navbar />
        <div className="pt-16 min-h-[80vh]">{children}</div>
        <Footer />
        <FontSwitcher />
        <StyleSwitcher />
      </body>
    </html>
  );
}
