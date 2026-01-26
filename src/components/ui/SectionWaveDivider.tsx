import { cn } from "@/lib/utils";

export default function SectionWaveDivider({ className }: { className?: string; }) {
  return (
    <div className={cn("absolute inset-x-0 -top-1 w-full h-20 md:h-24", className)}>
      <div className="h-full w-full bg-transparent text-secondary">
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1440,100H0V0c0,0,200,50,720,50S1440,0,1440,0V100z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
