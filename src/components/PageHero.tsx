type PageHeroProps = {
  surtitle: string;
  title: string;
  subtitle: string;
};

export default function PageHero({ surtitle, title, subtitle }: PageHeroProps) {
  return (
    <section
      className="w-full px-4 md:px-8 text-center min-h-[260px] md:min-h-[300px] flex flex-col justify-center pt-28 pb-6 md:pt-36 md:pb-8"
    >
      <p
        className="enter enter-d1 text-sm md:text-base tracking-[0.3em] uppercase mb-2"
        style={{ color: "var(--accent)" }}
      >
        {surtitle}
      </p>
      <h1
        className="enter enter-d2 text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest uppercase mb-4"
        style={{ color: "var(--text)" }}
      >
        {title}
      </h1>
      <p
        className="enter enter-d3 text-lg md:text-xl max-w-xl mx-auto normal-case tracking-wide"
        style={{ color: "var(--text)" }}
      >
        {subtitle}
      </p>
    </section>
  );
}
