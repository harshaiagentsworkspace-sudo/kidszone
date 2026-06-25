"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

export function AboutSection() {
  const [aboutImage, setAboutImage] = useState<string>("/logo.png");
  const supabase = createClient();

  useEffect(() => {
    const fetchSettings = async () => {
      const { data } = await supabase
        .from('site_settings')
        .select('value')
        .eq('key', 'about_image')
        .single();
        
      if (data?.value) {
        setAboutImage(data.value);
      }
    };
    
    fetchSettings();
  }, [supabase]);

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images (Desktop) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px" }}
            variants={fadeUp}
            className="relative h-[500px] w-full hidden lg:flex items-center justify-center"
          >
             <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px] flex items-center justify-center bg-white rounded-full p-8 shadow-ambient-hover">
                <Image 
                  src={aboutImage} 
                  alt="About Kids Zone Image"
                  fill
                  className="object-contain p-4 md:p-8 rounded-full"
                />
             </div>
             
             {/* Decorative element */}
             <div className="absolute top-0 right-4 md:top-10 md:right-10 w-16 h-16 md:w-20 md:h-20 bg-pastel-yellow rounded-full -z-10 animate-pulse"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px" }}
            variants={fadeUp}
            className="lg:pl-8"
          >
            <SectionHeading 
              title="About Kids Zone" 
              centered={false}
              className="mb-4 lg:mb-6"
            />
            
            {/* Image (Mobile Only) */}
            <div className="relative h-[250px] w-full flex lg:hidden items-center justify-center mb-6 mt-4">
               <div className="relative w-[220px] h-[220px] flex items-center justify-center bg-white rounded-full p-4 shadow-ambient-hover">
                  <Image 
                    src={aboutImage} 
                    alt="About Kids Zone Image"
                    fill
                    className="object-contain p-4 rounded-full"
                  />
               </div>
               {/* Decorative element */}
               <div className="absolute top-2 right-12 w-14 h-14 bg-pastel-yellow rounded-full -z-10 animate-pulse"></div>
            </div>

            <p className="body-lg text-foreground/70 max-w-2xl text-balance mb-8">
              Where little minds blossom through play, curiosity, and joyful discovery.
            </p>

            <div className="space-y-6 text-foreground/80 mb-8 body-md">
              <p>
                Since our founding in 2018, Kids Zone has steadily grown through every challenge, standing resilient in our commitment to excellence. Our singular mission is to provide every individual with a proper, foundational education that paves the way for a better, brighter life.
              </p>
              <p>
                We believe that every child is unique and has infinite potential. Our holistic approach to early education combines structured learning with open-ended play, ensuring your child develops cognitively, socially, and emotionally in a safe haven.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pastel-green flex items-center justify-center text-xl shrink-0">
                  🛡️
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Safe & Secure</h4>
                  <p className="text-sm text-foreground/60">24/7 Monitored</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pastel-blue flex items-center justify-center text-xl shrink-0">
                  👩‍🏫
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Expert Staff</h4>
                  <p className="text-sm text-foreground/60">Certified Teachers</p>
                </div>
              </div>
            </div>

            <Button asChild>
              <Link href="/about">Read Our Story</Link>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
