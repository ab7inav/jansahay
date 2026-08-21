import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      <header className="border-b border-border pb-6">
        <Link href="/profile" className="inline-flex items-center gap-2 text-jansahay-text-secondary hover:text-jansahay-navy text-sm font-medium mb-4 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Profile
        </Link>
        <h1 className="text-3xl font-bold text-jansahay-navy tracking-tight">Settings</h1>
      </header>
      
      {/* Keeping it simple as requested: "Keep the settings page simple." */}
      <div className="bg-white rounded-3xl shadow-sm border border-border overflow-hidden">
        <div className="divide-y divide-border/50">
          <SettingLink title="Profile Information" href="/profile" />
          <SettingLink title="Language Preferences" href="/profile" />
          <SettingLink title="Accessibility" href="/accessibility" />
          <SettingLink title="Notifications" href="/notifications" />
          <SettingLink title="Security" href="/security" />
          <SettingLink title="Privacy" href="/privacy" />
          <SettingLink title="Help & Support" href="/help" />
          <SettingLink title="About JANSAHAY" href="/about" />
        </div>
      </div>
    </div>
  );
}

function SettingLink({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href} className="block p-5 text-jansahay-navy font-bold hover:bg-gray-50 hover:text-jansahay-blue transition-colors">
      {title}
    </Link>
  );
}
