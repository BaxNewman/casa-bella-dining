import { useState } from "react";
import { Check, Calendar, Users, Clock, MapPin, User, Mail, Phone, MessageSquare, ChevronLeft } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { restaurant, type Reservation } from "@/data/restaurant";
import { toast } from "sonner";

type Seating = "Indoor" | "Outdoor" | "Bar seating";
const TIMES = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];

export function BookingDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState<Reservation | null>(null);

  const today = new Date().toISOString().split("T")[0];
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState(today);
  const [time, setTime] = useState("19:00");
  const [seating, setSeating] = useState<Seating>("Indoor");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [requests, setRequests] = useState("");

  const reset = () => {
    setStep(1); setConfirmed(null);
    setGuests(2); setDate(today); setTime("19:00"); setSeating("Indoor");
    setName(""); setEmail(""); setPhone(""); setRequests("");
  };

  const close = (v: boolean) => {
    onOpenChange(v);
    if (!v) setTimeout(reset, 200);
  };

  const canStep1 = guests > 0 && date && time && seating;
  const canStep2 = name.trim() && /\S+@\S+\.\S+/.test(email) && phone.trim();

  const handleConfirm = async () => {
    const reservation: Reservation = {
      id: `CB-${Date.now().toString(36).toUpperCase()}`,
      createdAt: new Date().toISOString(),
      guests, date, time, seating,
      name: name.trim(), email: email.trim(), phone: phone.trim(),
      requests: requests.trim(),
    };
    try {
  await fetch("https://formspree.io/f/mvzjkgre", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(reservation),
  });
} catch (error) {
  console.error("Form submission failed:", error);
}
    try {
      const existing: Reservation[] = JSON.parse(localStorage.getItem("casabella_reservations") || "[]");
      existing.push(reservation);
      localStorage.setItem("casabella_reservations", JSON.stringify(existing));
    } catch { /* ignore */ }
    setConfirmed(reservation);
    toast.success("Reservation request received", { description: `Confirmation ${reservation.id}` });
  };

  const formattedDate = date ? new Date(date + "T00:00").toLocaleDateString(undefined, {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  }) : "";

  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent className="max-w-xl bg-cream p-0 overflow-hidden border-border max-h-[90vh] overflow-y-auto">
        <div className="bg-olive-deep px-6 py-5 text-cream">
          <DialogTitle className="font-display text-2xl">
            {confirmed ? "Grazie!" : "Reservation Request"}
          </DialogTitle>
          <DialogDescription className="text-cream/70 mt-1">
            {confirmed ? "Thank you for your inquiry." : "If we are available you will receive a response from us."}
          </DialogDescription>
          {!confirmed && (
            <div className="mt-5 flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex-1">
                  <div className={`h-1 rounded-full transition-all ${s <= step ? "bg-gold" : "bg-cream/20"}`} />
                  <p className={`mt-2 text-[10px] uppercase tracking-wider ${s <= step ? "text-gold" : "text-cream/50"}`}>
                    {["Details", "Contact", "Summary"][s - 1]}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-6 sm:p-7">
          {confirmed ? (
            <div className="text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-olive/15 text-olive-deep">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="mt-5 font-display text-2xl text-charcoal">Request sent through.</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Thank you for your inquiry. We will contact you to confirm availability.
              </p>
              <div className="mt-6 rounded-sm border border-dashed border-terracotta/40 bg-terracotta/5 p-5 text-left">
                <p className="text-[10px] uppercase tracking-[0.3em] text-terracotta">Confirmation</p>
                <p className="font-display text-xl text-charcoal">{confirmed.id}</p>
                <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <Row label="Guest" value={confirmed.name} />
                  <Row label="Party" value={`${confirmed.guests} ${confirmed.guests === 1 ? "guest" : "guests"}`} />
                  <Row label="Date" value={formattedDate} />
                  <Row label="Time" value={confirmed.time} />
                  <Row label="Seating" value={confirmed.seating} />
                  <Row label="Phone" value={confirmed.phone} />
                </dl>
              </div>
              <Button onClick={() => close(false)} className="mt-6 rounded-full bg-terracotta text-cream hover:bg-terracotta-deep">
                Done
              </Button>
            </div>
          ) : step === 1 ? (
            <div className="space-y-5">
              <Field icon={<Users className="h-4 w-4" />} label="Number of guests">
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <button
                      key={n} type="button" onClick={() => setGuests(n)}
                      className={`h-10 w-10 rounded-full text-sm font-medium border transition ${guests === n ? "bg-olive-deep text-cream border-olive-deep" : "bg-cream text-charcoal border-border hover:border-terracotta"}`}
                    >{n}</button>
                  ))}
                </div>
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field icon={<Calendar className="h-4 w-4" />} label="Date">
                  <Input type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)} className="bg-cream" />
                </Field>
                <Field icon={<Clock className="h-4 w-4" />} label="Time">
                  <select
                    value={time} onChange={(e) => setTime(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-cream px-3 py-2 text-sm"
                  >
                    {TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </Field>
              </div>
              <Field icon={<MapPin className="h-4 w-4" />} label="Seating preference">
                <div className="grid grid-cols-3 gap-2">
                  {(["Indoor", "Outdoor", "Bar seating"] as Seating[]).map((s) => (
                    <button
                      key={s} type="button" onClick={() => setSeating(s)}
                      className={`rounded-md border px-3 py-2.5 text-sm font-medium transition ${seating === s ? "bg-olive-deep text-cream border-olive-deep" : "bg-cream text-charcoal border-border hover:border-terracotta"}`}
                    >{s}</button>
                  ))}
                </div>
              </Field>
              <Button disabled={!canStep1} onClick={() => setStep(2)} className="w-full rounded-full bg-terracotta text-cream hover:bg-terracotta-deep">
                Continue
              </Button>
            </div>
          ) : step === 2 ? (
            <div className="space-y-5">
              <Field icon={<User className="h-4 w-4" />} label="Full name">
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Maria Bellini" className="bg-cream" />
              </Field>
              <Field icon={<Mail className="h-4 w-4" />} label="Email">
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="maria@example.com" className="bg-cream" />
              </Field>
              <Field icon={<Phone className="h-4 w-4" />} label="Phone number">
                <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="0400 000 000" className="bg-cream" />
              </Field>
              <Field icon={<MessageSquare className="h-4 w-4" />} label="Special requests (optional)">
                <Textarea value={requests} onChange={(e) => setRequests(e.target.value)} placeholder="Allergies, occasions, accessibility…" rows={3} className="bg-cream resize-none" />
              </Field>
              <div className="flex gap-3 pt-2">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1 rounded-full">
                  <ChevronLeft className="h-4 w-4 mr-1" /> Back
                </Button>
                <Button disabled={!canStep2} onClick={() => setStep(3)} className="flex-1 rounded-full bg-terracotta text-cream hover:bg-terracotta-deep">
                  Review
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <div className="rounded-sm border border-border bg-cream-warm/50 p-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-terracotta">Booking Request Summary</p>
                <p className="font-display text-2xl text-charcoal mt-1">{restaurant.name}</p>
                <p className="text-xs text-muted-foreground">{restaurant.address}</p>
                <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm border-t border-dashed border-border pt-4">
                  <Row label="Date" value={formattedDate} />
                  <Row label="Time" value={time} />
                  <Row label="Guests" value={`${guests} ${guests === 1 ? "guest" : "guests"}`} />
                  <Row label="Seating" value={seating} />
                </dl>
                <div className="mt-4 border-t border-dashed border-border pt-4 space-y-2 text-sm">
                  <Row label="Name" value={name} />
                  <Row label="Email" value={email} />
                  <Row label="Phone" value={phone} />
                  {requests && <Row label="Requests" value={requests} />}
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <Button variant="outline" onClick={() => setStep(2)} className="flex-1 rounded-full">
                  <ChevronLeft className="h-4 w-4 mr-1" /> Back
                </Button>
                <Button onClick={handleConfirm} className="flex-1 rounded-full bg-olive-deep text-cream hover:bg-olive">
                  Request Reservation
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Field({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-charcoal/70">
        <span className="text-terracotta">{icon}</span>{label}
      </Label>
      {children}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</dt>
      <dd className="font-medium text-charcoal break-words">{value}</dd>
    </div>
  );
}
