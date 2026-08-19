import { ProblemInput } from "@/components/problem-input/ProblemInput";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-jansahay-blue/10 via-jansahay-bg to-jansahay-bg"></div>
      
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-jansahay-navy max-w-3xl mx-auto leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
          Having trouble with something? <br className="hidden sm:block" />
          <span className="text-jansahay-blue">Let's find your next step.</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-jansahay-text-secondary max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-both">
          Tell JANSAHAY what happened. We'll help you understand the process, documents and next steps.
        </p>

        <ProblemInput />

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
          <Link href="/get-help" className={cn(buttonVariants({ size: "lg" }), "rounded-full bg-jansahay-navy hover:bg-jansahay-navy/90 text-white px-8 h-12 w-full sm:w-auto text-base")}>
            Get Help
          </Link>
          <Link href="#how-it-works" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full border-border bg-white hover:bg-gray-50 text-jansahay-text px-8 h-12 w-full sm:w-auto text-base")}>
            How it works
          </Link>
        </div>
      </div>
    </section>
  );
}
