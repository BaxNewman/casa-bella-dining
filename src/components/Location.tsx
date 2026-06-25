import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { restaurant } from "@/data/restaurant";

export function Location({ onBook }: { onBook: () => void }) {
  return (
    <section id="location" className="py-24 sm:py-32 bg-cream-warm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-terracotta">
            Vieni a Trovarci
          </span>
          <h2 className="mt-3 font-display text-4xl text-charcoal sm:text-5xl">
            Find us in <span className="italic text-olive-deep">Melbourne</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-sm shadow-card">
            <iframe
              title="Casa Bella location"
              src={restaurant.mapEmbed}
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col gap-6 rounded-sm bg-cream p-8 shadow-card sm:p-10">
            <div className="space-y-5">
              <Info icon={<MapPin className="h-5 w-5" />} label="Address" value={restaurant.address} />
              <Info icon={<Phone className="h-5 w-5" />} label="Phone" value={restaurant.phone} href={`tel:${restaurant.phone.replace(/\s/g, "")}`} />
              <Info icon={<Mail className="h-5 w-5" />} label="Email" value={restaurant.email} href={`mailto:${restaurant.email}`} />
            </div>

            <div className="rounded-sm border border-border p-6">
              <div className="flex items-center gap-2 text-terracotta">
                <Clock className="h-5 w-5" />
                <h3 className="font-display text-xl text-charcoal">Opening Hours</h3>
              </div>
              <ul className="mt-4 space-y-2">
                {restaurant.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-baseline justify-between gap-4 border-b border-dashed border-border pb-2 last:border-0"
                  >
                    <span className="text-sm font-medium text-charcoal">{h.day}</span>
                    <span className="text-sm text-charcoal/70">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              onClick={onBook}
              size="lg"
              className="w-full rounded-full bg-terracotta text-cream hover:bg-terracotta-deep"
            >
              Request a Reservation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({
  icon, label, value, href,
}: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <>
      <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-terracotta/10 text-terracotta">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
        <span className="block font-display text-lg text-charcoal">{value}</span>
      </span>
    </>
  );
  return href ? (
    <a href={href} className="flex items-start gap-4 hover:text-terracotta transition-colors">{content}</a>
  ) : (
    <div className="flex items-start gap-4">{content}</div>
  );
}
