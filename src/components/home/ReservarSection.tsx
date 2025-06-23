import Link from "next/link";
import { FaCalendarAlt, FaMapMarkerAlt, FaStar, FaHeart } from "react-icons/fa";
import Image from "next/image";

const GOLD = "var(--accent, #D6B24C)";
const BG_GRAY = "var(--section-bg, #F3F4F6)";

export default function ReservarSection() {
  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${BG_GRAY} 0%, rgba(214, 178, 76, 0.1) 100%)`,
        color: "var(--text, #222)",
      }}
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-yellow-300"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-yellow-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold mb-6 tracking-wider uppercase"
            style={{ color: GOLD }}
          >
            Reserve Sua Estadia
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Descubra a magia dos Lençóis Maranhenses com conforto e
            exclusividade. Sua aventura inesquecível começa aqui.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Lado izquierdo - Información */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <FaCalendarAlt className="text-2xl" style={{ color: GOLD }} />
                  <h3 className="font-bold text-lg">Reserva Fácil</h3>
                </div>
                <p className="text-sm opacity-80">
                  Processo simples e rápido para garantir sua estadia.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <FaMapMarkerAlt
                    className="text-2xl"
                    style={{ color: GOLD }}
                  />
                  <h3 className="font-bold text-lg">
                    Localização Privilegiada
                  </h3>
                </div>
                <p className="text-sm opacity-80">
                  Localizada sobre o mar, a poucos passos do Parque Nacional dos
                  Lençóis Maranhenses. Vista deslumbrante do oceano.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <FaStar className="text-2xl" style={{ color: GOLD }} />
                  <h3 className="font-bold text-lg">Experiência Única</h3>
                </div>
                <p className="text-sm opacity-80">
                  Quartos confortáveis, café da manhã regional e atividades
                  exclusivas.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <FaHeart className="text-2xl" style={{ color: GOLD }} />
                  <h3 className="font-bold text-lg">Atenção Personalizada</h3>
                </div>
                <p className="text-sm opacity-80">
                  Família acolhedora e serviço personalizado para sua estadia
                  perfeita.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-xl border border-white/30">
              <h3
                className="text-xl md:text-2xl font-bold mb-4"
                style={{ color: GOLD }}
              >
                Por que escolher a Pousada Santa Maria?
              </h3>
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ background: GOLD }}
                  ></span>
                  <span>
                    Localização estratégica em Atins, porta de entrada dos
                    Lençóis
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ background: GOLD }}
                  ></span>
                  <span>Quartos com vista para o mar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ background: GOLD }}
                  ></span>
                  <span>Café da manhã com produtos regionais</span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ background: GOLD }}
                  ></span>
                  <span>Organização de passeios e experiências exclusivas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ background: GOLD }}
                  ></span>
                  <span>Ambiente familiar e acolhedor</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Lado derecho - Imagen y CTA */}
          <div className="space-y-8">
            <div className="relative">
              <div className="relative h-80 md:h-96 overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="/images/pousada/deck_1.jpg"
                  alt="Pousada Santa Maria - Vista do deck"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2" style={{ color: GOLD }}>
                  Reserve Agora
                </h3>
                <p className="text-sm opacity-80 mb-4">
                  Garanta sua estadia e prepare-se para uma experiência
                  inesquecível
                </p>
                <Link href="/reservar">
                  <button
                    style={{
                      background: GOLD,
                      color: "var(--button-text, #222)",
                    }}
                    className="w-full px-8 py-4 font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all uppercase text-lg"
                  >
                    Fazer Reserva
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
