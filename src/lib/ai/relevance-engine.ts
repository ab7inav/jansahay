export type Category = "education" | "health" | "safety" | "government" | "documents";
export type Urgency = "normal" | "important" | "urgent" | "emergency";
export type Emotion = "curious" | "informative" | "concerned" | "serious" | "helpful";

export interface PublicUpdate {
  id: string;
  title: string; // Translation key
  summary: string; // Translation key
  category: Category;
  urgency: Urgency;
  emotion: Emotion;
  source: string;
  published: string;
  tags: string[];
}

export const mockUpdates: PublicUpdate[] = [
  {
    id: "upd_scholarship_2026",
    title: "updates.scholarship.title",
    summary: "updates.scholarship.summary",
    category: "education",
    urgency: "normal",
    emotion: "curious",
    source: "Ministry of Education",
    published: "2026-08-20",
    tags: ["student", "scholarship", "financial"]
  },
  {
    id: "upd_cyber_alert",
    title: "updates.cyber.title",
    summary: "updates.cyber.summary",
    category: "safety",
    urgency: "important",
    emotion: "concerned",
    source: "CERT-In",
    published: "2026-08-19",
    tags: ["scam", "cyber", "security"]
  },
  {
    id: "upd_doc_aadhar",
    title: "updates.doc.title",
    summary: "updates.doc.summary",
    category: "documents",
    urgency: "important",
    emotion: "informative",
    source: "UIDAI",
    published: "2026-08-15",
    tags: ["aadhar", "identity", "deadline"]
  }
];

export interface RelevanceResult {
  update: PublicUpdate;
  relevanceScore: number;
  recommendedAction: "explain" | "check_eligibility" | "update_doc";
}

export class SaarthiRelevanceEngine {
  /**
   * Determine the most relevant update for the user based on context.
   */
  static getMostRelevantUpdate(currentPath: string, userTags: string[]): RelevanceResult | null {
    let bestMatch: RelevanceResult | null = null;
    let highestScore = 0;

    for (const update of mockUpdates) {
      let score = 0.5; // Base score

      // Path contextual bonuses
      if (currentPath.includes("documents") && update.category === "documents") score += 0.3;
      if (currentPath.includes("dashboard") && update.urgency === "important") score += 0.2;
      if (currentPath.includes("dashboard") && update.urgency === "normal") score += 0.2;

      // User tag matching
      const matchingTags = update.tags.filter(t => userTags.includes(t));
      score += matchingTags.length * 0.1;

      // Override for high urgency
      if (update.urgency === "emergency") score = 1.0;

      if (score > highestScore && score >= 0.7) { // 0.7 threshold
        highestScore = score;
        let action: "explain" | "check_eligibility" | "update_doc" = "explain";
        if (update.category === "education") action = "check_eligibility";
        if (update.category === "documents") action = "update_doc";

        bestMatch = {
          update,
          relevanceScore: score,
          recommendedAction: action
        };
      }
    }

    return bestMatch;
  }
}
