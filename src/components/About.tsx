import aboutImg from "@/assets/about.jpg";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 rounded-sm bg-terracotta/15 -rotate-1" aria-hidden />
          <img
            src={aboutImg}
            alt="The Bellini family making pasta in our kitchen"
            width={1400}
            height={1200}
            loading="lazy"
            className="relative aspect-[7/6] w-full rounded-sm object-cover shadow-warm"
          />
          <div className="absolute -bottom-6 -right-6 hidden rounded-sm bg-cream px-6 py-4 shadow-card sm:block">
            <p className="script text-3xl text-terracotta leading-none">Famiglia</p>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">since 1962</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-terracotta">
            La Nostra Storia
          </span>
          <h2 className="mt-3 font-display text-4xl text-charcoal sm:text-5xl">
            Three generations,
            <span className="block italic text-olive-deep">one family table.</span>
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/80">
            <p>
              Casa Bella began in a small kitchen in Puglia, where Nonna Lucia rolled
              orecchiette by hand for the Sunday lunch. Six decades later, her recipes
              still guide every dish that leaves our pass.
            </p>
            <p>
              We make our pasta fresh each morning, slow-cook our ragù for hours, and
              source our produce from local growers who share our love for the seasons.
              No shortcuts — only the things that matter.
            </p>
            <p>
              When you sit at our table, you sit at ours. <span className="script text-xl text-terracotta">Benvenuti in famiglia.</span>
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: "60+", v: "Years of tradition" },
              { k: "100%", v: "Handmade pasta" },
              { k: "12", v: "Regions of Italy" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl text-terracotta">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
