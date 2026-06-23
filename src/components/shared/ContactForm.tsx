"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="bg-pastel-green/20 border-2 border-pastel-green p-8 rounded-3xl text-center space-y-4 h-full flex flex-col justify-center">
        <div className="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
          🎉
        </div>
        <h3 className="font-quicksand font-bold text-2xl text-foreground">Thank You!</h3>
        <p className="text-foreground/70">Your message has been received. Our admissions team will get back to you within 24 hours.</p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mt-4">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="parentName" className="text-sm font-bold ml-2">Parent&apos;s Name <span className="text-destructive">*</span></Label>
          <Input id="parentName" required placeholder="John Doe" className="h-14 rounded-2xl bg-surface-container border-transparent focus-visible:ring-primary focus-visible:bg-white transition-all shadow-sm" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="childName" className="text-sm font-bold ml-2">Child&apos;s Name</Label>
          <Input id="childName" placeholder="Leo Doe" className="h-14 rounded-2xl bg-surface-container border-transparent focus-visible:ring-primary focus-visible:bg-white transition-all shadow-sm" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-bold ml-2">Email Address <span className="text-destructive">*</span></Label>
          <Input id="email" type="email" required placeholder="john@example.com" className="h-14 rounded-2xl bg-surface-container border-transparent focus-visible:ring-primary focus-visible:bg-white transition-all shadow-sm" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-bold ml-2">Phone Number <span className="text-destructive">*</span></Label>
          <Input id="phone" type="tel" required placeholder="+1 (555) 000-0000" className="h-14 rounded-2xl bg-surface-container border-transparent focus-visible:ring-primary focus-visible:bg-white transition-all shadow-sm" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="program" className="text-sm font-bold ml-2">Interested Program</Label>
        <select id="program" className="flex h-14 w-full rounded-2xl bg-surface-container px-3 py-2 text-sm shadow-sm transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:bg-white border-transparent">
          <option value="">Select a program...</option>
          <option value="playgroup">Play Group (2-3 Yrs)</option>
          <option value="nursery">Nursery (3-4 Yrs)</option>
          <option value="juniorkg">Junior KG (4-5 Yrs)</option>
          <option value="seniorkg">Senior KG (5-6 Yrs)</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-bold ml-2">Message <span className="text-destructive">*</span></Label>
        <textarea 
          id="message" 
          required 
          placeholder="How can we help you?"
          className="flex min-h-[120px] w-full rounded-2xl bg-surface-container px-4 py-3 text-sm shadow-sm transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:bg-white border-transparent resize-none"
        />
      </div>

      <Button type="submit" size="lg" className="w-full h-14 text-lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
