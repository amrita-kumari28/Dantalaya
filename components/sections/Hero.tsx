import Image from "next/image";
import { Phone, MessageCircle, MapPin, Clock, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/shared/Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden py-16 lg:py-24"
    >
      {/* Soft brand background accent */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-primary shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-cta" />
              Dantalaya • Asansol
            </p>

            <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] text-foreground lg:text-6xl">
              Crafting Beautiful, Confident Smiles
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Personalized dental care for healthy, confident smiles through
              modern techniques and compassionate treatment.
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-surface/70 p-5">
              <h2 className="font-serif text-2xl font-semibold text-primary">
                Dr. Shreya Kumari
              </h2>
              <p className="mt-1 text-sm font-medium text-foreground">
                BDS (WBUHS)
              </p>
              <p className="text-sm text-muted-foreground">
                Oral &amp; Dental Surgeon
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:7001899267"
                aria-label="Call Dantalaya"
                className="inline-flex items-center gap-2 rounded-full bg-cta px-7 py-3.5 font-semibold text-cta-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Phone size={18} />
                Call Now
              </a>

              <a
                href="https://wa.me/917001899267"
                target="_blank"
                rel="noreferrer"
                aria-label="Chat with Dantalaya on WhatsApp"
                className="inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3.5 font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>

            <ul className="mt-8 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-6">
              <li className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-secondary" />
                Asansol, West Bengal
              </li>
              <li className="inline-flex items-center gap-2">
                <Clock size={16} className="text-secondary" />
                Tue–Sun | 10AM–1PM | 6PM–8PM
              </li>
              <li className="inline-flex items-center gap-2">
                <Star size={16} className="text-cta" />
                Personalized Dental Care
              </li>
            </ul>
          </Reveal>

          <Reveal delay={120} className="lg:pl-8">
            <div className="relative mx-auto max-w-md">
              <div className="overflow-hidden rounded-[2rem] border border-border bg-accent/20 shadow-xl">
                <Image
                  src="/hero-smile.jpg"
                  alt="Patient with a healthy, confident smile at Dantalaya dental clinic"
                  width={640}
                  height={800}
                  priority
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </div>

              {/* Floating trust badge */}
              <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-4 shadow-lg sm:flex">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Star size={22} className="fill-cta text-cta" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Trusted Care
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Gentle &amp; modern dentistry
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
