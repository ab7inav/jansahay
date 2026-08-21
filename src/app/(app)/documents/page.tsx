"use client";

import { useState } from "react";
import { documentData } from "@/lib/mock-data/documents";
import { FileText, Upload, ShieldCheck, Clock, FileUp, X, Check, Loader2, Lock } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function DocumentsPage() {
  const { t } = useLanguage();
  const [uploadMode, setUploadMode] = useState(false);
  const [uploadStep, setUploadStep] = useState<"idle" | "uploading" | "processing" | "completed">("idle");
  const [progress, setProgress] = useState(0);

  const simulateUpload = () => {
    setUploadStep("uploading");
    
    // Simulate upload progress
    let p = 0;
    const interval = setInterval(() => {
      p += 15;
      if (p >= 100) {
        clearInterval(interval);
        setUploadStep("processing");
        setTimeout(() => setUploadStep("completed"), 3000); // simulate reading & integrity check
      } else {
        setProgress(p);
      }
    }, 400);
  };

  if (uploadMode) {
    return (
      <div className="max-w-2xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-300">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <h2 className="text-2xl font-bold text-jansahay-navy">Add a document</h2>
          <button onClick={() => { setUploadMode(false); setUploadStep("idle"); setProgress(0); }} className="p-2 bg-jansahay-bg rounded-full hover:bg-gray-200 transition-colors">
            <X className="w-5 h-5 text-jansahay-text-secondary" />
          </button>
        </div>

        {uploadStep === "idle" && (
          <div className="space-y-6">
            <div className="bg-white border-2 border-dashed border-jansahay-blue/30 rounded-3xl p-12 text-center hover:bg-jansahay-blue/5 transition-colors cursor-pointer" onClick={simulateUpload}>
              <FileUp className="w-12 h-12 text-jansahay-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-jansahay-navy mb-2">Choose file or Scan</h3>
              <p className="text-sm text-jansahay-text-secondary">Supported: PDF, JPG, PNG up to 10MB</p>
            </div>
            
            <div className="bg-jansahay-green/10 text-jansahay-green rounded-2xl p-4 flex gap-3 text-sm font-medium">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <p>Your documents are encrypted before storage and verified for integrity.</p>
            </div>
          </div>
        )}

        {uploadStep === "uploading" && (
          <div className="bg-white rounded-3xl border border-border p-12 text-center space-y-6 animate-in fade-in">
            <h3 className="text-xl font-bold text-jansahay-navy">Uploading document...</h3>
            <div className="w-full bg-jansahay-bg rounded-full h-3 overflow-hidden">
              <div className="bg-jansahay-blue h-full transition-all duration-300 ease-out" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-sm font-bold text-jansahay-text-secondary">{progress}%</p>
          </div>
        )}

        {uploadStep === "processing" && (
          <div className="bg-white rounded-3xl border border-border p-12 text-center space-y-8 animate-in fade-in">
            <div className="w-16 h-16 relative flex items-center justify-center mx-auto mb-4">
              <div className="absolute inset-0 border-4 border-jansahay-blue/20 rounded-full"></div>
              <Loader2 className="w-8 h-8 text-jansahay-blue animate-spin" />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-3 text-jansahay-green font-medium">
                <Check className="w-4 h-4" /> <span>Reading document...</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-jansahay-green font-medium">
                <Check className="w-4 h-4" /> <span>Extracting information...</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-jansahay-blue font-medium animate-pulse">
                <Loader2 className="w-4 h-4 animate-spin" /> <span>Checking document integrity (SHA-256)...</span>
              </div>
            </div>
          </div>
        )}

        {uploadStep === "completed" && (
          <div className="bg-white rounded-3xl border border-jansahay-green/30 p-10 text-center space-y-6 animate-in zoom-in-95 duration-500 shadow-lg">
            <div className="w-20 h-20 bg-jansahay-green rounded-full flex items-center justify-center mx-auto text-white shadow-md">
              <Check className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-jansahay-navy">Document securely added</h3>
            
            <div className="bg-jansahay-bg rounded-2xl p-6 text-left max-w-sm mx-auto space-y-4">
              <div className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-sm text-jansahay-text-secondary">Name</span>
                <span className="text-sm font-semibold text-jansahay-navy">Aadhaar_Card_Scanned.pdf</span>
              </div>
              <div className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-sm text-jansahay-text-secondary">Type</span>
                <span className="text-sm font-semibold text-jansahay-navy">Identity</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-sm text-jansahay-text-secondary">Status</span>
                <span className="text-sm font-semibold text-jansahay-green flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> Integrity Verified
                </span>
              </div>
            </div>

            <div className="pt-4 flex gap-4 justify-center">
              <button onClick={() => { setUploadMode(false); setUploadStep("idle"); }} className="bg-jansahay-bg hover:bg-gray-200 text-jansahay-navy font-semibold py-3 px-8 rounded-xl transition-colors">
                Done
              </button>
              <Link href="/documents/new-doc-id" className="bg-jansahay-navy hover:bg-jansahay-navy/90 text-white font-semibold py-3 px-8 rounded-xl transition-colors">
                View Document
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-jansahay-navy tracking-tight">{t('docs.title')}</h1>
          <p className="text-jansahay-text-secondary mt-1">{t('docs.subtitle')}</p>
        </div>
        <button 
          onClick={() => setUploadMode(true)}
          className="bg-jansahay-blue hover:bg-jansahay-blue/90 text-white px-5 py-2.5 rounded-xl font-medium transition-colors flex items-center gap-2 w-full md:w-auto justify-center shadow-sm"
        >
          <Upload className="w-5 h-5" />
          {t('docs.upload')}
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {["All", "Identity", "Education", "Income", "Government", "Health"].map((cat, i) => (
          <button key={cat} className={cn("px-5 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-colors border", i === 0 ? "bg-jansahay-navy text-white border-jansahay-navy" : "bg-white text-jansahay-text-secondary border-border hover:border-jansahay-blue/30 hover:text-jansahay-navy")}>
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {documentData.map((doc) => (
          <div key={doc.id} className="bg-white rounded-3xl border border-border p-6 hover:shadow-md hover:border-jansahay-blue/30 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 bg-jansahay-bg rounded-2xl flex items-center justify-center text-jansahay-navy group-hover:bg-jansahay-blue/10 group-hover:text-jansahay-blue transition-colors">
                <FileText className="w-7 h-7" />
              </div>
            </div>
            
            <h3 className="font-bold text-lg text-jansahay-navy mb-1 line-clamp-1">{doc.name}</h3>
            
            <div className="space-y-3 mt-4 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-jansahay-green">
                <ShieldCheck className="w-4 h-4" />
                <span>Integrity verified</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-jansahay-text-secondary">
                <Lock className="w-4 h-4" />
                <span>Protected</span>
              </div>
              <p className="text-xs text-jansahay-text-secondary pt-2 border-t border-border/50">
                Uploaded: {doc.uploadDate}
              </p>
            </div>
            
            <Link href={`/documents/${doc.id}`} className="w-full flex items-center justify-center bg-jansahay-bg hover:bg-gray-100 text-jansahay-navy font-bold py-3 rounded-xl transition-colors text-sm">
              Open
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
