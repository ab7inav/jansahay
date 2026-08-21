"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SaarthiSVG } from "@/components/saarthi/SaarthiSVG";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ProblemInput } from "@/components/problem-input/ProblemInput";

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-jansahay-blue/10 via-jansahay-bg to-jansahay-bg"></div>
      
      <div className="container mx-auto px-4 md:px-6 text-center flex flex-col items-center">
        <div className="mb-6">
          <SaarthiSVG size={140} />
        </div>
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-jansahay-navy mb-6">
              {t('hero.title').split('. ').map((part: string, i: number, arr: string[]) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && '. '}
                  {i === 0 && <br className="hidden md:block" />}
                </span>
              ))}
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-jansahay-text-secondary max-w-2xl mx-auto mb-10">
              {t('hero.subtitle')}
            </p>
          </motion.div>

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
