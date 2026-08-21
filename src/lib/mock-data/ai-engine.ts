import { ActionPlan, ClarificationQuestion, Message, Source } from "@/types/ai";

export const MOCK_SOURCES: Record<string, Source> = {
  nsp: {
    id: "src-nsp",
    title: "National Scholarship Portal Guidelines",
    publisher: "Government of India",
    domain: "scholarships.gov.in",
    lastVerified: "18 Aug 2026",
    url: "#",
    relevantInfo: "Information regarding tracking of delayed scholarship payments and grievance redressal."
  },
  cyber: {
    id: "src-cyber",
    title: "National Cyber Crime Reporting Portal",
    publisher: "Ministry of Home Affairs",
    domain: "cybercrime.gov.in",
    lastVerified: "19 Aug 2026",
    url: "#",
    relevantInfo: "Official procedure for reporting financial fraud and blocking compromised accounts."
  }
};

export const MOCK_SCENARIOS = {
  scholarship: {
    understanding: {
      text: "You may be facing a problem with your scholarship payment not being received.",
    },
    clarification: {
      id: "clar-1",
      question: "What type of scholarship is this?",
      options: ["Government scholarship", "College scholarship", "I'm not sure"],
      type: "single-choice" as const
    } as ClarificationQuestion,
    plan: {
      id: "plan-1",
      title: "Scholarship payment issue",
      summary: "We've identified 4 steps to help you resolve your delayed scholarship payment.",
      urgency: "normal",
      confidence: "high",
      sources: [MOCK_SOURCES.nsp],
      steps: [
        {
          id: "step-1",
          title: "Understand your application status",
          description: "Verify that your application was approved.",
          status: "completed",
        },
        {
          id: "step-2",
          title: "Check payment status",
          description: "Check if the payment was disbursed from the government portal.",
          requirements: ["Application ID", "Registered mobile number"],
          actionLabel: "Check Status Online",
          whyItMatters: "This helps determine whether the payment was processed by the treasury or is still pending at the department level.",
          status: "current",
        },
        {
          id: "step-3",
          title: "Verify required documents",
          description: "Ensure your bank account is seeded with Aadhaar.",
          status: "upcoming",
        },
        {
          id: "step-4",
          title: "Contact the appropriate authority",
          description: "File a grievance if payment is shown as failed.",
          status: "upcoming",
        }
      ]
    } as ActionPlan
  },
  cyber: {
    understanding: {
      text: "It sounds like you may have been a victim of financial cyber fraud.",
    },
    clarification: null, // Skip clarification, go straight to plan due to urgency
    plan: {
      id: "plan-cyber",
      title: "Immediate Cyber Fraud Action",
      summary: "Time is critical. Follow these steps immediately to secure your funds.",
      urgency: "high",
      confidence: "high",
      sources: [MOCK_SOURCES.cyber],
      steps: [
        {
          id: "step-c1",
          title: "Call 1930 Helpline",
          description: "Immediately report the fraud to the National Cyber Crime Reporting Portal helpline.",
          actionLabel: "Call 1930 Now",
          whyItMatters: "The first 24 hours are critical. Calling the helpline immediately allows authorities to freeze the fraudulent transaction.",
          status: "current",
        },
        {
          id: "step-c2",
          title: "Block your bank accounts",
          description: "Contact your bank to block your cards and freeze net banking.",
          status: "upcoming",
        },
        {
          id: "step-c3",
          title: "File online complaint",
          description: "Register a formal complaint on cybercrime.gov.in.",
          status: "upcoming",
        }
      ]
    } as ActionPlan
  }
};
