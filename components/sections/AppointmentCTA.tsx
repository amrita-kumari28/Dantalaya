import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/shared/Reveal";

export default function AppointmentCTA() {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 text-center text-primary-foreground lg:px-16">
            {/* Decorative accents */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-0 opacity-40"
            >
              <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-secondary/40 blur-3xl" />
              <div className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
            </div>

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Book Your Visit
              </p>

              <h2 className="mt-4 text-balance font-serif text-4xl font-bold lg:text-5xl">
                Ready for a Healthier Smile?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/90">
                Personalized dental care for you and your family in a
                comfortable, caring environment. We&apos;re here to help you
                smile with confidence.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="tel:7001899267"
                  className="inline-flex items-center gap-2 rounded-full bg-cta px-7 py-3.5 font-semibold text-cta-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <Phone size={18} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/917001899267"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary-foreground/10"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 text-sm text-primary-foreground/90 sm:flex-row sm:gap-8">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} className="text-accent" />
                  Asansol, West Bengal
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock size={16} className="text-accent" />
                  Tue–Sun | 10AM–1PM | 6PM–8PM (Mon Closed)
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
