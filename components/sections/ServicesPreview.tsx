import Container from "@/components/ui/Container";
import SectionTitle from "@/components/shared/SectionTitle";

export default function ServicesPreview() {
  return (
    <section id="services" className="scroll-mt-20 py-20">
      <Container>
        <SectionTitle
          eyebrow="Services"
          title="Comprehensive Dental Care"
          description="Modern dental treatments designed to keep your smile healthy, functional, and beautiful."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-surface p-8">
            <h3 className="text-2xl font-semibold">
              General Dentistry
            </h3>

            <p className="mt-4">
              Routine check-ups and preventive dental care.
            </p>
          </div>

          <div className="rounded-3xl bg-surface p-8">
            <h3 className="text-2xl font-semibold">
              Cosmetic Dentistry
            </h3>

            <p className="mt-4">
              Smile enhancement treatments for confidence.
            </p>
          </div>

          <div className="rounded-3xl bg-surface p-8">
            <h3 className="text-2xl font-semibold">
              Restorative Care
            </h3>

            <p className="mt-4">
              Fillings, crowns and tooth restoration.
            </p>
          </div>

          <div className="rounded-3xl bg-surface p-8">
            <h3 className="text-2xl font-semibold">
              Preventive Care
            </h3>

            <p className="mt-4">
              Protecting healthy smiles through prevention.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}