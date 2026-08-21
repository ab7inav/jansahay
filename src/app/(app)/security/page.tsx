import { ShieldCheck, Lock, EyeOff, Activity, ShieldAlert, KeyRound, Smartphone, FileLock2, Download, Trash2, History } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function SecurityCenterPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-500 pb-10">
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold text-jansahay-navy tracking-tight mb-2">Security & Privacy</h1>
        <p className="text-jansahay-text-secondary">Your information deserves protection.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Account Security */}
        <div className="md:col-span-2 space-y-6">
          <section className="bg-white rounded-3xl border border-border overflow-hidden shadow-sm">
            <div className="bg-jansahay-bg px-6 py-4 border-b border-border flex items-center gap-3">
              <KeyRound className="w-5 h-5 text-jansahay-navy" />
              <h2 className="font-bold text-jansahay-navy">Account Security</h2>
            </div>
            <div className="divide-y divide-border/50">
              <SecurityItem title="Password" status="Updated 30 days ago" action="Change" />
              <SecurityItem title="Two-factor authentication" status="Enabled" action="Manage" statusColor="text-jansahay-green" icon={ShieldCheck} />
              <SecurityItem title="Active sessions" status="2 devices signed in" action="Review" />
            </div>
          </section>

          {/* Document Security */}
          <section className="bg-white rounded-3xl border border-border overflow-hidden shadow-sm">
            <div className="bg-jansahay-bg px-6 py-4 border-b border-border flex items-center gap-3">
              <FileLock2 className="w-5 h-5 text-jansahay-navy" />
              <h2 className="font-bold text-jansahay-navy">Document Security</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-jansahay-blue/10 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5 text-jansahay-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-jansahay-navy mb-1">Encrypted Storage</h3>
                  <p className="text-sm text-jansahay-text-secondary leading-relaxed">
                    Documents are stored securely. Note: True end-to-end encryption will be active once the backend is fully connected.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-jansahay-green/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-jansahay-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-jansahay-navy mb-1">Integrity Verification (SHA-256)</h3>
                  <p className="text-sm text-jansahay-text-secondary leading-relaxed">
                    Every uploaded document generates a unique fingerprint to ensure it hasn't been tampered with.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy & Data Controls */}
          <section className="bg-white rounded-3xl border border-border overflow-hidden shadow-sm">
            <div className="bg-jansahay-bg px-6 py-4 border-b border-border flex items-center gap-3">
              <EyeOff className="w-5 h-5 text-jansahay-navy" />
              <h2 className="font-bold text-jansahay-navy">Privacy Controls</h2>
            </div>
            <div className="divide-y divide-border/50">
              <PrivacyControlItem 
                title="Download my data" 
                desc="Get a copy of your guidance history and documents."
                icon={Download} 
                action="Download" 
              />
              <PrivacyControlItem 
                title="Clear history" 
                desc="Remove your past AI conversations and guidance journeys."
                icon={History} 
                action="Clear" 
                destructive
              />
              <PrivacyControlItem 
                title="Delete account" 
                desc="Permanently erase all your data from JANSAHAY."
                icon={Trash2} 
                action="Delete" 
                destructive
              />
            </div>
          </section>
        </div>

        {/* Security Activity Sidebar */}
        <div className="md:col-span-1 space-y-6">
          <section className="bg-white rounded-3xl border border-border overflow-hidden shadow-sm">
            <div className="bg-jansahay-bg px-6 py-4 border-b border-border flex items-center gap-3">
              <Activity className="w-5 h-5 text-jansahay-navy" />
              <h2 className="font-bold text-jansahay-navy">Recent Activity</h2>
            </div>
            <div className="p-2">
              <ActivityItem text="Document uploaded" time="10:42 AM" type="success" />
              <ActivityItem text="Account signed in" time="10:38 AM" type="success" />
              <ActivityItem text="Guidance saved" time="Yesterday" type="info" />
              <ActivityItem text="Failed login attempt" time="3 days ago" type="warning" />
            </div>
            <div className="p-4 border-t border-border bg-gray-50/50">
              <button className="w-full text-sm font-semibold text-jansahay-red hover:bg-jansahay-red/5 py-2 rounded-xl transition-colors">
                Sign out all devices
              </button>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}

function SecurityItem({ title, status, action, statusColor = "text-jansahay-text-secondary", icon: Icon }: any) {
  return (
    <div className="p-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-3">
        {Icon && <Icon className={cn("w-4 h-4", statusColor)} />}
        <div>
          <h3 className="font-medium text-jansahay-navy">{title}</h3>
          <span className={cn("text-xs font-medium", statusColor)}>{status}</span>
        </div>
      </div>
      <button className="text-sm font-semibold text-jansahay-blue hover:underline px-3 py-1 bg-jansahay-blue/5 rounded-lg">
        {action}
      </button>
    </div>
  );
}

function PrivacyControlItem({ title, desc, icon: Icon, action, destructive }: any) {
  return (
    <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-start gap-4">
        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0", destructive ? "bg-jansahay-red/10 text-jansahay-red" : "bg-jansahay-bg text-jansahay-text-secondary")}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className={cn("font-medium mb-1", destructive ? "text-jansahay-red" : "text-jansahay-navy")}>{title}</h3>
          <p className="text-xs text-jansahay-text-secondary leading-relaxed max-w-[250px]">{desc}</p>
        </div>
      </div>
      <button className={cn(
        "text-sm font-semibold px-4 py-2 rounded-xl transition-colors self-start sm:self-auto",
        destructive ? "text-jansahay-red border border-jansahay-red hover:bg-jansahay-red hover:text-white" : "bg-jansahay-navy text-white hover:bg-jansahay-navy/90"
      )}>
        {action}
      </button>
    </div>
  );
}

function ActivityItem({ text, time, type }: any) {
  return (
    <div className="p-4 flex items-start gap-3">
      <div className="mt-0.5">
        {type === "success" && <ShieldCheck className="w-4 h-4 text-jansahay-green" />}
        {type === "info" && <div className="w-2 h-2 rounded-full bg-jansahay-blue m-1" />}
        {type === "warning" && <ShieldAlert className="w-4 h-4 text-jansahay-red" />}
      </div>
      <div>
        <p className="text-sm font-medium text-jansahay-navy">{text}</p>
        <span className="text-xs text-jansahay-text-secondary">{time}</span>
      </div>
    </div>
  );
}
