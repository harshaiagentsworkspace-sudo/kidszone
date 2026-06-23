import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Clock, Users, BookOpen } from "lucide-react";

const programsData = [
  {
    id: "playgroup",
    title: "Playgroup",
    age: "2 - 3 Years",
    time: "9:00 AM - 12:00 PM",
    ratio: "1:8",
    image: "/programs/Playgroup.png",
    description: "The Playgroup program is designed to ease the transition from home to school. We focus on sensory exploration, developing motor skills, and encouraging social interaction in a warm, nurturing environment.",
    features: ["Sensory Bins & Messy Play", "Music & Movement", "Basic Motor Skills", "Socialization"],
    color: "bg-pastel-green",
    badgeColor: "green" as const,
  },
  {
    id: "nursery",
    title: "Nursery",
    age: "3 - 4 Years",
    time: "9:00 AM - 1:00 PM",
    ratio: "1:10",
    image: "/programs/Nursery.png",
    description: "In Nursery, children begin to explore more structured learning while retaining a strong play-based approach. We introduce foundational concepts like numbers, letters, and creative expression.",
    features: ["Phonics Introduction", "Pre-math Concepts", "Storytelling", "Creative Arts"],
    color: "bg-pastel-pink",
    badgeColor: "pink" as const,
  },
  {
    id: "kg",
    title: "KG",
    age: "4 - 6 Years",
    time: "8:30 AM - 1:30 PM",
    ratio: "1:12",
    image: "/programs/KG.png",
    description: "The KG program enhances cognitive skills, early reading, and mathematical concepts through interactive and collaborative play, preparing them for primary education.",
    features: ["Reading Simple Words", "Basic Addition/Subtraction", "Environmental Awareness", "Team Projects"],
    color: "bg-pastel-yellow",
    badgeColor: "yellow" as const,
  },
  {
    id: "primary",
    title: "Primary",
    age: "6+ Years",
    time: "8:30 AM - 2:30 PM",
    ratio: "1:15",
    image: "/programs/Senior.png",
    description: "The Primary program builds a strong foundation in core subjects. It focuses on critical thinking, character development, logical reasoning, and building independence and confidence.",
    features: ["Fluent Reading & Writing", "Logical Reasoning", "Science Experiments", "Public Speaking"],
    color: "bg-pastel-blue",
    badgeColor: "blue" as const,
  }
];

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <PageHeader 
        title="Our Educational Programs" 
        subtitle="Explore our age-appropriate curricula designed to foster growth, creativity, and a love for learning."
        bgImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop"
      />
      
      <div className="py-24 bg-white space-y-32">
        {programsData.map((program, index) => (
          <section key={program.id} id={program.id} className="container mx-auto max-w-[1280px] px-6 scroll-mt-32">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              <div className={`relative h-[400px] w-full rounded-[40px] overflow-hidden shadow-ambient ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                 <Image src={program.image} alt={program.title} fill className="object-cover" />
                 <div className={`absolute top-0 left-0 w-full h-4 ${program.color}`} />
              </div>
              
              <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant={program.badgeColor} className="text-sm px-4 py-1">{program.age}</Badge>
                </div>
                <h2 className="headline-md text-foreground mb-4">{program.title}</h2>
                <p className="body-md text-foreground/80 mb-8">
                  {program.description}
                </p>
                
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2 text-foreground/70 bg-surface px-4 py-2 rounded-full">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-medium">{program.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70 bg-surface px-4 py-2 rounded-full">
                    <Users className="w-5 h-5 text-secondary" />
                    <span className="font-medium">Ratio {program.ratio}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-tertiary" />
                    Key Focus Areas
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-foreground/80 text-sm">
                        <div className={`w-2 h-2 rounded-full ${program.color}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button asChild>
                  <Link href={`/admissions?program=${program.id}`}>Enroll in {program.title}</Link>
                </Button>
              </div>

            </div>
          </section>
        ))}
      </div>

      <CTASection />
      <Footer />
    </>
  );
}
