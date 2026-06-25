import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";
import { restaurant } from "@/data/restaurant";

export function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section id="home" className="relative isolate min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Casa Bella Trattoria dining room"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/45 to-charcoal/85" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-6 py-32 text-center text-cream">
        <span className="script text-3xl text-gold sm:text-4xl">Benvenuti a</span>
        <h1 className="mt-2 font-display text-5xl font-semibold leading-[1.05] sm:text-7xl md:text-8xl">
          Casa Bella
          <span className="block text-gold">Trattoria</span>
        </h1>
        <div className="divider-ornament mt-7 text-gold/80">
          <span className="text-xs uppercase tracking-[0.35em]">Est. 1962</span>
        </div>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/90 sm:text-lg">
          {restaurant.tagline}
        </p>
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <Button
            onClick={onBook}
            size="lg"
            className="rounded-full bg-terracotta px-8 py-6 text-base text-cream shadow-warm hover:bg-terracotta-deep"
          >
            Book a Table
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-cream/70 bg-transparent px-8 py-6 text-base text-cream hover:bg-cream hover:text-charcoal"
          >
            <a href="#menu">View Menu</a>
          </Button>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/70 animate-bounce"
      >
        <span className="block h-10 w-px bg-cream/40 mx-auto" />
      </a>
    </section>
  );
}
