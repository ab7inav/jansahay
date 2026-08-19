"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-jansahay-surface/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-jansahay-navy tracking-tight">JANSAHAY<span className="text-jansahay-purple font-medium"> AI</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="text-sm font-medium text-jansahay-text-secondary hover:text-jansahay-navy transition-colors">
            How it works
          </Link>
          <Link href="#services" className="text-sm font-medium text-jansahay-text-secondary hover:text-jansahay-navy transition-colors">
            Services
          </Link>
          <Link href="#safety" className="text-sm font-medium text-jansahay-text-secondary hover:text-jansahay-navy transition-colors">
            Safety
          </Link>
          <Link href="#about" className="text-sm font-medium text-jansahay-text-secondary hover:text-jansahay-navy transition-colors">
            About
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link href="/get-help" className={cn(buttonVariants(), "bg-jansahay-navy hover:bg-jansahay-navy/90 text-white rounded-full px-6")}>
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 -mr-2 text-jansahay-text" aria-label="Menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
}
