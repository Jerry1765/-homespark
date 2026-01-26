"use client";

import { useRef, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Store, UtensilsCrossed, Paintbrush, Briefcase } from "lucide-react";

const services = [
  {
    icon: Store,
    title: "Business Websites",
    description: "Stunning websites for shops, creators, and startups to build a strong online presence.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant Websites",
    description: "Beautifully designed websites with menus, online ordering, and table reservations.",
  },
  {
    icon: Briefcase,
    title: "Portfolio Websites",
    description: "Showcase your work and skills with a professional and creative online portfolio.",
  },
];

export default function ServicesSection() {
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
      id="services"
      ref={sectionRef}
      className="py-16 md:py-24 bg-secondary opacity-0"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We craft websites tailored to your specific business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group text-center p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
              >
                <CardHeader className="items-center p-0">
                  <div className="bg-primary/20 p-4 rounded-full mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
