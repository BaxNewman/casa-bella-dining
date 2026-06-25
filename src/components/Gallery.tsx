import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const items = [
  { src: g1, alt: "Margherita pizza", span: "sm:col-span-2 sm:row-span-2" },
  { src: g2, alt: "Fresh tagliatelle" },
  { src: g3, alt: "Chef plating pasta" },
  { src: g6, alt: "Burrata with tomatoes" },
  { src: g5, alt: "Wine and pasta dinner", span: "sm:col-span-2" },
  { src: g4, alt: "Tiramisu in glass" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-terracotta">
            La Galleria
          </span>
          <h2 className="mt-3 font-display text-4xl text-charcoal sm:text-5xl">
            A taste of <span className="italic text-olive-deep">Casa Bella</span>
          </h2>
        </div>

        <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-4 sm:gap-4">
          {items.map((it) => (
            <figure
              key={it.alt}
              className={`relative overflow-hidden rounded-sm shadow-card group ${it.span ?? ""}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
