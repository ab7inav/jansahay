import { JourneyStep } from "@/types";
import { Check, ChevronDown, ExternalLink, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ActionCardProps {
  step: JourneyStep;
  stepNumber: number;
  totalSteps: number;
}

export function ActionCard({ step, stepNumber, totalSteps }: ActionCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl md:rounded-3xl shadow-md border border-jansahay-blue/20 overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
      <div className="p-6 md:p-8">
        <div className="text-xs font-bold text-jansahay-text-secondary uppercase tracking-widest mb-3">
          Step {stepNumber} of {totalSteps}
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-jansahay-navy mb-4">
          {step.title}
        </h2>
        
        {step.description && (
          <p className="text-jansahay-text text-lg leading-relaxed mb-6">
            {step.description}
          </p>
        )}

        {step.requirements && step.requirements.length > 0 && (
          <div className="bg-jansahay-bg rounded-xl p-5 mb-8">
            <h4 className="font-semibold text-jansahay-navy mb-3">You may need:</h4>
            <ul className="space-y-3">
              {step.requirements.map((req, i) => (
                <li key={i} className="flex items-center gap-3 text-jansahay-text">
                  {i < 2 ? (
                    <div className="bg-jansahay-green/20 text-jansahay-green rounded-full p-1">
                      <Check className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="bg-white border-2 border-border rounded-full w-6 h-6"></div>
                  )}
                  <span className={cn(i < 2 ? "line-through text-jansahay-text-secondary" : "")}>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button className="w-full bg-jansahay-navy hover:bg-jansahay-navy/90 text-white font-semibold text-lg py-4 px-6 rounded-xl transition-all active:scale-[0.98] shadow-sm">
          {step.actionLabel || "Continue"}
        </button>
      </div>

      {/* Progressive Disclosure Section */}
      <div className="border-t border-border bg-gray-50/50">
        <button 
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between p-4 md:px-8 text-jansahay-text-secondary hover:text-jansahay-navy transition-colors font-medium text-sm"
        >
          <span>Why this matters?</span>
          <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", expanded && "rotate-180")} />
        </button>
        
        <div className={cn(
          "overflow-hidden transition-all duration-300",
          expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="p-4 md:px-8 pb-8 pt-0 space-y-4">
            <p className="text-sm text-jansahay-text leading-relaxed">
              {step.whyItMatters}
            </p>
            
            {step.sourceName && (
              <div className="bg-white rounded-lg border border-border p-3 flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-jansahay-green" />
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-jansahay-navy uppercase tracking-wider">Official Source</span>
                    <span className="text-sm text-jansahay-text-secondary">{step.sourceName}</span>
                  </div>
                </div>
                {step.sourceUrl && (
                  <a href={step.sourceUrl} className="text-jansahay-blue hover:underline flex items-center gap-1 text-sm font-medium">
                    View <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
