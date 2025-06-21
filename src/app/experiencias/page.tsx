export default function ExperienciasPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1
        className="text-5xl mb-8 uppercase"
        style={{ color: "var(--accent, #D6B24C)" }}
      >
        Experiências
      </h1>
      <p
        className="text-lg max-w-2xl text-center"
        style={{ color: "var(--text, #444444)" }}
      >
        Aqui você pode mostrar as experiências, passeios, atividades e
        diferenciais que a pousada oferece.
      </p>
      <button
        className="mt-8 px-6 py-2 font-semibold shadow hover:opacity-90 transition uppercase"
        style={{
          background: "var(--accent, #D6B24C)",
          color: "var(--button-text, #222)",
        }}
      >
        Reservar agora
      </button>
    </main>
  );
}
