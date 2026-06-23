import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { GallerySection } from "@/components/sections/GallerySection";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <PageHeader 
        title="Campus Gallery" 
        subtitle="Take a visual tour of our vibrant classrooms, expansive play areas, and the joyful moments we share every day."
        bgImage="https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=1600&auto=format&fit=crop"
      />
      
      <div className="pb-24">
        <GallerySection />
      </div>

      <CTASection />
      <Footer />
    </>
  );
}
