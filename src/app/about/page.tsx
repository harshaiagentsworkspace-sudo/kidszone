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
            <h3 className="font-quicksand font-bold text-2xl mb-6">Mrs. Maya Vyas</h3>
            <p className="italic text-foreground/70 leading-relaxed">
              &quot;At Kids Zone, we don&apos;t just teach; we ignite the spark of curiosity. My team and I are dedicated to ensuring that when your child walks through our doors, they are stepping into a world where their ideas are valued, their feelings are respected, and their potential is limitless.&quot;
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container mx-auto max-w-[1280px] px-6 text-center">
          <h2 className="headline-md mb-12">Connect With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Facebook Card */}
            <a 
              href="https://www.facebook.com/share/18uAat4xG8/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block p-10 rounded-[32px] bg-[#1877F2]/5 border border-[#1877F2]/20 hover:bg-[#1877F2] transition-colors duration-300 shadow-ambient hover:shadow-ambient-hover"
            >
              <div className="flex flex-col items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1877F2]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </div>
                <h3 className="font-quicksand font-bold text-3xl text-foreground group-hover:text-white transition-colors duration-300">Facebook</h3>
                <p className="text-foreground/70 group-hover:text-white/90 transition-colors duration-300">
                  Join our community and stay updated with our latest events, announcements, and activities.
                </p>
              </div>
            </a>

            {/* Instagram Card */}
            <a 
              href="https://www.instagram.com/kidszonepatan?igsh=NzdnOW5pbnFuODZ1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block p-10 rounded-[32px] bg-[#E1306C]/5 border border-[#E1306C]/20 hover:bg-[#E1306C] transition-colors duration-300 shadow-ambient hover:shadow-ambient-hover"
            >
              <div className="flex flex-col items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E1306C]"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </div>
                <h3 className="font-quicksand font-bold text-3xl text-foreground group-hover:text-white transition-colors duration-300">Instagram</h3>
                <p className="text-foreground/70 group-hover:text-white/90 transition-colors duration-300">
                  Follow us for a daily glimpse into the joyful, creative moments at Kids Zone.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
