
import { SectionHeading } from "@/components/shared/SectionHeading";
import { WaveDivider } from "@/components/shared/WaveDivider";
import { FloatingDoodle } from "@/components/shared/FloatingDoodles";
import Image from "next/image";

function PageHeader({ title, subtitle, bgImage }: { title: string, subtitle: string, bgImage: string }) {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-primary/10">
      <div className="absolute inset-0 z-0">
        <Image src={bgImage} alt={title} fill className="object-cover opacity-20" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      <FloatingDoodle type="star" className="top-32 left-[10%]" delay={0} />
      <FloatingDoodle type="swirl" className="top-40 right-[15%]" delay={1} />
      <div className="container mx-auto max-w-[1280px] px-6 relative z-10 text-center">
        <SectionHeading title={title} subtitle={subtitle} />
      </div>
      <div className="absolute bottom-0 left-0 w-full z-20">
        <WaveDivider color="#ffffff" />
      </div>
    </section>
  );
}

export { PageHeader };
