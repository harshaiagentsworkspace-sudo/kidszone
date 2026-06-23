"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FloatingDoodle } from "@/components/shared/FloatingDoodles";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary -z-20"></div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] -z-10"></div>
      
      <FloatingDoodle type="star" className="top-10 left-[20%] text-white opacity-50" delay={0} />
      <FloatingDoodle type="crown" className="bottom-10 right-[20%] text-white opacity-50" delay={1} />
      
      <div className="container mx-auto max-w-[800px] px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <h2 className="font-quicksand font-bold text-4xl md:text-5xl text-white mb-6">
            Ready to Give Your Child the Best Start?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Admissions are now open for the upcoming academic year. Limited seats available in Play Group and Nursery.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
              <Link href="/admissions">Start Admission Process</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white bg-transparent hover:bg-white hover:text-primary" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
