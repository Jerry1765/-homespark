import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import ServicesSection from '@/components/sections/services';
import WhyChooseUsSection from '@/components/sections/why-choose-us';
import PricingSection from '@/components/sections/pricing';
import PortfolioSection from '@/components/sections/portfolio';
import TestimonialsSection from '@/components/sections/testimonials';
import ContactSection from '@/components/sections/contact';
import SectionWaveDivider from '@/components/ui/SectionWaveDivider';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="relative">
          <SectionWaveDivider />
        </div>
        <ServicesSection />
        <WhyChooseUsSection />
        <div className="relative">
          <SectionWaveDivider />
        </div>
        <PricingSection />
        <PortfolioSection />
        <div className="relative">
          <SectionWaveDivider />
        </div>
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
