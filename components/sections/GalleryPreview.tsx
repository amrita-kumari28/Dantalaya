import Image from "next/image";
import Link from "next/link";
import { Camera } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Reveal from "@/components/shared/Reveal";
import { gallery } from "@/data/gallery";

export default function GalleryPreview() {
  return (
    <section id="gallery" className="scroll-mt-20 py-20 lg:py-24">
      <Container>
        <SectionTitle
          eyebrow="Gallery"
          title="Inside Dantalaya"
          description="Take a glimpse into our modern, welcoming dental clinic designed for your comfort."
          // align="center"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.slice(0, 3).map((image, i) => (
            <Reveal
              as="div"
              key={image}
              delay={(i % 3) * 90}
              className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <figure className="group relative h-72 overflow-hidden rounded-3xl border border-border bg-muted shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:h-80">
                <Image
                  src={image}
                  alt={`Dantalaya dental clinic interior view ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <figcaption className="absolute bottom-4 left-4 flex translate-y-3 items-center gap-2 text-sm font-medium text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Camera size={16} />
                  Dantalaya Clinic
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
  <Link
    href="/gallery"
    className="rounded-full bg-primary px-8 py-3 text-white font-semibold transition hover:scale-105 hover:shadow-lg"
  >
    Explore More of Dantalaya →
  </Link>
</div>
      </Container>
    </section>
  );
}
