import { Shield, Mic, FileText, History, Settings, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function PrivacyCenterPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      <header className="border-b border-border pb-6">
        <Link href="/security" className="inline-flex items-center gap-2 text-jansahay-text-secondary hover:text-jansahay-navy text-sm font-medium mb-4 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Security
        </Link>
        <h1 className="text-3xl font-bold text-jansahay-navy tracking-tight mb-2">Privacy Center</h1>
        <p className="text-jansahay-text-secondary">Understand how JANSAHAY protects and uses your data.</p>
      </header>

      <div className="bg-jansahay-blue/5 border border-jansahay-blue/20 rounded-3xl p-6 md:p-8 flex items-start gap-4 shadow-sm">
        <div className="w-12 h-12 rounded-full bg-jansahay-blue/10 flex items-center justify-center shrink-0">
          <Shield className="w-6 h-6 text-jansahay-blue" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-jansahay-navy mb-2">Our Promise</h2>
          <p className="text-jansahay-text-secondary leading-relaxed">
            JANSAHAY is designed to help you, not to harvest your data. We only collect what is strictly necessary to guide you through complex processes.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-bold text-jansahay-navy uppercase tracking-wider text-xs">How your data is used</h3>
        
        <PrivacyCard 
          icon={Mic}
          title="Voice Input"
          use="Used to understand your request naturally."
          retention="Deleted immediately after processing."
        />
        
        <PrivacyCard 
          icon={FileText}
          title="Documents"
          use="Used only when you ask JANSAHAY to analyze a specific document for a process."
          retention="Encrypted at rest. Retained until you delete them."
        />
        
        <PrivacyCard 
          icon={History}
          title="Guidance History"
          use="Used to allow you to continue previous journeys and improve contextual recommendations."
          retention="Retained until you clear your history."
        />
      </div>

      <div className="pt-8 border-t border-border flex justify-center">
        <Link href="/security" className="flex items-center gap-2 bg-white border-2 border-border text-jansahay-navy hover:bg-gray-50 font-bold py-3 px-8 rounded-xl transition-colors shadow-sm">
          <Settings className="w-5 h-5" />
          Manage Data Controls
        </Link>
      </div>
    </div>
  );
}

function PrivacyCard({ icon: Icon, title, use, retention }: any) {
  return (
    <div className="bg-white rounded-3xl border border-border p-6 md:p-8 shadow-sm flex flex-col sm:flex-row gap-6 hover:border-jansahay-blue/30 transition-colors">
      <div className="w-14 h-14 bg-jansahay-bg rounded-2xl flex items-center justify-center shrink-0 text-jansahay-navy">
        <Icon className="w-7 h-7" />
      </div>
      <div className="flex-1 space-y-4">
        <h4 className="text-xl font-bold text-jansahay-navy">{title}</h4>
        <div className="space-y-3">
          <div>
            <span className="text-xs font-bold text-jansahay-text-secondary uppercase tracking-widest block mb-1">Why it is used</span>
            <p className="text-jansahay-text text-sm font-medium">{use}</p>
          </div>
          <div>
            <span className="text-xs font-bold text-jansahay-text-secondary uppercase tracking-widest block mb-1">How long it is retained</span>
            <p className="text-jansahay-text text-sm font-medium">{retention}</p>
          </div>
        </div>
      </div>
      <div className="sm:self-center shrink-0 pt-4 sm:pt-0">
        <Link href="/security" className="text-sm font-semibold text-jansahay-blue hover:underline bg-jansahay-blue/5 px-4 py-2 rounded-xl">
          Manage
        </Link>
      </div>
    </div>
  );
}
