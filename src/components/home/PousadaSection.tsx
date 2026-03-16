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
      className="w-full py-6 md:py-10 px-4 md:px-8"
      style={{
        color: "var(--text, #222)",
        background: BG_GRAY,
        marginBottom: 32,
        boxShadow: "0 4px 20px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
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
      <div className="text-center mb-6 md:mb-10">
        <h2
          className="text-2xl md:text-4xl tracking-widest uppercase font-bold"
          style={{ color: GOLD }}
        >
          Pousada Santa Maria
        </h2>
        <p
          className="mt-2 text-base md:text-lg normal-case tracking-wide opacity-90"
          style={{ color: GRAY }}
        >
          Atins – Lençóis Maranhenses
        </p>
      </div>
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
              className="w-full md:w-auto px-8 py-3 rounded-none font-semibold shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-500 ease-out uppercase flex items-center justify-center gap-2 text-lg"
            >
              <span className="md:hidden">Nossa pousada</span>
              <span className="hidden md:inline">Ver mais sobre a pousada</span>
              <FaArrowRight className="ml-1 text-base" />
            </button>
          </Link>
        </div>
        <div className="relative h-[250px] md:h-[400px] overflow-hidden shadow-lg border border-[rgba(0,0,0,0.04)] order-1 md:order-2">
          <Image
            src="/images/pousada/pousada_3.jpg"
            alt="Interior da Pousada Santa Maria"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
