import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Phone,
  MessageCircle,
  ChevronRight,
  HeartHandshake,
  Smile,
  Sparkles,
  AlertCircle,
  Check,
  Heart,
  ArrowRight,
  MapPin,
  Clock,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Reveal from "@/components/shared/Reveal";
import FaqAccordion from "@/components/shared/FaqAccordion";
import { services } from "@/data/services";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | Dantalaya`,
    description: service.shortDescription,
  };
}

const trustHighlights = [
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    text: "Treatment plans tailored to your individual needs.",
  },
  {
    icon: Smile,
    title: "Comfortable Experience",
    text: "Gentle and patient-focused dental care.",
  },
  {
    icon: Sparkles,
    title: "Modern Techniques",
    text: "High-quality treatment with contemporary methods.",
  },
];

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="py-12 lg:py-16">
          <Container>
            <Reveal>
              <div className="overflow-hidden rounded-[2rem] border border-border bg-surface shadow-sm">
                <div className="relative h-64 w-full sm:h-80 lg:h-96">
                  <Image
                    src={service.image || "/services/default.jpg"}
                    alt={service.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                </div>

                <div className="p-6 sm:p-10">
                  <nav
                    aria-label="Breadcrumb"
                    className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground"
                  >
                    <Link href="/" className="transition-colors hover:text-primary">
                      Home
                    </Link>
                    <ChevronRight size={14} />
                    <Link
                      href="/services"
                      className="transition-colors hover:text-primary"
                    >
                      Services
                    </Link>
                    <ChevronRight size={14} />
                    <span className="font-medium text-foreground">
                      {service.title}
                    </span>
                  </nav>

                  <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-secondary">
                    <span className="h-px w-6 bg-secondary" />
                    Dantalaya Dental Care
                  </p>

                  <h1 className="mt-3 text-balance font-serif text-4xl font-bold text-foreground lg:text-5xl">
                    {service.title}
                  </h1>

                  <p className="mt-5 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
                    {service.shortDescription}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="tel:7001899267"
                      className="inline-flex items-center gap-2 rounded-full bg-cta px-7 py-3.5 font-semibold text-cta-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <Phone size={18} />
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/917001899267"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3.5 font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                    >
                      <MessageCircle size={18} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Trust highlights */}
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {trustHighlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal as="div" key={item.title} delay={i * 80}>
                    <div className="h-full rounded-3xl border border-border bg-surface p-6 text-center">
                      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon size={22} />
                      </span>
                      <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Overview */}
        <section className="pb-4">
          <Container>
            <Reveal>
              <div className="rounded-3xl border border-border bg-surface p-8 lg:p-10">
                <h2 className="font-serif text-2xl font-bold text-foreground lg:text-3xl">
                  What is this treatment?
                </h2>
                <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
                  {service.overview}
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Symptoms & Benefits */}
        <section className="py-12">
          <Container>
            <div className="grid gap-6 lg:grid-cols-2">
              {service.symptoms && (
                <Reveal>
                  <div className="h-full rounded-3xl border border-border bg-surface p-8">
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      Signs You May Need This
                    </h2>
                    <ul className="mt-6 space-y-3">
                      {service.symptoms.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 rounded-2xl border border-border bg-background p-4"
                        >
                          <AlertCircle
                            size={20}
                            className="mt-0.5 shrink-0 text-cta"
                          />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}

              {service.benefits && (
                <Reveal delay={100}>
                  <div className="h-full rounded-3xl border border-border bg-surface p-8">
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      Benefits
                    </h2>
                    <ul className="mt-6 space-y-3">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-3 rounded-2xl border border-border bg-background p-4"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                            <Check size={14} />
                          </span>
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}
            </div>
          </Container>
        </section>

        {/* Procedure */}
        <section className="pb-12">
          <Container>
            <Reveal>
              <h2 className="font-serif text-2xl font-bold text-foreground lg:text-3xl">
                Treatment Procedure
              </h2>
            </Reveal>

            <div className="mt-8 space-y-4">
              {service.procedure.map((step, index) => (
                <Reveal as="div" key={step} delay={index * 60}>
                  <div className="flex items-center gap-5 rounded-2xl border border-border bg-surface p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary font-serif text-lg font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                    <p className="font-medium text-foreground">{step}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Aftercare */}
        {service.aftercare && (
          <section className="pb-12">
            <Container>
              <Reveal>
                <h2 className="font-serif text-2xl font-bold text-foreground lg:text-3xl">
                  Aftercare
                </h2>
              </Reveal>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {service.aftercare.map((tip, i) => (
                  <Reveal as="div" key={tip} delay={(i % 2) * 80}>
                    <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-5">
                      <Heart size={20} className="mt-0.5 shrink-0 text-secondary" />
                      <span className="text-muted-foreground">{tip}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* FAQs */}
        {service.faqs && (
          <section className="pb-16">
            <Container>
              <Reveal>
                <h2 className="font-serif text-2xl font-bold text-foreground lg:text-3xl">
                  Frequently Asked Questions
                </h2>
              </Reveal>
              <div className="mt-8 max-w-3xl">
                <FaqAccordion faqs={service.faqs} />
              </div>
            </Container>
          </section>
        )}

        {/* Related Services */}
        <section className="bg-surface py-20">
          <Container>
            <div className="text-center">
              <p className="inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-secondary">
                <span className="h-px w-6 bg-secondary" />
                Explore More
                <span className="h-px w-6 bg-secondary" />
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground lg:text-4xl">
                Related Treatments
              </h2>
              <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                Discover other dental services at Dantalaya to help you maintain
                a healthy and confident smile.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {relatedServices.map((item, i) => (
                <Reveal as="div" key={item.slug} delay={i * 80}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-xl"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                        {item.shortDescription}
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

        {/* CTA */}
        <section className="py-20">
          <Container>
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-center text-primary-foreground shadow-xl sm:px-10">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-0"
                >
                  <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-secondary/30 blur-3xl" />
                  <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-3xl">
                  <h2 className="font-serif text-3xl font-bold lg:text-4xl">
                    Need Dental Care?
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-primary-foreground/90">
                    Whether you&apos;re experiencing discomfort or simply due for a
                    routine check-up, we&apos;re here to help. Book your
                    consultation with Dr. Shreya Kumari at Dantalaya.
                  </p>

                  <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <a
                      href="tel:7001899267"
                      className="inline-flex items-center gap-2 rounded-full bg-cta px-8 py-4 font-semibold text-cta-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <Phone size={18} />
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/917001899267"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-8 py-4 font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary-foreground hover:text-primary"
                    >
                      <MessageCircle size={18} />
                      WhatsApp
                    </a>
                  </div>

                  <div className="mt-10 flex flex-col items-center justify-center gap-3 border-t border-primary-foreground/20 pt-6 text-sm text-primary-foreground/80 sm:flex-row sm:gap-8">
                    <span className="inline-flex items-center gap-2">
                      <MapPin size={16} className="text-accent" />
                      Asansol, West Bengal
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Clock size={16} className="text-accent" />
                      Tue – Sun | 10AM–1PM | 6PM–8PM
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
