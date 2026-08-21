"use client";

import { ArrowLeft, Download, Trash2, Share2, ShieldCheck, FileText, Fingerprint, Info, Lock } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { documentData } from "@/lib/mock-data/documents";
import { cn } from "@/lib/utils";

export default function DocumentPreviewPage() {
  const params = useParams();
  const id = params.id as string;
  const doc = documentData.find(d => d.id === id) || documentData[0]; // mock fallback
  
  const [showTechDetails, setShowTechDetails] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <Link href="/documents" className="inline-flex items-center gap-2 text-jansahay-text-secondary hover:text-jansahay-navy text-sm font-medium mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Documents
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-jansahay-bg rounded-xl flex items-center justify-center text-jansahay-navy shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-jansahay-navy tracking-tight">{doc.name}</h1>
              <div className="flex items-center gap-3 mt-1">
                <span className="flex items-center gap-1 text-xs font-semibold text-jansahay-green bg-jansahay-green/10 px-2 py-1 rounded-full">
                  <Lock className="w-3 h-3" /> Protected
                </span>
                <span className="text-xs text-jansahay-text-secondary">Uploaded {doc.uploadDate}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-3 text-jansahay-text-secondary hover:bg-jansahay-bg rounded-xl transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="p-3 text-jansahay-text-secondary hover:bg-jansahay-bg rounded-xl transition-colors">
            <Download className="w-5 h-5" />
          </button>
          <button className="p-3 text-jansahay-red hover:bg-jansahay-red/10 rounded-xl transition-colors">
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="w-full aspect-[1/1.4] bg-gray-100 rounded-3xl border-2 border-dashed border-border flex flex-col items-center justify-center text-jansahay-text-secondary">
            <FileText className="w-16 h-16 mb-4 opacity-20" />
            <p>Secure Document Preview</p>
            <p className="text-sm opacity-60">Rendering PDF securely in memory</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-border p-6 shadow-sm">
            <h3 className="font-bold text-jansahay-navy flex items-center gap-2 mb-6">
              <ShieldCheck className="w-5 h-5 text-jansahay-green" />
              Document Security
            </h3>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-3 text-sm text-jansahay-text font-medium">
                <CheckIcon /> Encrypted at rest
              </li>
              <li className="flex items-center gap-3 text-sm text-jansahay-text font-medium">
                <CheckIcon /> Integrity verified
              </li>
              <li className="flex items-center gap-3 text-sm text-jansahay-text font-medium">
                <CheckIcon /> Securely stored
              </li>
            </ul>

            <div className="bg-jansahay-bg rounded-xl p-4 border border-border/50">
              <div className="flex items-center gap-2 mb-2 text-jansahay-text-secondary">
                <Fingerprint className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Integrity Fingerprint</span>
              </div>
              <p className="text-xs font-mono text-jansahay-navy break-all bg-white p-2 rounded-lg border border-border/50">
                SHA-256<br/><br/>
                a7f8e9b4c2d1e0f3...92bc7a6b5c4d3e2f1
              </p>
            </div>

            <button 
              onClick={() => setShowTechDetails(!showTechDetails)}
              className="mt-4 text-xs font-semibold text-jansahay-blue hover:underline w-full text-center"
            >
              {showTechDetails ? "Hide technical details" : "Show technical details"}
            </button>

            {showTechDetails && (
              <div className="mt-4 bg-jansahay-blue/5 p-4 rounded-xl border border-jansahay-blue/10 animate-in slide-in-from-top-2 duration-300">
                <p className="text-xs text-jansahay-text-secondary leading-relaxed mb-4">
                  SHA-256 creates a unique fingerprint of the document. If the document changes even slightly, its fingerprint will completely change.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-jansahay-text-secondary">Algorithm:</span>
                    <span className="font-medium text-jansahay-navy">SHA-256</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-jansahay-text-secondary">Purpose:</span>
                    <span className="font-medium text-jansahay-navy">Integrity Check</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-jansahay-blue/5 rounded-2xl p-5 border border-jansahay-blue/10 flex gap-4">
            <Info className="w-5 h-5 text-jansahay-blue shrink-0 mt-0.5" />
            <p className="text-xs text-jansahay-text-secondary leading-relaxed">
              <strong>Encryption protects confidentiality.</strong> Hashing helps verify that your document hasn't been tampered with.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-jansahay-green/20 text-jansahay-green flex items-center justify-center shrink-0">
      <ShieldCheck className="w-3 h-3" />
    </div>
  );
}
