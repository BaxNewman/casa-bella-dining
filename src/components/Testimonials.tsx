import { Star } from "lucide-react";
import { testimonials } from "@/data/restaurant";

export function Testimonials() {
  return (
    <section
      className="relative py-24 sm:py-32 text-cream"
      style={{ background: "var(--olive-deep)" }}
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
          Le Recensioni
        </span>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">
          Stories from <span className="italic text-gold">our table</span>
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-sm border border-cream/15 bg-cream/5 p-7 text-left backdrop-blur-sm"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-cream/90">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 border-t border-cream/15 pt-4 font-display text-lg text-gold">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
