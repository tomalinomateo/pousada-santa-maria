"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4214.1651549589815!2d-42.74513322478173!3d-2.5680528974101398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f1e8d6a5d51eb5%3A0x62daf572a3d96422!2sAtins%20Santa%20Maria%20Beach%20House!5e0!3m2!1spt-BR!2sbr!4v1749586642168!5m2!1spt-BR!2sbr";

export default function ComoChegarPage() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <main
      className="min-h-screen flex flex-col items-center"
      style={{ background: "var(--page-bg)" }}
    >
      <PageHero
        surtitle="Pousada Santa Maria"
        title="Como chegar"
        subtitle="Atins, a porta de entrada do Parque Nacional dos Lençóis Maranhenses."
      />

      {/* Content */}
      <section className="px-4 md:px-8 pb-12 md:pb-16 w-full max-w-4xl mx-auto">
        <p
          className="text-center max-w-2xl mx-auto mb-4 text-lg normal-case"
          style={{ color: "var(--text)" }}
        >
          Atins é um charmoso vilarejo à beira-mar. Dunas, lagoas cristalinas e
          natureza preservada fazem do lugar um destino perfeito para quem busca
          tranquilidade e paisagens paradisíacas.
        </p>
        <p
          className="text-center max-w-2xl mx-auto mb-10 text-lg normal-case"
          style={{ color: "var(--text)" }}
        >
          Além de visitar os Lençóis, é possível fazer passeios de barco pelo rio
          Preguiças, caminhar pelas dunas e praticar kitesurf. Nossa pousada fica
          de frente para o mar, a cerca de 10 minutos a pé do centrinho de Atins.
        </p>

        <div className="relative w-full overflow-hidden rounded-xl shadow-xl border border-white/20 min-h-[450px]">
          {!mapLoaded && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-[var(--section-bg)] z-10"
              aria-hidden="true"
            >
              <div
                className="w-10 h-10 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin"
              />
            </div>
          )}
          <iframe
            src={MAP_EMBED_SRC}
            width="100%"
            height="450"
            style={{
              border: 0,
              opacity: mapLoaded ? 1 : 0,
              transition: "opacity 0.3s ease-out",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Pousada Santa Maria em Atins"
            onLoad={() => setMapLoaded(true)}
          />
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="https://www.google.com/maps/search/posada+santa+maria+atins"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-none font-semibold shadow hover:opacity-90 transition-all duration-500 ease-out uppercase"
            style={{
              background: "var(--accent)",
              color: "var(--button-text)",
            }}
          >
            Abrir no Google Maps
          </a>
        </div>
      </section>
    </main>
  );
}
