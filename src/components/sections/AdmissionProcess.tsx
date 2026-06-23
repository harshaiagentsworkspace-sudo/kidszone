"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SectionHeading } from "@/components/shared/SectionHeading";

const steps = [
  {
    number: "01",
    title: "School Visit",
    description: "Schedule a tour to see our campus, meet the teachers, and experience the environment.",
    color: "bg-pastel-pink",
    textColor: "text-secondary"
  },
  {
    number: "02",
    title: "Submit Form",
    description: "Fill out the online application form and submit the necessary documents.",
    color: "bg-pastel-yellow",
    textColor: "text-tertiary"
  },
  {
    number: "03",
    title: "Interaction",
    description: "A brief, informal interaction session with the child and parents.",
    color: "bg-pastel-blue",
    textColor: "text-primary"
  },
  {
    number: "04",
    title: "Enrollment",
    description: "Complete the fee payment and welcome your child to the Kids Zone family!",
    color: "bg-pastel-green",
    textColor: "text-emerald-700"
  }
];

export function AdmissionProcess() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto max-w-[1280px] px-6">
        <SectionHeading 
          title="Simple Admission Process" 
          subtitle="We've made joining our family as easy as 1-2-3-4."
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 relative"
        >
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-1/8 right-1/8 h-1 border-t-2 border-dashed border-border/50 -z-10"></div>

          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeUp} className="relative">
              <div className={`w-24 h-24 rounded-[32px] ${step.color} mx-auto mb-6 flex items-center justify-center shadow-ambient rotate-3 group-hover:rotate-0 transition-transform`}>
                <span className={`font-quicksand font-bold text-3xl ${step.textColor}`}>
                  {step.number}
                </span>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl text-foreground mb-3 font-quicksand">{step.title}</h3>
                <p className="text-foreground/70 text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
