"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";
import { Loader2 } from "lucide-react";

const categories = ["All", "Events", "Classrooms", "Playground", "Activities"];

type GalleryImage = {
  id: string;
  created_at: string;
  url: string;
  title: string | null;
  category: string;
};

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  const supabase = createClient();

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching gallery images:', error);
    } else {
      setImages(data || []);
    }
    setLoading(false);
  };

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

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
          </div>
        ) : images.length === 0 ? (
          <div className="text-center text-gray-500 py-20">
            <p className="text-lg">No images in the gallery yet.</p>
          </div>
        ) : (
          /* Grid */
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className={`relative h-[280px] rounded-2xl overflow-hidden shadow-ambient group cursor-pointer bg-white p-3 border-[6px] border-white transform transition-transform duration-500 hover:z-10 ${
                    index % 3 === 0 ? "hover:-rotate-2" : index % 2 === 0 ? "hover:rotate-2" : "hover:-rotate-1"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-lumina-surface to-pastel-blue opacity-50 pointer-events-none" />
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-100">
                    <Image
                      src={image.url}
                      alt={image.title || `Gallery image in ${image.category}`}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 border-2 border-lumina-primary/10 rounded-2xl pointer-events-none" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
