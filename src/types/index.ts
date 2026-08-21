export interface UserProfile {
  id: string;
  name: string;
  preferredLanguage: string;
}

export type StepStatus = "completed" | "current" | "upcoming";

export interface JourneyStep {
  id: string;
  title: string;
  status: StepStatus;
  description?: string;
  requirements?: string[];
  actionLabel?: string;
  whyItMatters?: string;
  sourceUrl?: string;
  sourceName?: string;
  lastChecked?: string;
}

export interface GuidanceJourney {
  id: string;
  title: string;
  progress: number;
  totalSteps: number;
  completedSteps: number;
  lastUpdated: string;
  steps: JourneyStep[];
}

export interface HistoryItem {
  id: string;
  title: string;
  timestamp: string;
  dateGroup: "Today" | "Yesterday" | "Earlier";
  type: "journey" | "question";
}

export interface UserDocument {
  id: string;
  name: string;
  uploadDate: string;
  status: "Secure" | "Pending" | "Verified";
  type: string;
}
