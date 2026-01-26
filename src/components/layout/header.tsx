"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="#home" passHref legacyBehavior>
            <a onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-2">
              <Sparkles className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold tracking-tight text-foreground">
                Site Spark
              </span>
            </a>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.href} passHref legacyBehavior>
                <a onClick={(e) => handleLinkClick(e, link.href)} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                </a>
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <Link href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Get Started</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button onClick={toggleMenu} variant="ghost" size="icon">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm">
          <nav className="flex flex-col items-center gap-4 p-4">
            {navLinks.map((link) => (
               <Link href={link.href} key={link.href} passHref legacyBehavior>
                <a onClick={(e) => handleLinkClick(e, link.href)} className="text-base font-medium text-foreground transition-colors hover:text-primary">
                    {link.label}
                </a>
              </Link>
            ))}
            <Button asChild className="w-full mt-4">
              <Link href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Get Started</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
