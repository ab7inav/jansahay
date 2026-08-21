import { GuidanceJourney } from "@/types";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ContinueJourneyProps {
  journey: GuidanceJourney;
}

export function ContinueJourney({ journey }: ContinueJourneyProps) {
  const currentStep = journey.steps.find((s) => s.status === "current");
  
  if (!currentStep) return null;

  return (
    <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-border">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-lg text-jansahay-navy">{journey.title}</h3>
          <p className="text-sm text-jansahay-text-secondary flex items-center gap-1 mt-1">
            <Clock className="w-3 h-3" />
            Step {journey.completedSteps + 1} of {journey.totalSteps}
          </p>
        </div>
        <span className="text-sm font-medium text-jansahay-blue bg-jansahay-blue/10 px-3 py-1 rounded-full">
          {journey.progress}%
        </span>
      </div>

      <div className="w-full h-2 bg-jansahay-bg rounded-full overflow-hidden mb-5">
        <div 
          className="h-full bg-jansahay-blue transition-all duration-500 ease-out" 
          style={{ width: `${journey.progress}%` }} 
        />
      </div>

      <div className="bg-jansahay-bg rounded-xl p-4 mb-5 border border-border/50">
        <span className="text-xs font-semibold text-jansahay-text-secondary uppercase tracking-wider block mb-1">
          Current step
        </span>
        <p className="text-jansahay-navy font-medium">"{currentStep.title}"</p>
      </div>

      <Link 
        href={`/ask?journeyId=${journey.id}`} 
        className="w-full flex items-center justify-center gap-2 bg-jansahay-navy hover:bg-jansahay-navy/90 text-white py-3 px-4 rounded-xl font-medium transition-colors"
      >
        <span>Continue</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
