import { historyData } from "@/lib/mock-data/history";
import { MessageSquare, Map } from "lucide-react";
import Link from "next/link";

export default function HistoryPage() {
  const groupedHistory = historyData.reduce((acc, item) => {
    if (!acc[item.dateGroup]) acc[item.dateGroup] = [];
    acc[item.dateGroup].push(item);
    return acc;
  }, {} as Record<string, typeof historyData>);

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-jansahay-navy tracking-tight">Recent History</h1>
      </div>

      {Object.keys(groupedHistory).length === 0 ? (
        <div className="bg-white rounded-2xl border border-border p-12 text-center">
          <div className="w-16 h-16 bg-jansahay-bg rounded-full flex items-center justify-center mx-auto mb-4">
            <Map className="w-8 h-8 text-jansahay-text-secondary" />
          </div>
          <h3 className="text-lg font-semibold text-jansahay-navy mb-2">No history yet</h3>
          <p className="text-jansahay-text-secondary mb-6">Your guidance history will appear here.</p>
          <Link href="/ask" className="inline-flex bg-jansahay-navy hover:bg-jansahay-navy/90 text-white font-medium py-2 px-6 rounded-xl transition-colors">
            Ask JANSAHAY
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {["Today", "Yesterday", "Earlier"].map((group) => {
            if (!groupedHistory[group]) return null;
            
            return (
              <div key={group} className="space-y-4">
                <h2 className="text-sm font-bold text-jansahay-text-secondary uppercase tracking-widest px-2">
                  {group}
                </h2>
                <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
                  {groupedHistory[group].map((item, index) => (
                    <div 
                      key={item.id} 
                      className={`p-4 md:p-5 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer ${
                        index !== groupedHistory[group].length - 1 ? "border-b border-border/50" : ""
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-jansahay-bg flex items-center justify-center text-jansahay-navy shrink-0">
                          {item.type === "journey" ? (
                            <Map className="w-5 h-5" />
                          ) : (
                            <MessageSquare className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-jansahay-navy">{item.title}</h3>
                          <span className="text-xs text-jansahay-text-secondary capitalize">{item.type}</span>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-jansahay-text-secondary">
                        {item.timestamp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
