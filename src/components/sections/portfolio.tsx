"use client";

import { useRef, useEffect } from 'react';
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowUpRight } from 'lucide-react';

const portfolioProjects = PlaceHolderImages.filter(img => img.id.startsWith('portfolio'));

export default function PortfolioSection() {
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
      id="portfolio"
      ref={sectionRef}
      className="py-16 md:py-24 opacity-0"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Recent Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Here are a few projects we've proudly delivered.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden relative cursor-pointer"
            >
              <CardContent className="p-0">
                <Image
                  src={project.imageUrl}
                  alt={project.description}
                  data-ai-hint={project.imageHint}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-lg font-semibold text-white">
                    {project.description}
                  </p>
                  <div className="flex items-center text-primary mt-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span>View Project</span>
                      <ArrowUpRight className="ml-1 h-4 w-4"/>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
