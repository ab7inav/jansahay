import { GuidanceJourney as JourneyType } from "@/types";
import { Check, Circle, CircleDot } from "lucide-react";
import { cn } from "@/lib/utils";

interface GuidanceJourneyProps {
  journey: JourneyType;
}

export function GuidanceJourney({ journey }: GuidanceJourneyProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
      <h3 className="font-bold text-lg text-jansahay-navy uppercase tracking-wide mb-6">
        {journey.title}
      </h3>

      <div className="space-y-6 relative">
        {/* Connecting line */}
        <div className="absolute left-[11px] top-3 bottom-3 w-[2px] bg-border -z-10"></div>
        <div 
          className="absolute left-[11px] top-3 w-[2px] bg-jansahay-blue -z-10 transition-all duration-700 ease-out" 
          style={{ height: `calc(${journey.progress}% - 24px)` }}
        ></div>

        {journey.steps.map((step, index) => {
          const isCompleted = step.status === "completed";
          const isCurrent = step.status === "current";
          
          return (
            <div key={step.id} className={cn("flex gap-4 items-start", isCompleted ? "opacity-70" : "")}>
              <div className="relative mt-0.5 bg-white">
                {isCompleted ? (
                  <div className="w-6 h-6 rounded-full bg-jansahay-green flex items-center justify-center text-white ring-4 ring-white">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                ) : isCurrent ? (
                  <div className="w-6 h-6 rounded-full bg-white border-2 border-jansahay-blue flex items-center justify-center text-jansahay-blue ring-4 ring-white">
                    <CircleDot className="w-4 h-4" />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-white border-2 border-border flex items-center justify-center text-border ring-4 ring-white">
                    <Circle className="w-4 h-4" />
                  </div>
                )}
              </div>
              
              <div className={cn("flex-1", isCurrent ? "pt-0" : "pt-0.5")}>
                <h4 className={cn(
                  "font-medium", 
                  isCurrent ? "text-jansahay-navy text-lg font-semibold" : "text-jansahay-text"
                )}>
                  {index + 1}. {step.title}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
