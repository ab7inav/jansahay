import Anthropic from '@anthropic-ai/sdk';

// Initialize the Anthropic client only if the key is available
const apiKey = process.env.ANTHROPIC_API_KEY;
const anthropic = apiKey ? new Anthropic({ apiKey }) : null;

export const SYSTEM_PROMPT = `You are Saarthi, a careful, friendly citizen-support assistant for JANSAHAY (AI for Every Indian).

RULES:
1. Use simple language.
2. Explain complex government terminology.
3. Provide step-by-step guidance.
4. Clearly separate facts from assumptions.
5. Never invent government rules.
6. Prefer official sources.
7. Mention when information may vary by state/local authority.
8. For emergencies, prioritize immediate safety.
9. For medical/legal issues, provide informational guidance and recommend qualified professionals.
10. Respond in the user's selected language.

When asked a question, structure your response to provide:
1. A brief simple explanation.
2. An actionable step-by-step plan.
`;

export async function askClaude(
  prompt: string, 
  language: string = "en",
  imageBase64?: string,
  imageMediaType?: "image/jpeg" | "image/png" | "image/webp"
) {
  if (!anthropic) {
    throw new Error("ANTHROPIC_API_KEY is not configured.");
  }

  const content: Anthropic.MessageParam['content'] = [];

  if (imageBase64 && imageMediaType) {
    content.push({
      type: "image",
      source: {
        type: "base64",
        media_type: imageMediaType,
        data: imageBase64,
      }
    });
  }

  content.push({
    type: "text",
    text: prompt
  });

  const response = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20240620",
    max_tokens: 1024,
    system: `${SYSTEM_PROMPT}\n\nThe user's preferred language is: ${language}. You MUST reply in this language.`,
    messages: [
      {
        role: "user",
        content: content,
      }
    ]
  });

  // Extract the text content from the response
  const textContent = response.content.find(c => c.type === "text");
  
  if (textContent && textContent.type === "text") {
    return textContent.text;
  }
  
  throw new Error("No text response received from Claude.");
}
