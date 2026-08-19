import { Landmark, FileText, ShieldAlert, Scale, HeartPulse, AlertTriangle, HelpCircle } from "lucide-react";

export const serviceCategories = [
  {
    id: "gov",
    title: "Government Help",
    description: "Services, schemes and applications",
    icon: Landmark,
    color: "bg-jansahay-blue/10 text-jansahay-blue"
  },
  {
    id: "docs",
    title: "Documents",
    description: "Understand documents and requirements",
    icon: FileText,
    color: "bg-jansahay-purple/10 text-jansahay-purple"
  },
  {
    id: "police",
    title: "Police & Cybercrime",
    description: "Know what to do after a cybercrime or police issue",
    icon: ShieldAlert,
    color: "bg-jansahay-navy/10 text-jansahay-navy"
  },
  {
    id: "legal",
    title: "Legal Information",
    description: "Understand procedures and official information",
    icon: Scale,
    color: "bg-jansahay-cyan/10 text-jansahay-cyan"
  },
  {
    id: "health",
    title: "Health Navigation",
    description: "Find the right next step",
    icon: HeartPulse,
    color: "bg-jansahay-green/10 text-jansahay-green"
  },
  {
    id: "emergency",
    title: "Emergency",
    description: "Get immediate safety guidance",
    icon: AlertTriangle,
    color: "bg-jansahay-red/10 text-jansahay-red",
    urgent: true
  },
  {
    id: "unsure",
    title: "Not sure",
    description: "Just tell us what happened",
    icon: HelpCircle,
    color: "bg-gray-100 text-gray-600"
  }
];

export const trustPrinciples = [
  {
    id: "verified",
    title: "Verified information",
    icon: "CheckCircle"
  },
  {
    id: "protected",
    title: "Your information is protected",
    icon: "Lock"
  },
  {
    id: "guidance",
    title: "Clear step-by-step guidance",
    icon: "Compass"
  }
];

export const journeySteps = [
  {
    id: "step1",
    number: "01",
    title: "Tell us",
    description: "Describe what happened in your own words."
  },
  {
    id: "step2",
    number: "02",
    title: "We understand",
    description: "Our AI analyzes your problem and finds the official procedure."
  },
  {
    id: "step3",
    number: "03",
    title: "Get your action plan",
    description: "Receive a simple, step-by-step guide on what to do next."
  },
  {
    id: "step4",
    number: "04",
    title: "Take the next step",
    description: "Proceed with confidence and get the help you need."
  }
];

export const examplePrompts = [
  "My pension has stopped.",
  "I lost an important document.",
  "I received a legal notice.",
  "I think I was scammed."
];
