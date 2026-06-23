"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { floatAnimation } from "@/lib/animations";

export function StarDoodle({ className }: { className?: string }) {
  return (
    <svg className={cn("text-tertiary-container", className)} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 2L24.316 13.284L36.36 15.036L27.64 23.564L29.704 35.564L20 29.8L10.296 35.564L12.36 23.564L3.64 15.036L15.684 13.284L20 2Z" fill="currentColor"/>
    </svg>
  );
}

export function CrownDoodle({ className }: { className?: string }) {
  return (
    <svg className={cn("text-secondary-container", className)} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 30H35V35H5V30ZM5 15L12.5 25L20 5L27.5 25L35 15V25H5V15Z" fill="currentColor"/>
    </svg>
  );
}

export function SwirlDoodle({ className }: { className?: string }) {
  return (
    <svg className={cn("text-primary-container", className)} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20C35 25.5228 30.5228 30 25 30C19.4772 30 15 25.5228 15 20C15 17.2386 17.2386 15 20 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}

interface FloatingDoodleProps {
  type: "star" | "crown" | "swirl";
  className?: string;
  delay?: number;
}

export function FloatingDoodle({ type, className, delay = 0 }: FloatingDoodleProps) {
  return (
    <motion.div
      className={cn("absolute opacity-70 pointer-events-none z-10", className)}
      variants={floatAnimation}
      animate="visible"
      initial="hidden"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '4s',
        animationIterationCount: 'infinite',
        animationName: 'float',
        animationTimingFunction: 'ease-in-out',
        animationDirection: 'alternate'
      }}
    >
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>
      {type === "star" && <StarDoodle className="w-10 h-10" />}
      {type === "crown" && <CrownDoodle className="w-12 h-12" />}
      {type === "swirl" && <SwirlDoodle className="w-10 h-10" />}
    </motion.div>
  );
}
