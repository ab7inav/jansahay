import { GuidanceJourney } from "@/types";

export const activeJourneys: GuidanceJourney[] = [
  {
    id: "j-1",
    title: "Scholarship Application",
    progress: 60,
    totalSteps: 5,
    completedSteps: 2,
    lastUpdated: "Just now",
    steps: [
      {
        id: "s-1",
        title: "Understand your situation",
        status: "completed",
      },
      {
        id: "s-2",
        title: "Check eligibility",
        status: "completed",
      },
      {
        id: "s-3",
        title: "Prepare your documents",
        status: "current",
        description: "You need to gather the required documents to prove your eligibility before applying.",
        requirements: ["Aadhaar Card", "Bank Account Details", "Income Certificate"],
        actionLabel: "I've completed this",
        whyItMatters: "This document is required by the government to verify your financial status and eligibility for the scholarship.",
        sourceName: "National Scholarship Portal",
        sourceUrl: "#",
        lastChecked: "12 Aug 2026",
      },
      {
        id: "s-4",
        title: "Submit application",
        status: "upcoming",
      },
      {
        id: "s-5",
        title: "Track application",
        status: "upcoming",
      },
    ],
  },
  {
    id: "j-2",
    title: "Cyber Fraud Reporting",
    progress: 30,
    totalSteps: 4,
    completedSteps: 1,
    lastUpdated: "Yesterday",
    steps: [
      {
        id: "c-1",
        title: "Block bank accounts",
        status: "completed",
      },
      {
        id: "c-2",
        title: "Call 1930 Helpline",
        status: "current",
        description: "Immediately report the fraud to the National Cyber Crime Reporting Portal helpline.",
        actionLabel: "Call 1930",
        whyItMatters: "The first 24 hours are critical. Calling the helpline immediately increases the chance of recovering your funds.",
        sourceName: "Cybercrime.gov.in",
        sourceUrl: "#",
        lastChecked: "18 Aug 2026",
      },
      {
        id: "c-3",
        title: "File online complaint",
        status: "upcoming",
      },
      {
        id: "c-4",
        title: "Visit local police station",
        status: "upcoming",
      },
    ],
  },
];
