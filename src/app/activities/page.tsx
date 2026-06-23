import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/shared/PageHeader";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { CTASection } from "@/components/sections/CTASection";

export default function ActivitiesPage() {
  return (
    <>
      <Navbar />
      <PageHeader 
        title="Extracurricular Activities" 
        subtitle="We believe in holistic development. Our wide range of activities ensures every child finds their passion."
        bgImage="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1600&auto=format&fit=crop"
      />
      
      <div className="pb-24 pt-12">
        <ActivitiesSection />
      </div>

      <CTASection />
      <Footer />
    </>
  );
}
