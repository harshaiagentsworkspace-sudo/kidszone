"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactForm } from "@/components/shared/ContactForm";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageHeader 
        title="Contact Us" 
        subtitle="We'd love to hear from you. Reach out to schedule a tour or ask any questions."
        bgImage="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1600&auto=format&fit=crop"
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <SectionHeading title="Get In Touch" centered={false} className="mb-8" />
              <p className="text-foreground/70 mb-10 leading-relaxed">
                Whether you&apos;re looking to enroll your child, want to understand our fee structure, or simply want to see our beautiful campus in person, our team is here to help.
              </p>
              
              <div className="space-y-6">
                <Card className="border-none shadow-ambient rounded-[24px]">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg font-quicksand mb-1">Our Campus</h4>
                      <p className="text-foreground/70 text-sm">Ward no.15 Civil Court Square Katangi road Patan, Jabalpur</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-ambient rounded-[24px]">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg font-quicksand mb-1">Phone</h4>
                      <p className="text-foreground/70 text-sm mb-1">8223951666</p>
                      <p className="text-foreground/70 text-sm">8223951667</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-ambient rounded-[24px]">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-tertiary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg font-quicksand mb-1">Email</h4>
                      <p className="text-foreground/70 text-sm">kidszonejbp@gmail.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-ambient rounded-[24px]">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg font-quicksand mb-1">Office Hours</h4>
                      <p className="text-foreground/70 text-sm mb-1">Monday - Friday: 8:00 AM - 4:00 PM</p>
                      <p className="text-foreground/70 text-sm">Saturday: 9:00 AM - 1:00 PM (Tours by appt)</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Form */}
            <div>
              <Card className="border-none shadow-ambient hover:shadow-ambient-hover transition-shadow duration-300 rounded-[40px] bg-white h-full">
                <CardContent className="p-8 md:p-10 h-full">
                  <h3 className="font-quicksand font-bold text-2xl mb-2">Send us a Message</h3>
                  <p className="text-foreground/60 text-sm mb-8">Fill out the form below and we&apos;ll get back to you shortly.</p>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-surface-dim relative">
        <div className="absolute inset-0 flex items-center justify-center text-center p-6">
           <div className="bg-white/90 backdrop-blur p-8 rounded-[32px] shadow-ambient max-w-md">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-quicksand font-bold text-xl mb-2">Interactive Map Placeholder</h3>
              <p className="text-foreground/70 text-sm">In a production environment, an interactive Google Map or Mapbox instance would be embedded here showing the campus location.</p>
           </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
