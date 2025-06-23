import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const GOLD = "var(--accent, #D6B24C)";
const GRAY = "var(--text, #444444)";
const BG_GRAY = "var(--section-bg, #F3F4F6)";

export default function PousadaSection() {
  return (
    <section
      id="pousada"
      className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto"
      style={{
        color: "var(--text, #222)",
        background: BG_GRAY,
        marginTop: 40,
        marginBottom: 48,
        boxShadow: "0 2px 16px #0001",
      }}
    >
      <div className="flex justify-center mb-6">
        <Image
          src="/images/logo-1.jpeg"
          alt="Logo Santa Maria"
          width={112}
          height={112}
          className="w-20 md:w-28 h-auto rounded-full object-contain shadow"
        />
      </div>
      <h2
        className="text-2xl md:text-4xl text-center mb-6 md:mb-10 tracking-widest uppercase font-bold"
        style={{ color: GOLD }}
      >
        A Pousada
      </h2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <p
            className="text-lg md:text-xl leading-relaxed mb-6 md:mb-8"
            style={{ color: GRAY, opacity: 0.92 }}
          >
            Bem-vindo à Pousada Santa Maria, um oásis de tranquilidade onde a
            natureza se encontra com o conforto. Nossa pousada oferece uma
            experiência única de hospedagem, combinando o charme rústico com
            modernidade.
          </p>
          <Link href="/pousada">
            <button
              style={{
                background: GOLD,
                color: "var(--button-text, #222)",
              }}
              className="w-full md:w-auto px-8 py-3 font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all uppercase flex items-center justify-center gap-2 text-lg"
            >
              <span className="md:hidden">Nossa pousada</span>
              <span className="hidden md:inline">Ver mais sobre a pousada</span>
              <FaArrowRight className="ml-1 text-base" />
            </button>
          </Link>
        </div>
        <div className="relative h-[250px] md:h-[400px] overflow-hidden shadow-lg border border-[rgba(0,0,0,0.04)] order-1 md:order-2">
          <Image
            src="/images/pousada/deck_1.jpg"
            alt="Deck da Pousada Santa Maria"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
