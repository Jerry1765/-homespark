"use client";

import { useRef, useEffect, useState } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Smartphone, LifeBuoy } from "lucide-react";
import { cn } from '@/lib/utils';

const trustBadges = [
  { icon: Zap, text: "Fast Delivery (24-72 hrs)" },
  { icon: Smartphone, text: "Mobile Friendly" },
  { icon: LifeBuoy, text: "Free Support" },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

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

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const x = (clientX - window.innerWidth / 2) / 30;
      const y = (clientY - window.innerHeight / 2) / 30;

      if (blob1Ref.current) {
        blob1Ref.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      if (blob2Ref.current) {
        const x2 = (clientX - window.innerWidth / 2) / -60;
        const y2 = (clientY - window.innerHeight / 2) / -60;
        blob2Ref.current.style.transform = `translate(${x2}px, ${y2}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden opacity-0"
    >
      <div ref={blob1Ref} className="absolute top-1/4 left-1/4 transition-transform duration-500 ease-out">
        <div className="blob -z-10 opacity-30" />
      </div>
      <div ref={blob2Ref} className="absolute top-1/2 right-1/4 transition-transform duration-500 ease-out">
        <div className="blob -z-10 opacity-20" style={{background: '#a28cfe', animationDelay: '-5s'}} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg p-8 md:p-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            We Build Websites
            <br />
            That <span className="text-primary gradient-underline">Grow Your Business</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Professional, fast and affordable websites for small businesses in India.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" asChild className="btn-cta">
              <Link href="#contact">
                Get Your Website <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#pricing">View Pricing</Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-4 w-full max-w-4xl">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className="flex items-center justify-center gap-2 text-muted-foreground animate-fade-in" style={{animationDelay: `${200 * (index + 1)}ms`}}>
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
