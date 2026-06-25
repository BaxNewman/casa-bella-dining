import { restaurant } from "@/data/restaurant";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="mx-auto max-w-7xl px-6 py-12 text-center">
        <p className="script text-3xl text-gold">Casa Bella</p>
        <p className="mt-1 text-xs uppercase tracking-[0.4em] text-cream/60">Trattoria · Est. 1962</p>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed">
          {restaurant.address} · {restaurant.phone}
        </p>
        <p className="mt-8 text-xs text-cream/40">
          © {new Date().getFullYear()} Casa Bella Trattoria. Made with amore.
        </p>
      </div>
    </footer>
  );
}
