"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FloatingDoodle } from "@/components/shared/FloatingDoodles";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-background">
      <FloatingDoodle type="star" className="top-32 left-[10%]" delay={0} />
      <FloatingDoodle type="crown" className="top-40 right-[15%]" delay={1} />
      <FloatingDoodle type="swirl" className="bottom-20 left-[15%]" delay={2} />
      <FloatingDoodle type="star" className="bottom-40 right-[10%]" delay={0.5} />

      <div className="container mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-6 z-20 relative"
          >

            
            <motion.h1 variants={fadeUp} className="display-lg text-foreground">
              A Bright Start for Your Child&apos;s <span className="text-primary relative inline-block">
                Future
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-tertiary-container" viewBox="0 0 100 20" preserveAspectRatio="none">
                   <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="body-lg text-foreground/70 max-w-xl">
              We provide a safe, nurturing, and joyful environment where your child can learn, explore, and grow with confidence.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-4">
              <Button size="lg" asChild>
                <Link href="/admissions">Admissions Open</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Book a Campus Tour</Link>
              </Button>
            </motion.div>
            
            {/* Stats/Badges */}
            <motion.div variants={fadeUp} className="flex gap-8 mt-8">
              <div className="flex flex-col">
                <span className="font-quicksand font-bold text-3xl text-secondary-container">15+</span>
                <span className="text-sm font-medium text-foreground/70">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="font-quicksand font-bold text-3xl text-primary-container">500+</span>
                <span className="text-sm font-medium text-foreground/70">Happy Students</span>
              </div>
              <div className="flex flex-col">
                <span className="font-quicksand font-bold text-3xl text-tertiary-container">25+</span>
                <span className="text-sm font-medium text-foreground/70">Expert Teachers</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="relative lg:h-[600px] flex justify-center items-center"
          >
             <div className="relative w-full max-w-[1200px] aspect-[16/10] z-10 transform transition-transform hover:-translate-y-2 duration-500 xl:scale-125 lg:scale-110 lg:ml-10">
                <Image 
                  src="/Hero Section VIdeo.png" 
                  alt="Hero Section Video Thumbnail"
                  fill
                  className="object-contain"
                  priority
                />
             </div>
             


          </motion.div>

        </div>
      </div>
    </section>
  );
}
