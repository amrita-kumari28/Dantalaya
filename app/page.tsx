import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
// import ServicesPreview from "@/components/sections/ServicesPreview";
import AboutDoctor from "@/components/sections/AboutDoctor";
import AppointmentCTA from "@/components/sections/AppointmentCTA";
import Testimonials from "@/components/sections/Testimonials";
import WhyChoose from "@/components/sections/WhyChoose";
import ServicesGrid from "@/components/sections/ServicesGrid";
import GalleryPreview from "@/components/sections/GalleryPreview";
// import VisitDantalaya from "@/components/sections/VisitDantalaya";
import ScrollToTop from "@/components/ui/ScrollToTop";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import ContactSection from "@/components/sections/ContactSection";


export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        {/* <ServicesPreview /> */}

        <AboutDoctor />

        <AppointmentCTA />

        <Testimonials />

        <WhyChoose />

        <ServicesGrid />

        <GalleryPreview />
        <ContactSection />

        {/* <VisitDantalaya /> */}
      </main>

      <Footer />
      <ScrollToTop />
      <FloatingWhatsApp />
    </>
  );
}