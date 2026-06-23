"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="relative h-[500px] hidden md:flex items-center justify-center"
          >
             <div className="relative w-4/5 h-4/5 flex items-center justify-center bg-white rounded-full p-8 shadow-ambient-hover">
                <Image 
                  src="/logo.png" 
                  alt="Kids Zone Logo"
                  fill
                  className="object-contain p-8"
                />
             </div>
             
             {/* Decorative element */}
             <div className="absolute top-10 right-10 w-20 h-20 bg-pastel-yellow rounded-full -z-10 animate-pulse"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <SectionHeading 
              title="About Kids Zone" 
              subtitle="Where little minds blossom through play, curiosity, and joyful discovery."
              centered={false}
            />
            
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
