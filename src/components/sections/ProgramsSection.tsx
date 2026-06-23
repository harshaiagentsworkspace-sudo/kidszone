"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const programs = [
  {
    id: "playgroup",
    title: "Playgroup",
    age: "2 - 3 Years",
    image: "/programs/Playgroup.png",
    description: "Focuses on sensory play, motor skills, and social interaction in a nurturing environment.",
    color: "bg-pastel-green",
    badgeColor: "green" as const,
  },
  {
    id: "nursery",
    title: "Nursery",
    age: "3 - 4 Years",
    image: "/programs/Nursery.png",
    description: "Introduces foundational concepts like numbers, letters, and creative expression.",
    color: "bg-pastel-pink",
    badgeColor: "pink" as const,
  },
  {
    id: "kg",
    title: "KG",
    age: "4 - 6 Years",
    image: "/programs/KG.png",
    description: "Enhances cognitive skills, early reading, and mathematical concepts through interactive play.",
    color: "bg-pastel-yellow",
    badgeColor: "yellow" as const,
  },
  {
    id: "primary",
    title: "Primary",
    age: "6+ Years",
    image: "/programs/Senior.png",
    description: "Builds a strong foundation in core subjects, critical thinking, and character development.",
    color: "bg-pastel-blue",
    badgeColor: "blue" as const,
  }
];

export function ProgramsSection() {
  return (
    <section className="py-24 bg-surface relative">
      <div className="container mx-auto max-w-[1280px] px-6">
        <SectionHeading 
          title="Our Educational Programs" 
          subtitle="Tailored curricula designed for specific age groups to ensure optimal development at every stage."
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {programs.map((program) => (
            <motion.div key={program.id} variants={fadeUp}>
              <Card className="h-full border-none shadow-ambient hover:shadow-ambient-hover transition-all duration-300 hover:-translate-y-2 rounded-[24px] overflow-hidden flex flex-col group">
                {/* Colored Top Border */}
                <div className={`h-2 w-full ${program.color}`} />
                
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant={program.badgeColor}>{program.age}</Badge>
                  </div>
                </div>
                
                <CardContent className="pt-6 flex-1 bg-white">
                  <h3 className="font-quicksand font-bold text-2xl mb-2 text-foreground">{program.title}</h3>
                  <p className="text-foreground/70 text-sm line-clamp-3">
                    {program.description}
                  </p>
                </CardContent>
                
                <CardFooter className="bg-white pb-6 pt-0 border-t border-border/50">
                  <Button variant="ghost" className="w-full mt-4" asChild>
                    <Link href={`/programs#${program.id}`}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
