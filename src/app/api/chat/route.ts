import { NextResponse } from 'next/server';
import { askClaude } from '@/lib/ai/claude';

export async function POST(request: Request) {
  try {
    const { prompt, language, imageBase64, imageMediaType } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    // Check if the API key is configured. If not, return a specific 501 status
    // so the frontend knows to fallback to the mock engine gracefully.
    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: "Claude API key not configured. Falling back to mock engine." }, 
        { status: 501 }
      );
    }

    const responseText = await askClaude(prompt, language || "en", imageBase64, imageMediaType);

    return NextResponse.json({ text: responseText });
    
  } catch (error: any) {
    console.error("AI API Error:", error);
    return NextResponse.json(
      { error: "Failed to process the request." }, 
      { status: 500 }
    );
  }
}
