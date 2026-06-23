import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { AdmissionProcess } from "@/components/sections/AdmissionProcess";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { WaveDivider } from "@/components/shared/WaveDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex-1 overflow-hidden">
        <Hero />
        <WaveDivider color="#ffffff" />
        
        <AboutSection />
        <WaveDivider color="#f1ecfa" />
        
        <ProgramsSection />
        <WaveDivider color="#ffffff" className="bg-surface-container" />
        
        <WhyChooseUs />
        <ActivitiesSection />
        
        <StatsSection />
        <WaveDivider color="#f1ecfa" className="bg-white" />
        
        <GallerySection />
        <WaveDivider color="#ffffff" className="bg-surface" />
        
        <TestimonialSection />
        <AdmissionProcess />
        
        <FAQSection />
        
        <CTASection />
      </div>
      <Footer />
    </>
  );
}
