"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { WaveDivider } from "@/components/shared/WaveDivider";
import Image from "next/image";

const activities = [
  {
    title: "Art & Craft",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
    color: "bg-pastel-pink",
    delay: 0
  },
  {
    title: "Music & Dance",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop",
    color: "bg-pastel-blue",
    delay: 0.1
  },
  {
    title: "Outdoor Sports",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800&auto=format&fit=crop",
    color: "bg-pastel-green",
    delay: 0.2
  },
  {
    title: "STEM Learning",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
    color: "bg-pastel-yellow",
    delay: 0.3
  }
];

export function ActivitiesSection() {
  return (
    <section className="bg-surface-container py-20 relative mt-10">
      <div className="absolute top-0 left-0 w-full transform -translate-y-full z-10">
        <WaveDivider color="#f1ecfa" />
      </div>
      
      <div className="container mx-auto max-w-[1280px] px-6 relative z-20">
        <SectionHeading 
          title="Learning Activities" 
          subtitle="Hands-on experiences that spark curiosity and develop essential life skills."
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {activities.map((activity, index) => (
            <motion.div 
              key={index} 
              variants={fadeUp}
              className="group cursor-pointer"
            >
              <div className={`relative h-64 w-full rounded-[32px] overflow-hidden ${activity.color} p-2 shadow-ambient hover:shadow-ambient-hover transition-shadow duration-300`}>
                <div className="relative w-full h-full rounded-[24px] overflow-hidden">
                  <Image 
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                    <h3 className="text-white font-quicksand font-bold text-xl translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {activity.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full transform translate-y-full z-10">
        <WaveDivider color="#f1ecfa" className="rotate-180" />
      </div>
    </section>
  );
}
