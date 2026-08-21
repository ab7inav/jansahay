import { ArrowLeft, ShieldCheck, Search, Users, Activity } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-10 animate-in fade-in duration-500 pb-12">
      <header className="border-b border-border pb-6 text-center md:text-left">
        <Link href="/profile" className="inline-flex items-center gap-2 text-jansahay-text-secondary hover:text-jansahay-navy text-sm font-medium mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Profile
        </Link>
        <h1 className="text-4xl font-bold text-jansahay-navy tracking-tight mb-2">About JANSAHAY</h1>
        <p className="text-xl text-jansahay-text-secondary">Simplifying civic processes for everyone.</p>
      </header>

      <div className="prose prose-lg text-jansahay-text leading-relaxed">
        <p>
          JANSAHAY exists to help ordinary people navigate difficult real-world problems. Whether you are dealing with a stopped pension, a legal notice, or a lost document, our goal is to provide clarity.
        </p>

        <h2 className="text-2xl font-bold text-jansahay-navy mt-10 mb-4">Why Trust JANSAHAY?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
          <TrustCard 
            icon={Search} 
            title="Transparent Sources" 
            desc="We base our guidance on verified official information and always link to the original source." 
          />
          <TrustCard 
            icon={ShieldCheck} 
            title="Clear Boundaries" 
            desc="We provide general guidance, not guaranteed legal or medical advice. We know when to refer you to an expert." 
          />
          <TrustCard 
            icon={Users} 
            title="Privacy First" 
            desc="Your documents are encrypted. We don't harvest your data for advertising." 
          />
          <TrustCard 
            icon={Activity} 
            title="Honest AI" 
            desc="Our AI will tell you when it doesn't know the answer or needs more information to guide you safely." 
          />
        </div>

        <h2 className="text-2xl font-bold text-jansahay-navy mt-10 mb-4">How It Works</h2>
        <p>
          JANSAHAY uses artificial intelligence to read complex government procedures and translate them into a personalized, step-by-step action plan.
        </p>
        <p className="bg-jansahay-blue/5 p-6 rounded-2xl border border-jansahay-blue/20 text-jansahay-navy font-medium">
          JANSAHAY helps you understand processes. It does not pretend to replace the authorities responsible for them. We are an independent civic-tech platform designed for public good.
        </p>
      </div>
    </div>
  );
}

function TrustCard({ icon: Icon, title, desc }: any) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-border shadow-sm">
      <div className="w-12 h-12 bg-jansahay-bg rounded-2xl flex items-center justify-center text-jansahay-navy mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-bold text-jansahay-navy mb-2">{title}</h3>
      <p className="text-sm text-jansahay-text-secondary">{desc}</p>
    </div>
  );
}
