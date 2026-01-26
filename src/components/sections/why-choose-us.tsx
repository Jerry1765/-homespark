"use client";

import { useRef, useEffect } from 'react';
import { CheckCircle2, Zap, Smartphone, Search, CircleDollarSign, LifeBuoy } from "lucide-react";

const benefits = [
  { icon: Zap, text: "Fast Delivery" },
  { icon: Smartphone, text: "Mobile-friendly design" },
  { icon: Search, text: "SEO optimized" },
  { icon: CircleDollarSign, text: "Affordable pricing" },
  { icon: LifeBuoy, text: "Free support" },
];

export default function WhyChooseUsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            entries[0].target.classList.add('fade-up');
            observer.unobserve(entries[0].target);
          }
        },
        { threshold: 0.1 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);

  return (
    <section 
      id="why-us"
      ref={sectionRef}
      className="py-16 md:py-24 opacity-0"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We are dedicated to providing the best value and results for your business.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                <Icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span className="text-lg font-medium">{benefit.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
