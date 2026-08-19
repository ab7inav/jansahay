import { trustPrinciples } from "@/lib/mock-data";
import { CheckCircle, Lock, Compass } from "lucide-react";

const iconMap = {
  CheckCircle,
  Lock,
  Compass
};

export function TrustSection() {
  return (
    <section className="py-12 border-y border-border/50 bg-white" id="safety">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-24">
          {trustPrinciples.map((principle, index) => {
            const Icon = iconMap[principle.icon as keyof typeof iconMap];
            
            return (
              <div 
                key={principle.id} 
                className="flex items-center gap-3 animate-in fade-in duration-700"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
              >
                <div className="bg-jansahay-green/10 text-jansahay-green p-2 rounded-full">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-medium text-jansahay-text">{principle.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
