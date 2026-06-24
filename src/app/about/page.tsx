import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHeader 
        title="Our Story & Vision" 
        subtitle="Discover the heart and soul of Kids Zone, where every child's journey begins with love and curiosity."
        bgImage="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600&auto=format&fit=crop"
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="headline-md text-foreground">A Legacy of Joyful Learning</h2>
              <p className="body-md text-foreground/80 leading-relaxed">
                Since its establishment in 2018, our school has been committed to providing quality education and nurturing young minds. Over the years, we have faced various challenges and celebrated many achievements, yet our dedication to learning and growth has remained unwavering.
              </p>
              <p className="body-md text-foreground/80 leading-relaxed">
                Our mission is simple: to ensure that every student receives a strong educational foundation that empowers them to build a brighter future. We believe that education is the key to personal development and lifelong success, and we strive to create an environment where every learner can thrive, grow, and reach their full potential.
              </p>
              <p className="body-md text-foreground/80 leading-relaxed">
                At our school, we are not just shaping academic excellence—we are helping individuals develop the knowledge, skills, and values needed for a better life.
              </p>
              
              <ul className="space-y-4 mt-8">
                {[
                  "Child-Centric Approach",
                  "Inclusive Environment",
                  "Continuous Educator Training",
                  "Strong Parent Partnerships"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-[500px] w-full rounded-[40px] overflow-hidden shadow-ambient-hover group">
              <Image 
                src="/about-us-main.png"
                alt="About Kids Zone"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container">
        <div className="container mx-auto max-w-[1280px] px-6 text-center">
          <h2 className="headline-md mb-12">Meet Our Chairman</h2>
          <div className="max-w-3xl mx-auto bg-white p-10 rounded-[40px] shadow-ambient relative">
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full mx-auto mb-8 border-4 border-primary relative p-3 bg-white flex items-center justify-center shadow-md">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image 
                  src="/gallery/20.jpeg"
                  alt="Chairman"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="font-quicksand font-bold text-2xl">Dr. Eleanor Sterling</h3>
            <p className="text-secondary font-medium mb-6">M.Ed. Early Childhood Development</p>
            <p className="italic text-foreground/70 leading-relaxed">
              &quot;At Kids Zone, we don&apos;t just teach; we ignite the spark of curiosity. My team and I are dedicated to ensuring that when your child walks through our doors, they are stepping into a world where their ideas are valued, their feelings are respected, and their potential is limitless.&quot;
            </p>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
