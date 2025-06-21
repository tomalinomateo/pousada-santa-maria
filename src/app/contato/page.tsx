export default function ContatoPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 uppercase">
      <h1 className="text-4xl mb-8" style={{ color: "#D6B24C" }}>
        Contato
      </h1>
      <div className="w-full max-w-md bg-white shadow p-6 flex flex-col gap-4 border">
        <label className="text-sm font-semibold" htmlFor="nome">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          className="border px-3 py-2"
          required
        />
        <label className="text-sm font-semibold" htmlFor="email">
          Email
        </label>
        <input type="email" id="email" className="border px-3 py-2" required />
        <label className="text-sm font-semibold" htmlFor="mensagem">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          rows={4}
          className="border px-3 py-2"
          required
        />
        <button
          type="submit"
          className="mt-4 px-6 py-2 font-semibold shadow hover:opacity-90 transition"
          style={{
            background: "var(--accent, #D6B24C)",
            color: "var(--button-text, #222)",
          }}
        >
          Enviar
        </button>
      </div>
      <div className="mt-10 text-center text-base" style={{ color: "#444444" }}>
        <p>Email: contato@pousadasantamaria.com</p>
        <p>Telefone: +55 99 99999-9999</p>
        <p>Atins - Lençóis Maranhenses, Brasil</p>
      </div>
      <div className="mt-10 w-full max-w-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4214.1651549589815!2d-42.74513322478173!3d-2.5680528974101398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f1e8d6a5d51eb5%3A0x62daf572a3d96422!2sAtins%20Santa%20Maria%20Beach%20House!5e1!3m2!1sen!2sar!4v1749586642168!5m2!1sen!2sar"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}
