import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"
import PageWrapper from '@/components/PageWrapper';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Site Spark | We Build Websites That Grow Your Business',
  description: 'Professional, fast and affordable websites for small businesses in India. We provide website design services to restaurants, shops, creators, and startups.',
  keywords: 'website design, small business website, affordable website India, web development, restaurant website, portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        <PageWrapper>
          {children}
        </PageWrapper>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
