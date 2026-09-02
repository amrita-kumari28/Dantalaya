import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";
import { gallery } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <>
      <Header />

      <main className="py-20">
        <Container>
          <SectionTitle
            eyebrow="Gallery"
            title="Inside Dantalaya"
            description="Explore our clinic, treatment rooms, equipment, and patient-friendly environment."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl shadow-lg"
              >
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  width={600}
                  height={450}
                  className="h-80 w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}