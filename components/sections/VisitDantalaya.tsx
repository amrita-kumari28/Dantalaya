import Container from "@/components/ui/Container";
import SectionTitle from "@/components/shared/SectionTitle";

export default function VisitDantalaya() {
  return (
    <section id="contact" className="scroll-mt-20 bg-surface py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <SectionTitle
              eyebrow="Visit Dantalaya"
              title="We're Here to Care for Your Smile"
              description="Conveniently located in Asansol, Dantalaya offers modern and compassionate dental care for patients of all ages."
            />

            <div className="mt-8 space-y-5">

              <div>
                <h3 className="font-semibold">
                  📍 Address
                </h3>

                <p className="mt-2">
                  Dantalaya
                  <br />
                  Rajdeep Apartment (Block B)
                  <br />
                  Gopalpur
                  <br />
                  Asansol
                  <br />
                  West Bengal
                  <br />
                  India
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  📞 Phone
                </h3>

                <a href="tel:7001899267">
                  7001899267
                </a>
              </div>

              <div>
                <h3 className="font-semibold">
                  💬 WhatsApp
                </h3>

                <a
                  href="https://wa.me/917001899267"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat with us
                </a>
              </div>

              <div>
                <h3 className="font-semibold">
                  ✉ Email
                </h3>

                <a href="mailto:dantalaya.asansol@gmail.com">
                  dantalaya.asansol@gmail.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold">
                  🕒 Clinic Hours
                </h3>

                <p className="mt-2">
                  Monday: Closed
                  <br />
                  Tuesday – Sunday
                  <br />
                  10 AM – 1 PM
                  <br />
                  6 PM – 8 PM
                </p>
              </div>

            </div>
          </div>

          <div>
            <div className="flex aspect-square items-center justify-center rounded-3xl bg-accent/30">
              Google Map
            </div>

            <a
              href="https://maps.app.goo.gl/1QLsaaWSCn6RhwKE8"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-lg bg-primary px-6 py-3 text-white"
            >
              Get Directions
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
}