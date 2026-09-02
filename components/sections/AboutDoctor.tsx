import Image from "next/image";
import { Check, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Reveal from "@/components/shared/Reveal";

const highlights = [
  "Compassionate Care",
  "Modern Dentistry",
  "Patient-Centered Treatment",
];

export default function AboutDoctor() {
  return (
    <section id="about" className="scroll-mt-20 bg-surface py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <div className="overflow-hidden rounded-[2rem] border border-border shadow-lg">
                <Image
                  src="/clinic-interior.jpeg"
                  alt="Inside the Dantalaya dental clinic in Asansol"
                  width={640}
                  height={800}
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </div>
              <div className="absolute -right-4 -top-4 hidden rounded-2xl border border-border bg-background px-5 py-4 shadow-md sm:block">
                <p className="font-serif text-2xl font-bold text-primary">BDS</p>
                <p className="text-xs text-muted-foreground">WBUHS Qualified</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <SectionTitle
              eyebrow="Meet Your Dentist"
              title="Dr. Shreya Kumari"
              description="Dedicated to providing compassionate, modern dental care for healthy and confident smiles."
            />

            <div className="mt-6">
              <p className="font-semibold text-foreground">BDS (WBUHS)</p>
              <p className="text-muted-foreground">Oral &amp; Dental Surgeon</p>
            </div>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check size={16} />
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="tel:7001899267"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Phone size={18} />
              Book Appointment
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
