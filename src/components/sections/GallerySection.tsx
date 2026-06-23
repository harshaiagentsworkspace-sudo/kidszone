"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import Image from "next/image";

const categories = ["All", "Events", "Classroom", "Play", "Art"];

const categoriesWithoutAll = ["Events", "Classroom", "Play", "Art"];

const imageFiles = [
  "1.jpeg", "10.jpeg", "11.jpeg", "12.jpeg", "14.jpeg", "15.jpeg", "16.jpeg", "17.jpeg", "18.jpeg", "19.jpeg",
  "2.jpeg", "20.jpeg", "21.jpeg", "22.jpeg", "23.jpeg", "24.jpeg", "25.jpeg", "26.jpeg", "27.jpeg", "28.jpeg",
  "29.jpeg", "3.jpeg", "30.jpeg", "31.jpeg", "32.jpeg", "33.jpeg", "34.jpeg", "35.jpeg", "37.jpeg", "4.jpeg",
  "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg"
];

const images = imageFiles.map((file, index) => ({
  id: index + 1,
  category: categoriesWithoutAll[index % categoriesWithoutAll.length],
  src: `/gallery/${file}`
}));

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = images.filter(
    (img) => activeCategory === "All" || img.category === activeCategory
  );

  return (
    <section className="py-24 bg-surface relative">
      <div className="container mx-auto max-w-[1280px] px-6">
        <SectionHeading 
          title="Our Gallery" 
          subtitle="Glimpses of joy, learning, and memorable moments at Kids Zone."
        />

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-ambient"
                  : "bg-white text-foreground/70 hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className={`relative h-[280px] rounded-2xl overflow-hidden shadow-ambient group cursor-pointer bg-white p-3 border-[6px] border-white transform transition-transform duration-500 hover:z-10 ${
                  image.id % 3 === 0 ? "hover:-rotate-2" : image.id % 2 === 0 ? "hover:rotate-2" : "hover:-rotate-1"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-lumina-surface to-pastel-blue opacity-50 pointer-events-none" />
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={image.src}
                    alt={`Gallery ${image.category}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 border-2 border-lumina-primary/10 rounded-2xl pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
