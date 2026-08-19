import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  colorClass: string;
  urgent?: boolean;
}

export function ServiceCard({ title, description, icon: Icon, colorClass, urgent }: ServiceCardProps) {
  return (
    <Link href="/get-help" className="block group h-full">
      <div className={cn(
        "relative p-6 rounded-2xl border bg-white h-full transition-all duration-300",
        "hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1",
        urgent ? "border-jansahay-red/20" : "border-border"
      )}>
        {urgent && (
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-jansahay-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-jansahay-red"></span>
            </span>
          </div>
        )}
        
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110", colorClass)}>
          <Icon className="w-6 h-6" />
        </div>
        
        <h3 className="text-xl font-semibold text-jansahay-navy mb-2 group-hover:text-jansahay-blue transition-colors">
          {title}
        </h3>
        
        <p className="text-jansahay-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}
