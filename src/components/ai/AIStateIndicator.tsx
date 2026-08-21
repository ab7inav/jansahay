import { AIState } from "@/types/ai";
import { Loader2, Search, BrainCircuit, FileSearch, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface AIStateIndicatorProps {
  state: AIState;
}

export function AIStateIndicator({ state }: AIStateIndicatorProps) {
  if (state === "IDLE" || state === "READY") return null;

  const stateConfig = {
    LISTENING: { icon: MicPulse, text: "Listening...", color: "text-jansahay-blue" },
    PROCESSING: { icon: BrainCircuit, text: "Understanding your problem...", color: "text-jansahay-purple" },
    RESEARCHING: { icon: Search, text: "Checking relevant information...", color: "text-jansahay-blue" },
    PLANNING: { icon: Loader2, text: "Preparing your next steps...", color: "text-jansahay-navy" },
    DOCUMENT_PROCESSING: { icon: FileSearch, text: "JANSAHAY is reviewing the document...", color: "text-jansahay-purple" },
    ERROR: { icon: AlertTriangle, text: "We couldn't complete that right now.", color: "text-jansahay-red" },
    INSUFFICIENT_INFORMATION: { icon: AlertTriangle, text: "I don't have enough information to guide you safely.", color: "text-jansahay-red" }
  };

  const config = stateConfig[state as keyof typeof stateConfig];
  if (!config) return null;

  const Icon = config.icon;
  const isError = state === "ERROR" || state === "INSUFFICIENT_INFORMATION";

  return (
    <div className="flex flex-col items-center justify-center py-12 animate-in fade-in duration-500">
      <div className={cn("w-16 h-16 relative flex items-center justify-center mb-6", config.color)}>
        {!isError && (
          <div className="absolute inset-0 border-4 border-current/20 rounded-full animate-ping opacity-20"></div>
        )}
        <Icon className={cn("w-8 h-8", !isError && state !== "LISTENING" && "animate-pulse")} />
      </div>
      <h2 className={cn("text-xl md:text-2xl font-semibold tracking-tight", config.color)}>
        {config.text}
      </h2>
      {isError && (
        <div className="mt-8 flex gap-4">
          <button className="bg-jansahay-navy text-white px-6 py-2 rounded-xl font-medium">Try again</button>
          <button className="bg-white border border-border text-jansahay-text px-6 py-2 rounded-xl font-medium">Contact authority</button>
        </div>
      )}
    </div>
  );
}

function MicPulse({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <div className="absolute w-full h-full bg-current rounded-full animate-ping opacity-30"></div>
      <div className="w-4 h-8 bg-current rounded-full"></div>
    </div>
  );
}
