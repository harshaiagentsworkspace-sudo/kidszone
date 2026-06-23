"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/shared/PageHeader";
import { AdmissionProcess } from "@/components/sections/AdmissionProcess";
import { FAQSection } from "@/components/sections/FAQSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdmissionsPage() {
  return (
    <>
      <Navbar />
      <PageHeader 
        title="Admissions" 
        subtitle="Join the Kids Zone family. We're excited to welcome you and your child."
        bgImage="https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=1600&auto=format&fit=crop"
      />
      
      <AdmissionProcess />

      <section className="py-24 bg-surface-container">
        <div className="container mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Eligibility & Documents */}
            <div>
              <SectionHeading title="Eligibility & Documents" centered={false} />
              
              <Card className="border-none shadow-ambient rounded-[32px] overflow-hidden mb-8">
                <CardContent className="p-8">
                  <h3 className="font-quicksand font-bold text-xl mb-4">Age Criteria (as of June 1st)</h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">Play Group</span>
                      <span className="text-foreground/70">2 to 3 Years</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">Nursery</span>
                      <span className="text-foreground/70">3 to 4 Years</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">Junior KG</span>
                      <span className="text-foreground/70">4 to 5 Years</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">Senior KG</span>
                      <span className="text-foreground/70">5 to 6 Years</span>
                    </li>
                  </ul>

                  <h3 className="font-quicksand font-bold text-xl mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" /> Required Documents
                  </h3>
                  <ul className="space-y-3 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      Birth Certificate (Original + Copy)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      Child&apos;s Immunization/Vaccination Record
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      4 Passport size photographs of the child
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      Parents&apos; ID and Address Proof
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Fees Placeholder */}
            <div>
              <SectionHeading title="Fee Structure" centered={false} />
              <Card className="border-none shadow-ambient rounded-[32px] overflow-hidden bg-primary text-white">
                <CardContent className="p-8 h-full flex flex-col justify-center items-center text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                    <span className="text-4xl">💰</span>
                  </div>
                  <h3 className="font-quicksand font-bold text-2xl mb-4">Transparent Pricing</h3>
                  <p className="text-white/80 mb-8 leading-relaxed">
                    We believe in complete transparency. Our fee structure is comprehensive and covers tuition, daily meals, learning materials, and most extracurricular activities.
                  </p>
                  <p className="text-white/90 italic mb-8">
                    Detailed fee structure is provided during the campus tour or upon specific request via our inquiry form.
                  </p>
                  <Button variant="secondary" size="lg" className="w-full text-lg" asChild>
                    <Link href="/contact">Request Fee Structure</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      <FAQSection />
      <Footer />
    </>
  );
}
