import { useState } from "react";
import { menu } from "@/data/restaurant";
import { cn } from "@/lib/utils";

export function MenuSection() {
  const [active, setActive] = useState(menu[0].id);
  const current = menu.find((c) => c.id === active)!;

  return (
    <section
      id="menu"
      className="relative py-24 sm:py-32"
      style={{ background: "linear-gradient(180deg, var(--cream) 0%, var(--cream-warm) 100%)" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-terracotta">
            Il Menu
          </span>
          <h2 className="mt-3 font-display text-4xl text-charcoal sm:text-5xl">
            From our kitchen <span className="italic text-olive-deep">to your table</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-charcoal/70">
            Seasonal dishes guided by tradition. Our menu changes gently with the
            harvest — these are the classics we always come back to.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {menu.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all",
                active === c.id
                  ? "bg-olive-deep text-cream shadow-md"
                  : "bg-cream text-charcoal/70 border border-border hover:border-terracotta hover:text-terracotta",
              )}
            >
              {c.title}
            </button>
          ))}
        </div>

        <div className="mt-12">
          <div className="text-center mb-8">
            <p className="script text-3xl text-terracotta">{current.subtitle}</p>
            <h3 className="font-display text-3xl text-charcoal">{current.title}</h3>
          </div>

          <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {current.items.map((item) => (
              <article
                key={item.name}
                className="group border-b border-dashed border-border pb-6"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="font-display text-xl text-charcoal group-hover:text-terracotta transition-colors">
                    {item.name}
                  </h4>
                  <span className="shrink-0 font-display text-lg text-olive-deep">
                    {item.price}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-14 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Please advise our team of any dietary requirements
        </p>
      </div>
    </section>
  );
}
