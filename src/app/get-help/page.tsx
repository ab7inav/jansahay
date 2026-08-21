"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, Mic, ArrowRight } from "lucide-react";
import { serviceCategories } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export default function GetHelpPage() {
  const router = useRouter();
  const [problem, setProblem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (problem.trim()) {
      router.push(`/ask?q=${encodeURIComponent(problem)}`);
    }
  };

  return (
    <div className="min-h-screen bg-jansahay-bg flex flex-col">
      {/* Minimal Header */}
      <header className="h-16 flex items-center px-4 md:px-6 bg-white border-b border-border sticky top-0 z-10">
        <Link href="/" className="flex items-center gap-2 text-jansahay-text-secondary hover:text-jansahay-navy transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium text-sm">Back</span>
        </Link>
        
        <div className="mx-auto font-bold text-jansahay-navy tracking-tight">
          JANSAHAY<span className="text-jansahay-purple font-medium"> AI</span>
        </div>
        
        <div className="w-[60px]" aria-hidden="true" /> {/* Spacer for centering */}
      </header>

      <main className="flex-grow flex flex-col items-center pt-12 md:pt-20 px-4 md:px-6 pb-24">
        <div className="w-full max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-jansahay-navy text-center mb-10 tracking-tight">
            What do you need help with?
          </h1>

          {/* Main Problem Input */}
          <form onSubmit={handleSubmit} className="relative flex items-center bg-white rounded-2xl shadow-sm border border-jansahay-blue/20 p-2 focus-within:ring-2 focus-within:ring-jansahay-blue/50 focus-within:border-jansahay-blue transition-all mb-4">
            <input
              type="text"
              autoFocus
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              className="flex-1 bg-transparent px-4 py-4 text-lg md:text-xl outline-none placeholder:text-jansahay-text-secondary/60 text-jansahay-text"
              placeholder="Describe your problem..."
              aria-label="Describe your problem"
            />
            <button type="submit" disabled={!problem.trim()} className="bg-jansahay-navy hover:bg-jansahay-navy/90 text-white p-4 rounded-xl transition-colors flex items-center justify-center aspect-square disabled:opacity-50" aria-label="Submit problem">
              <ArrowRight className="w-6 h-6" />
            </button>
          </form>

          <div className="flex items-center justify-center mb-12">
            <button className="flex items-center gap-2 text-jansahay-text-secondary hover:text-jansahay-blue transition-colors text-sm font-medium py-2 px-4 rounded-full hover:bg-jansahay-blue/5">
              <Mic className="w-4 h-4" />
              <span>Use Voice Instead</span>
            </button>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-border flex-1"></div>
            <span className="text-sm font-medium text-jansahay-text-secondary uppercase tracking-wider">Or select a category</span>
            <div className="h-px bg-border flex-1"></div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {serviceCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => router.push('/dashboard')}
                  className={cn(
                    "flex flex-col items-center justify-center text-center p-4 md:p-6 rounded-2xl border bg-white transition-all hover:shadow-md hover:-translate-y-1 group",
                    category.urgent ? "border-jansahay-red/20 hover:border-jansahay-red/40" : "border-border hover:border-jansahay-blue/30"
                  )}
                >
                  <div className={cn("w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110", category.color)}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="font-semibold text-jansahay-navy text-sm md:text-base group-hover:text-jansahay-blue transition-colors">
                    {category.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
