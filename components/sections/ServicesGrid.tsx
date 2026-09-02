import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Reveal from "@/components/shared/Reveal";
import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-20 bg-surface py-20">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="Treatments"
            title="Comprehensive Dental Services"
            description="Personalized dental treatments designed for healthy, functional, and confident smiles."
          />

          <div className="flex flex-wrap gap-3">
            <a
              href="tel:7001899267"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
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

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="div" key={service.slug} delay={(i % 4) * 70}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-xl"
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
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>

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
  );
}
