"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FloatingDoodle } from "@/components/shared/FloatingDoodles";

const faqs = [
  {
    question: "What is the admission process?",
    answer: "Our admission process is simple. First, schedule a campus tour or fill out the online inquiry form. Then, we will arrange a brief interaction session with the child, followed by the submission of required documents and fee payment."
  },
  {
    question: "What are the school timings?",
    answer: "Timings vary by program. Play Group and Nursery run from 9:00 AM to 1:00 PM, while Junior and Senior KG run from 8:30 AM to 1:30 PM. We also offer extended daycare facilities upon request."
  },
  {
    question: "Do you provide meals?",
    answer: "Yes, we provide fresh, nutritious, and balanced meals prepared in our hygienic campus kitchen. Our menu is designed by a child nutritionist and we cater to specific dietary requirements if informed in advance."
  },
  {
    question: "What is the teacher-student ratio?",
    answer: "We maintain a strict 1:10 teacher-student ratio for older classes and 1:8 for Play Group to ensure personalized attention and care for every child."
  },
  {
    question: "How do you ensure campus safety?",
    answer: "Safety is our top priority. We have 24/7 CCTV surveillance, restricted access control, trained security personnel, and child-safe infrastructure throughout the campus."
  }
];

export function FAQSection() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <FloatingDoodle type="swirl" className="top-20 left-10" delay={0.5} />
      <FloatingDoodle type="star" className="bottom-20 right-10" delay={1.5} />
      
      <div className="container mx-auto max-w-[800px] px-6">
        <SectionHeading 
          title="Frequently Asked Questions" 
        />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="mt-12 bg-white p-8 rounded-[32px] shadow-ambient"
        >
          {/* @ts-expect-error type missing */}
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50 py-2">
                <AccordionTrigger className="font-quicksand font-bold text-lg hover:text-primary hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
