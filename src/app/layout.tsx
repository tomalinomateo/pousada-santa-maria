import type { Metadata } from "next";
import "./globals.css";
import { Baloo_Tamma_2 } from "next/font/google";
import Navbar from "@/components/Navbar";
import FontSwitcher from "@/components/FontSwitcher";

const balooTamma = Baloo_Tamma_2({
  subsets: ["latin"],
  variable: "--font-baloo-tamma",
});

export const metadata: Metadata = {
  title: "Pousada Santa Maria",
  description: "Um refúgio de paz e tranquilidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${balooTamma.variable} font-sans`}>
        <Navbar />
        <div className="pt-16">{children}</div>
        <FontSwitcher />
      </body>
    </html>
  );
}
