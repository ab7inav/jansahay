export type AIState = 
  | "IDLE" 
  | "LISTENING" 
  | "PROCESSING" 
  | "RESEARCHING" 
  | "PLANNING" 
  | "CLARIFICATION" 
  | "READY" 
  | "ERROR" 
  | "INSUFFICIENT_INFORMATION"
  | "DOCUMENT_PROCESSING";

export interface AIConversation {
  id: string;
  messages: Message[];
  status: "active" | "completed" | "escalated";
}

export type MessageType = 
  | "user-text"
  | "user-voice"
  | "user-document"
  | "understanding"
  | "clarification"
  | "action-plan"
  | "source"
  | "warning"
  | "emergency"
  | "escalation";

export interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  type: MessageType;
  content?: string;
  payload?: any;
}

export interface Source {
  id: string;
  title: string;
  publisher: string;
  domain: string;
  lastVerified: string;
  url: string;
  relevantInfo: string;
}

export interface ClarificationQuestion {
  id: string;
  question: string;
  options: string[];
  type: "single-choice" | "searchable-list";
}

export interface ActionPlan {
  id: string;
  title: string;
  summary: string;
  urgency: "normal" | "high" | "emergency";
  confidence: "high" | "needs-info" | "uncertain" | "safety-limit";
  steps: ActionStep[];
  sources: Source[];
}

export interface ActionStep {
  id: string;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming" | "blocked" | "needs_review";
  requirements?: string[];
  actionLabel?: string;
  whyItMatters?: string;
}
