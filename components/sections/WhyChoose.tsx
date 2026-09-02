import { HeartHandshake, Sparkles, GraduationCap, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Reveal from "@/components/shared/Reveal";

const features = [
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    text: "Every patient is treated with empathy, patience, and personal attention.",
  },
  {
    icon: Sparkles,
    title: "Modern Techniques",
    text: "Contemporary dental procedures focused on comfort and long-term oral health.",
  },
  {
    icon: GraduationCap,
    title: "Patient Education",
    text: "Clear explanations help you make informed decisions about your treatment.",
  },
  {
    icon: ShieldCheck,
    title: "Comfortable Environment",
    text: "A clean, welcoming clinic designed to reduce anxiety and build confidence.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow="Why Dantalaya"
          title="Care You Can Trust"
          description="Our approach combines modern dentistry with compassionate, patient-focused care."
          // align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal as="div" key={item.title} delay={i * 80}>
                <div className="group h-full rounded-3xl border border-border bg-surface p-8 transition-all hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
