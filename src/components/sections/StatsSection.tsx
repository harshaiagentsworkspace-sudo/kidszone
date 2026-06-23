"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { fadeUp } from "@/lib/animations";

function Counter({ from = 0, to, duration = 2 }: { from?: number; to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(from, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (current) => Math.round(current).toString());

  useEffect(() => {
    if (inView) {
      spring.set(to);
    }
  }, [inView, spring, to]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const stats = [
  { label: "Happy Children", value: 500, suffix: "+", color: "text-primary" },
  { label: "Expert Teachers", value: 25, suffix: "+", color: "text-secondary" },
  { label: "Years Experience", value: 15, suffix: "+", color: "text-tertiary" },
  { label: "Awards Won", value: 10, suffix: "+", color: "text-accent" },
];

export function StatsSection() {
  return (
    <section className="pt-32 pb-16 lg:pt-48 lg:pb-16 bg-white relative">
      <div className="container mx-auto max-w-[1280px] px-6 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-border/50">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="flex flex-col items-center justify-center h-full text-center px-2 lg:px-4 py-4 lg:py-0"
            >
              <div className={`font-quicksand font-bold text-4xl lg:text-5xl mb-2 flex items-center justify-center ${stat.color}`}>
                <Counter to={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-foreground/70 font-medium text-sm lg:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
