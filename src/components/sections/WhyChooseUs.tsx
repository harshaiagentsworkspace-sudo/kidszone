"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Shield, BookOpen, Users, Palette, Heart, Sun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Safe Environment",
    description: "24/7 CCTV monitoring and strict access control to ensure your child's safety at all times.",
    bgColor: "bg-primary/10"
  },
  {
    icon: <BookOpen className="w-8 h-8 text-secondary" />,
    title: "Modern Curriculum",
    description: "Blend of Montessori and modern teaching methods focusing on holistic development.",
    bgColor: "bg-secondary/10"
  },
  {
    icon: <Users className="w-8 h-8 text-tertiary" />,
    title: "Expert Educators",
    description: "Highly qualified and passionate teachers dedicated to nurturing early childhood development.",
    bgColor: "bg-tertiary/10"
  },
  {
    icon: <Palette className="w-8 h-8 text-accent" />,
    title: "Creative Learning",
    description: "Daily activities including art, music, and dance to stimulate creative expression.",
    bgColor: "bg-accent/10"
  },
  {
    icon: <Sun className="w-8 h-8 text-[#5a39ee]" />,
    title: "Outdoor Play",
    description: "Expansive playgrounds and nature exploration zones for physical development.",
    bgColor: "bg-[#5a39ee]/10"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto max-w-[1280px] px-6">
        <SectionHeading 
          title="Why Choose Us" 
          subtitle="We provide more than just daycare. We offer a foundation for lifelong success and happiness."
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeUp}>
              <Card className="border-none shadow-ambient hover:shadow-ambient-hover transition-all duration-300 h-full rounded-[24px] overflow-hidden group">
                <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                  <div className={`w-20 h-20 rounded-full ${feature.bgColor} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-quicksand font-bold text-xl text-foreground">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
