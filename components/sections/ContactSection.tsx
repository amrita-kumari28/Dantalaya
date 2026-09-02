import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Navigation,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Reveal from "@/components/shared/Reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-surface py-20 lg:py-24">
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Visit Dantalaya"
          description="We're here to help you achieve a healthy and confident smile. Reach out or drop by the clinic."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Left: contact details */}
          <Reveal className="space-y-5">
            {/* Address */}
            <div className="rounded-3xl border border-border bg-background p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <MapPin size={20} />
                </span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    Address
                  </h3>
                  <address className="mt-2 not-italic leading-relaxed text-muted-foreground">
                    Dantalaya, Rajdeep Apartment (Block B)
                    <br />
                    Gopalpur, Asansol
                    <br />
                    West Bengal, India
                  </address>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=Dantalaya,Asansol"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <Navigation size={16} />
                  Get Directions
                </a>
                <a
                  href="tel:7001899267"
                  className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                >
                  <Phone size={16} />
                  Call Now
                </a>
              </div>
            </div>

            {/* Quick contact rows */}
            <div className="grid gap-5 sm:grid-cols-2">
              <a
                href="https://wa.me/917001899267"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-3xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cta/15 text-cta transition-colors group-hover:bg-cta group-hover:text-cta-foreground">
                  <MessageCircle size={20} />
                </span>
                <div>
                  <p className="font-semibold text-foreground">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">Chat with us</p>
                </div>
              </a>

              <a
                href="mailto:dantalaya.asansol@gmail.com"
                className="group flex items-center gap-4 rounded-3xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Mail size={20} />
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="truncate text-sm text-muted-foreground">
                    dantalaya.asansol@gmail.com
                  </p>
                </div>
              </a>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 rounded-3xl border border-border bg-background p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                <Clock size={20} />
              </span>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Clinic Hours
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  Tuesday – Sunday
                  <br />
                  10:00 AM – 1:00 PM &nbsp;|&nbsp; 6:00 PM – 8:00 PM
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right: map */}
          <Reveal delay={120}>
            <div className="h-full min-h-[450px] overflow-hidden rounded-3xl border border-border shadow-sm">
              <iframe
                title="Dantalaya location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.303903769535!2d86.92977857389072!3d23.700839090679946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71fed01928a15%3A0x2acfc13a8e58558e!2sDantalaya!5e0!3m2!1sen!2sin!4v1781100090724!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 450 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
