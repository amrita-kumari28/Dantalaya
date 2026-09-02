import { Star, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Reveal from "@/components/shared/Reveal";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-surface py-20">
      <Container>
        <SectionTitle
          eyebrow="Patient Stories"
          title="What Our Patients Say"
          description="We're grateful for the trust our patients place in us and strive to provide a comfortable, compassionate experience."
          // align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal as="div" key={item.name} delay={i * 90}>
              <figure className="relative flex h-full flex-col rounded-3xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <Quote
                  className="absolute right-6 top-6 text-accent/50"
                  size={32}
                  aria-hidden
                />

                <div className="flex gap-1 text-cta" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={18} className="fill-cta" />
                  ))}
                </div>

                <blockquote className="mt-6 flex-1 leading-8 text-foreground">
                  &ldquo;{item.review}&rdquo;
                </blockquote>

                <figcaption className="mt-8 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                    {item.name.charAt(0)}
                  </span>
                  <span className="font-semibold text-foreground">
                    {item.name}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
