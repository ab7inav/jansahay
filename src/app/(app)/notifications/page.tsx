import { ArrowLeft, Bell, FileText, CheckCircle2, Map } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      title: "Your document was successfully uploaded.",
      time: "2 hours ago",
      icon: FileText,
      color: "text-jansahay-blue",
      bg: "bg-jansahay-blue/10",
      unread: true
    },
    {
      id: 2,
      title: "Your saved guidance is waiting.",
      time: "Yesterday",
      icon: Map,
      color: "text-jansahay-purple",
      bg: "bg-jansahay-purple/10",
      unread: false
    },
    {
      id: 3,
      title: "Your guidance plan has been updated.",
      time: "3 days ago",
      icon: CheckCircle2,
      color: "text-jansahay-green",
      bg: "bg-jansahay-green/10",
      unread: false
    }
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      <header className="border-b border-border pb-6 flex items-center justify-between">
        <div>
          <Link href="/profile" className="inline-flex items-center gap-2 text-jansahay-text-secondary hover:text-jansahay-navy text-sm font-medium mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Profile
          </Link>
          <h1 className="text-3xl font-bold text-jansahay-navy tracking-tight">Notifications</h1>
        </div>
        <button className="text-sm font-semibold text-jansahay-blue hover:underline">
          Mark all as read
        </button>
      </header>

      <div className="bg-white rounded-3xl shadow-sm border border-border overflow-hidden">
        {notifications.length === 0 ? (
          <div className="p-12 text-center text-jansahay-text-secondary">
            <Bell className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p>You have no new notifications.</p>
          </div>
        ) : (
          <div className="divide-y divide-border/50">
            {notifications.map((n) => (
              <div key={n.id} className={cn("p-6 flex items-start gap-4 transition-colors hover:bg-gray-50", n.unread ? "bg-jansahay-blue/5" : "")}>
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center shrink-0", n.bg, n.color)}>
                  <n.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className={cn("text-base mb-1", n.unread ? "font-bold text-jansahay-navy" : "font-medium text-jansahay-text")}>
                    {n.title}
                  </h3>
                  <p className="text-xs font-semibold text-jansahay-text-secondary">{n.time}</p>
                </div>
                {n.unread && (
                  <div className="w-3 h-3 bg-jansahay-blue rounded-full shrink-0 mt-2"></div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
