import { Check, X } from "lucide-react";

interface UnderstandingCardProps {
  text: string;
  onConfirm: () => void;
  onReject: () => void;
}

export function UnderstandingCard({ text, onConfirm, onReject }: UnderstandingCardProps) {
  return (
    <div className="max-w-2xl mx-auto mt-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-jansahay-purple/20 text-center relative overflow-hidden">
        {/* Subtle AI branding */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-jansahay-blue via-jansahay-purple to-jansahay-blue"></div>

        <div className="text-xs font-bold text-jansahay-purple uppercase tracking-widest mb-6">
          What I understood
        </div>
        
        <p className="text-xl md:text-2xl text-jansahay-navy font-medium leading-relaxed mb-8">
          "{text}"
        </p>

        <p className="text-sm text-jansahay-text-secondary mb-6">
          Is that correct?
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button 
            onClick={onConfirm}
            className="flex items-center justify-center gap-2 bg-jansahay-navy hover:bg-jansahay-navy/90 text-white font-medium py-3 px-8 rounded-xl transition-colors shadow-sm"
          >
            <Check className="w-5 h-5" />
            <span>Yes, continue</span>
          </button>
          <button 
            onClick={onReject}
            className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-border text-jansahay-text font-medium py-3 px-8 rounded-xl transition-colors"
          >
            <X className="w-5 h-5 text-jansahay-text-secondary" />
            <span>Change my answer</span>
          </button>
        </div>
      </div>
    </div>
  );
}
