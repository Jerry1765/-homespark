"use client";

import { useRef, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from 'next/link';

const pricingPlans = [
  {
    name: "Starter",
    price: "₹499",
    description: "Perfect for a quick online start.",
    features: ["1 page website", "Mobile responsive", "Contact form"],
    isPopular: false,
  },
  {
    name: "Pro",
    price: "₹1999",
    description: "Ideal for growing businesses.",
    features: ["3–5 pages", "Custom design", "WhatsApp integration"],
    isPopular: true,
  },
  {
    name: "Premium",
    price: "₹3999",
    description: "For a complete online solution.",
    features: ["Full website", "Domain & hosting help", "Basic SEO setup"],
    isPopular: false,
  },
];

export default function PricingSection() {
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
      id="pricing"
      ref={sectionRef}
      className="py-16 md:py-24 bg-secondary opacity-0"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Simple, Transparent Pricing</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Choose the perfect plan for your business. No hidden fees.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "flex flex-col h-full",
                plan.isPopular && "border-primary shadow-lg scale-105"
              )}
            >
              {plan.isPopular && (
                <div className="bg-primary text-primary-foreground text-center py-1.5 text-sm font-semibold rounded-t-lg">
                  Most Popular
                </div>
              )}
              <CardHeader className="items-center text-center">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="text-4xl font-extrabold my-4">{plan.price}</div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full"
                  variant={plan.isPopular ? "default" : "outline"}
                >
                  <Link href="#contact">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
