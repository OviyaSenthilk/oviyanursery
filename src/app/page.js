import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import AdmissionsSection from "../components/AdmissionsSection";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";

export default function Page() {
  return (
    <div>
      
      <section id="home">
        <HomeSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="admissions">
        <AdmissionsSection />
      </section>

      <section id="gallery">
        <GallerySection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      </div>
  );
}
