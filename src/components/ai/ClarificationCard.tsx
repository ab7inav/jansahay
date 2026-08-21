import { ClarificationQuestion } from "@/types/ai";

interface ClarificationCardProps {
  question: ClarificationQuestion;
  onAnswer: (answer: string) => void;
}

export function ClarificationCard({ question, onAnswer }: ClarificationCardProps) {
  return (
    <div className="max-w-xl mx-auto mt-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-jansahay-blue/20">
        <div className="text-xs font-bold text-jansahay-blue uppercase tracking-widest mb-4">
          I need one more detail
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold text-jansahay-navy mb-8">
          {question.question}
        </h3>

        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => onAnswer(option)}
              className="w-full text-left bg-white hover:bg-jansahay-blue/5 border border-border hover:border-jansahay-blue/30 text-jansahay-text font-medium py-4 px-6 rounded-xl transition-all"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
