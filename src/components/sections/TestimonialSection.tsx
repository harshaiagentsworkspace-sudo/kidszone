"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent of Aarav (4 yrs)",
    content: "Kids Zone is like a second home for Aarav. The teachers are very caring and sweet. My son is always happy to go to school."
  },
  {
    name: "Rahul Verma",
    role: "Parent of Ananya (3 yrs)",
    content: "My daughter loves the play activities here. She learns new things every day. It's a very safe and good place for little kids."
  },
  {
    name: "Sneha Patel",
    role: "Parent of Vivaan (5 yrs)",
    content: "The teachers are wonderful! Vivaan learned so much in his KG classes. We are very happy with this school."
  }
];

export function TestimonialSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto max-w-[1280px] px-6">
        <SectionHeading 
          title="What Parents Say" 
          subtitle="Don't just take our word for it. Hear from the parents who trust us with their children's early education."
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeUp}>
              <Card className="border-none shadow-ambient hover:shadow-ambient-hover transition-all duration-300 h-full rounded-[32px] bg-surface-container-lowest">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6 text-tertiary-container">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground/80 italic mb-8 relative z-10">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div>
                      <h4 className="font-bold text-foreground font-quicksand">{testimonial.name}</h4>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
