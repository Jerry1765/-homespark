'use client';

import { useState, useEffect } from 'react';
import PageLoader from '@/components/ui/page-loader';
import { cn } from '@/lib/utils';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setHiding(true);
    }, 800); 
    
    const unmountTimer = setTimeout(() => {
      setLoading(false);
    }, 1100); 

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(unmountTimer);
    }
  }, []);

  return (
    <>
      {loading && <PageLoader className={cn(hiding && 'animate-out fade-out')} />}
      <div className={cn('transition-opacity duration-500', loading ? 'opacity-0' : 'opacity-100')}>
        {children}
      </div>
    </>
  );
}
