import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Reveal from "@/components/shared/Reveal";
import { services } from "@/data/services";

export const metadata = {
  title: "Our Services",
  description:
    "Explore the comprehensive dental treatments offered at Dantalaya in Asansol, from check-ups and root canals to smile designing and preventive care.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        <section className="py-16 lg:py-20">
          <Container>
            <Reveal>
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-secondary">
                    <span className="h-px w-6 bg-secondary" />
                    Our Services
                  </p>
                  <h1 className="mt-3 text-balance font-serif text-4xl font-bold text-foreground lg:text-5xl">
                    Comprehensive Dental Care
                  </h1>
                  <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                    At Dantalaya, we provide modern dental treatments focused on
                    prevention, restoration, and beautiful, confident smiles.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:7001899267"
                    className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 text-sm font-semibold text-cta-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <Phone size={16} />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/917001899267"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, i) => (
                <Reveal as="div" key={service.slug} delay={(i % 4) * 70}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-xl"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="font-serif text-xl font-semibold text-foreground">
                        {service.title}
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                        {service.shortDescription}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary transition-colors group-hover:text-primary">
                        Learn More
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
