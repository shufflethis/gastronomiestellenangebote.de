import { GoogleGenAI } from "@google/genai";

const FALLBACK_MESSAGE = "Der KI-Assistent ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.";

// Initialize specific model for text tasks
const MODEL_NAME = 'gemini-2.5-flash';

export const generateCareerAdvice = async (userPrompt: string): Promise<string> => {
  const apiKey = process.env.API_KEY || '';
  if (!apiKey) {
    return FALLBACK_MESSAGE;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const systemInstruction = `Du bist ein erfahrener Karriere-Coach für die Gastronomie-Branche in Deutschland. 
    Du hilfst Bewerbern bei Fragen zu Lebenslauf, Anschreiben, Vorstellungsgesprächen und Karrierewegen in Restaurants und Hotels.
    Antworte professionell, ermutigend, aber realistisch. Halte dich kurz und prägnant. Du sprichst Deutsch.`;

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });

    return response.text || "Entschuldigung, ich konnte keine Antwort generieren.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return FALLBACK_MESSAGE;
  }
};
