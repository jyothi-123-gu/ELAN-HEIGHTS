import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with telemetry header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Friendly AI Chatbot Endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      res.status(400).json({ error: "Message is required." });
      return;
    }

    // Format chat conversation with system prompt
    const systemPrompt = `You are "Aurelia", a friendly, extremely stylish, and knowledgeable virtual concierge for Élan Heights—an elite global luxury footwear brand.
Your brand caters to the entire "footwear universe" for girls and women, spanning:
- Baby Shoes & First Walkers: Supportive, allergy-safe, soft nappa infant flats.
- Princess Mary Janes & School Shoes: Classic leather academy loafers and student styles.
- Sports & Sneakers: Vogue chunky platforms, carbon active meshes, and high-top canvas.
- Everyday Casual: Venetian seed-pearl ballet flats, flax espadrilles, and quilted nappa slides.
- Boots & Winter: Sleek calfskin Chelsea boots, shearling-lined winter boots, and knee-high leather boots.
- Comfort & Orthopedic: Podiatrist-certified arch-supportive suede loafers and holographic cyber-knit rollers.
- Couture & Heels: Iconic rose-quartz stilettos, custom bridal lace pumps, and celestial sapphire velvet mules.

Be extremely welcoming, sophisticated yet friendly, helpful, and charming. Help clients pick the perfect shoe, suggest styles based on their mood/events, design choices, sizing scales, and packaging options (like our Signature Rose Gold Box or the hand-crafted VIP Velvet Coffer upgrade). Keep answers concise and elegant. Always emphasize the brand's tagline: "Élan Heights — From First Steps to Finest Steps 👠💖✨".

Return only standard plain text or simple markdown formatting. Do not output raw HTML or code snippets.`;

    const chatHistory = history ? history.map((h: any) => ({
      role: h.role,
      parts: [{ text: h.text }]
    })) : [];

    // Complete generating contents with systemInstruction and chat context
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        ...chatHistory,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error in /api/chat:", error);
    res.status(500).json({ error: error?.message || "Internal server error during chat advisor generation." });
  }
});

async function startServer() {
  // Vite dev middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Statics for production build
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Élan Heights Server] Running on http://localhost:${PORT}`);
  });
}

startServer();
