import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MenuSection } from "@/components/Menu";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { BookingDialog } from "@/components/BookingDialog";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Bella Trattoria — Authentic Italian in Melbourne" },
      { name: "description", content: "Family-owned trattoria serving handmade pasta, wood-fired pizza, and traditional Italian dishes in the heart of Melbourne. Book your table tonight." },
      { property: "og:title", content: "Casa Bella Trattoria" },
      { property: "og:description", content: "Traditional Italian cuisine made with passion, family recipes, and the finest ingredients." },
    ],
  }),
  component: Index,
});

function Index() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onBook={openBooking} />
      <main>
        <Hero onBook={openBooking} />
        <About />
        <MenuSection />
        <Gallery />
        <Testimonials />
        <Location onBook={openBooking} />
      </main>
      <Footer />
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
      <Toaster position="top-center" />
    </div>
  );
}
