"use client";

import { useRef, useEffect } from 'react';
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Restaurant Owner",
    review: "Site Spark transformed our online presence. Our new website is beautiful and our online orders have doubled! The process was fast and easy.",
    avatarId: "user-1",
  },
  {
    name: "Rohan Patel",
    role: "Startup Founder",
    review: "The team delivered a professional and sleek website in just two days. Their pricing is unbeatable for the quality you get. Highly recommended!",
    avatarId: "user-2",
  },
  {
    name: "Anjali Mehta",
    role: "Digital Artist",
    review: "I'm in love with my new portfolio website. It perfectly captures my style and has helped me attract new clients. The support team was also very helpful.",
    avatarId: "user-3",
  },
  {
    name: "Vikram Singh",
    role: "Local Shop Owner",
    review: "Getting my shop online was a breeze with Site Spark. They handled everything and now I can sell my products to a wider audience. Fantastic service!",
    avatarId: "user-1",
  }
];

const userImages = PlaceHolderImages.filter(img => img.id.startsWith('user'));

export default function TestimonialsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const autoplayPlugin = useRef(
      Autoplay({ delay: 4000, stopOnInteraction: true })
    );

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
      id="testimonials"
      ref={sectionRef}
      className="py-16 md:py-24 bg-secondary opacity-0"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We're proud to have happy clients across various industries.
          </p>
        </div>
        
        <Carousel
          plugins={[autoplayPlugin.current]}
          className="w-full max-w-6xl mx-auto testimonial-carousel"
          onMouseEnter={autoplayPlugin.current.stop}
          onMouseLeave={autoplayPlugin.current.play}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const avatar = userImages.find(img => img.id === testimonial.avatarId);
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4 h-full">
                    <Card className="flex flex-col justify-between h-full">
                      <CardContent className="p-6">
                        <p className="text-muted-foreground mb-6 h-32">"{testimonial.review}"</p>
                        <div className="flex items-center">
                          <Avatar>
                            {avatar && <AvatarImage src={avatar.imageUrl} alt={testimonial.name} data-ai-hint={avatar.imageHint} />}
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="ml-4">
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>

      </div>
    </section>
  );
}
