import Image from "next/image";
import HeroVideo from "@/components/HeroVideo";
import Link from "next/link";

const GOLD = "#D6B24C";
const GRAY = "#444444";
const BG_LIGHT = "#FAF7F2"; // beige suave
const BG_GRAY = "#F3F4F6"; // gris muy claro

export default function Home() {
  return (
    <main className="min-h-screen bg-white uppercase">
      {/* Hero Section: solo el video */}
      <section
        className="relative w-full"
        style={{ height: "60vh", minHeight: 320 }}
      >
        <HeroVideo videoId="LfMxM_IQPXc" />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </section>

      {/* Divisor decorativo */}
      <div className="w-full flex justify-center items-center my-0">
        <div
          style={{
            height: 4,
            width: 80,
            background: GOLD,
            borderRadius: 2,
            marginTop: -20,
            marginBottom: 40,
          }}
        />
      </div>

      {/* Título y subtítulo debajo del video */}
      <section
        className="w-full flex flex-col items-center justify-center text-center mb-16"
        style={{
          background: BG_LIGHT,
          padding: "48px 0",
          borderRadius: 24,
          boxShadow: "0 2px 16px #0001",
        }}
      >
        <h1
          className="text-6xl mb-4 tracking-wider"
          style={{ color: GOLD, letterSpacing: 2 }}
        >
          Pousada Santa Maria
        </h1>
        <p
          className="text-xl tracking-wide"
          style={{ color: GRAY, letterSpacing: 1 }}
        >
          Um refúgio de paz e tranquilidade
        </p>
      </section>

      {/* A Pousada Section */}
      <section
        id="pousada"
        className="py-20 px-4 md:px-8 max-w-7xl mx-auto"
        style={{
          color: "#222",
          background: BG_GRAY,
          borderRadius: 24,
          marginBottom: 48,
          boxShadow: "0 2px 16px #0001",
        }}
      >
        <h2
          className="text-4xl text-center mb-12 tracking-wide"
          style={{ color: GOLD }}
        >
          A Pousada
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed" style={{ color: GRAY }}>
              Bem-vindo à Pousada Santa Maria, um oásis de tranquilidade onde a
              natureza se encontra com o conforto. Nossa pousada oferece uma
              experiência única de hospedagem, combinando o charme rústico com
              modernidade.
            </p>
            <div className="mt-8">
              <Link href="/pousada">
                <button
                  style={{ background: GOLD, color: "#222" }}
                  className="px-6 py-2 rounded-full font-semibold shadow hover:opacity-90 transition"
                >
                  Ver mais sobre a pousada
                </button>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px]">
            {/* Placeholder para imagen */}
            <div className="absolute inset-0 bg-gray-200" />
          </div>
        </div>
      </section>

      {/* Quartos Section */}
      <section
        className="py-20 px-4 md:px-8"
        style={{
          color: "#222",
          background: BG_LIGHT,
          borderRadius: 24,
          marginBottom: 48,
          boxShadow: "0 2px 16px #0001",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl text-center mb-12 tracking-wide"
            style={{ color: GOLD }}
          >
            Quartos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Quarto 1 */}
            <div
              className="bg-white rounded-lg overflow-hidden shadow-lg border"
              style={{ borderColor: GOLD + "33" }}
            >
              <div className="relative h-64">
                {/* Placeholder para imagen */}
                <div className="absolute inset-0 bg-gray-200" />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2" style={{ color: GOLD }}>
                  Quarto Deluxe
                </h3>
                <p style={{ color: GRAY }}>
                  Conforto e elegância em um ambiente acolhedor.
                </p>
              </div>
            </div>
            {/* Quarto 2 */}
            <div
              className="bg-white rounded-lg overflow-hidden shadow-lg border"
              style={{ borderColor: GOLD + "33" }}
            >
              <div className="relative h-64">
                {/* Placeholder para imagen */}
                <div className="absolute inset-0 bg-gray-200" />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2" style={{ color: GOLD }}>
                  Suíte Premium
                </h3>
                <p style={{ color: GRAY }}>
                  Luxo e espaço para momentos especiais.
                </p>
              </div>
            </div>
            {/* Quarto 3 */}
            <div
              className="bg-white rounded-lg overflow-hidden shadow-lg border"
              style={{ borderColor: GOLD + "33" }}
            >
              <div className="relative h-64">
                {/* Placeholder para imagen */}
                <div className="absolute inset-0 bg-gray-200" />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2" style={{ color: GOLD }}>
                  Quarto Standard
                </h3>
                <p style={{ color: GRAY }}>
                  Conforto e praticidade para sua estadia.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/quartos">
              <button
                style={{ background: GOLD, color: "#222" }}
                className="px-6 py-2 rounded-full font-semibold shadow hover:opacity-90 transition"
              >
                Ver todos os quartos
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Experiências Section */}
      <section
        className="py-20 px-4 md:px-8"
        style={{
          color: "#222",
          background: BG_GRAY,
          borderRadius: 24,
          marginBottom: 48,
          boxShadow: "0 2px 16px #0001",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl text-center mb-12 tracking-wide"
            style={{ color: GOLD }}
          >
            Experiências
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0" />
                <div>
                  <h3 className="text-xl mb-2" style={{ color: GOLD }}>
                    Gastronomia Local
                  </h3>
                  <p style={{ color: GRAY }}>
                    Descubra os sabores autênticos da região em nosso
                    restaurante.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0" />
                <div>
                  <h3 className="text-xl mb-2" style={{ color: GOLD }}>
                    Passeios Guiados
                  </h3>
                  <p style={{ color: GRAY }}>
                    Explore as belezas naturais com nossos guias especializados.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0" />
                <div>
                  <h3 className="text-xl mb-2" style={{ color: GOLD }}>
                    Spa & Bem-estar
                  </h3>
                  <p style={{ color: GRAY }}>
                    Momentos de relaxamento e rejuvenescimento.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/experiencias">
                  <button
                    style={{ background: GOLD, color: "#222" }}
                    className="px-6 py-2 rounded-full font-semibold shadow hover:opacity-90 transition"
                  >
                    Ver todas as experiências
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative h-[500px]">
              {/* Placeholder para imagen */}
              <div className="absolute inset-0 bg-gray-200" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
