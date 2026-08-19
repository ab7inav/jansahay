import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-jansahay-bg pt-20 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-jansahay-navy rounded-3xl p-8 md:p-12 text-center text-white mb-16 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-jansahay-blue/20 rounded-full translate-y-1/3 -translate-x-1/4"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't know where to start?</h2>
            <Link href="/get-help" className={cn(buttonVariants({ size: "lg" }), "bg-white text-jansahay-navy hover:bg-white/90 rounded-full px-8 h-12 text-base font-semibold")}>
              Ask JANSAHAY
            </Link>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-jansahay-navy tracking-tight">JANSAHAY<span className="text-jansahay-purple font-medium"> AI</span></span>
            </Link>
            <p className="text-sm text-jansahay-text-secondary mt-2">
              Your problem. Your next step.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link href="/help" className="text-sm font-medium text-jansahay-text-secondary hover:text-jansahay-navy transition-colors">
              Help
            </Link>
            <Link href="#safety" className="text-sm font-medium text-jansahay-text-secondary hover:text-jansahay-navy transition-colors">
              Safety
            </Link>
            <Link href="/privacy" className="text-sm font-medium text-jansahay-text-secondary hover:text-jansahay-navy transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm font-medium text-jansahay-text-secondary hover:text-jansahay-navy transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="text-sm font-medium text-jansahay-text-secondary hover:text-jansahay-navy transition-colors">
              Contact
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/60 text-center md:text-left text-xs text-jansahay-text-secondary">
          &copy; {new Date().getFullYear()} JANSAHAY AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
