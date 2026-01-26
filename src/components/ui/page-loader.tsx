import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PageLoader({ className }: { className?: string }) {
  return (
    <div className={cn("fixed inset-0 bg-background z-[100] flex items-center justify-center", className)}>
      <div className="loader-logo">
        <Sparkles className="h-16 w-16 text-primary" />
      </div>
    </div>
  );
}
