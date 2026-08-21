"use client";

import { ArrowLeft, Search, Mail, MessageSquareWarning } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HelpPage() {
  const [query, setQuery] = useState("");

  const faqs = [
    "How does JANSAHAY work?",
    "How is my information protected?",
    "How do I upload a document?",
    "How do I delete my data?",
    "How do I contact the relevant authority?"
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-10 animate-in fade-in duration-500 pb-12">
      <header className="border-b border-border pb-6 text-center md:text-left">
        <Link href="/profile" className="inline-flex items-center gap-2 text-jansahay-text-secondary hover:text-jansahay-navy text-sm font-medium mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Profile
        </Link>
        <h1 className="text-4xl font-bold text-jansahay-navy tracking-tight mb-2">How can we help?</h1>
      </header>

      <div className="relative flex items-center bg-white rounded-2xl shadow-sm border border-jansahay-blue/20 p-2 focus-within:ring-2 focus-within:ring-jansahay-blue/50 focus-within:border-jansahay-blue transition-all">
        <Search className="w-6 h-6 text-jansahay-text-secondary ml-3" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent px-4 py-4 text-lg outline-none placeholder:text-jansahay-text-secondary/60 text-jansahay-text"
          placeholder="Search for help..."
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-sm font-bold text-jansahay-text-secondary uppercase tracking-widest px-2">Popular Questions</h2>
        <div className="bg-white rounded-3xl shadow-sm border border-border overflow-hidden divide-y divide-border/50">
          {faqs.map(faq => (
            <button key={faq} className="w-full text-left p-6 font-bold text-jansahay-navy hover:bg-gray-50 hover:text-jansahay-blue transition-colors">
              {faq}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
        <div className="bg-jansahay-blue/5 border border-jansahay-blue/20 rounded-3xl p-6 text-center hover:bg-jansahay-blue/10 transition-colors cursor-pointer">
          <Mail className="w-8 h-8 text-jansahay-blue mx-auto mb-4" />
          <h3 className="font-bold text-jansahay-navy mb-1">Contact Support</h3>
          <p className="text-sm text-jansahay-text-secondary">Get help from our team</p>
        </div>
        <div className="bg-white border border-border rounded-3xl p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer shadow-sm">
          <MessageSquareWarning className="w-8 h-8 text-jansahay-navy mx-auto mb-4" />
          <h3 className="font-bold text-jansahay-navy mb-1">Report a Problem</h3>
          <p className="text-sm text-jansahay-text-secondary">Found incorrect information?</p>
        </div>
      </div>
    </div>
  );
}
