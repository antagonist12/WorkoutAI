import { GEMINI_API_KEY, GROQ_API_KEY } from '@env';

const SYSTEM_PROMPT = `Kamu adalah AI fitness coach yang ramah dan profesional. 
Tugasmu adalah membantu user membuat program workout yang personal.

Alur percakapan yang harus kamu ikuti:
1. Tanyakan umur user
2. Tanyakan apakah sudah pernah olahraga sebelumnya
3. Tanyakan tujuan fitness (turun berat badan, bangun otot, menjaga kebugaran, dll)
4. Tanyakan berapa hari per minggu user bisa berolahraga
5. Tanyakan apakah ada kondisi fisik khusus atau cedera

Setelah semua info terkumpul (minimal 4 pertanyaan terjawab):
- Beritahu user bahwa kamu akan membuatkan program workout
- Lalu output JSON dengan format PERSIS seperti ini, diawali dengan tag [WORKOUT_PLAN] dan diakhiri [/WORKOUT_PLAN]:

[WORKOUT_PLAN]
{
  "name": "Nama Program",
  "durationWeeks": 4,
  "goal": "tujuan fitness",
  "days": [
    {
      "day": "Senin",
      "title": "Nama Sesi",
      "duration": "45 min",
      "exercises": [
        { "name": "Nama Latihan", "sets": 3, "reps": 12, "rest": "60 detik" }
      ]
    }
  ]
}
[/WORKOUT_PLAN]

Setelah output JSON, berikan motivasi singkat kepada user.
Gunakan bahasa Indonesia yang santai dan friendly.
Jawab singkat dan jelas, jangan terlalu panjang.`;

const PROVIDERS = [
  {
    name: 'gemini-2.5-flash',
    call: async (contents) => {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw { status: data.error?.status, message: data.error?.message };
      return data.candidates[0].content.parts[0].text;
    },
    formatHistory: (chatHistory) => chatHistory.map((msg) => ({
      role: msg.isUser ? 'user' : 'model',
      parts: [{ text: msg.text }],
    })),
  },
  {
    name: 'groq-llama',
    call: async (messages) => {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages,
          max_tokens: 1024,
          temperature: 0.7,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw { status: data.error?.type, message: data.error?.message };
      return data.choices[0].message.content;
    },
    formatHistory: (chatHistory) => [
      { role: 'system', content: SYSTEM_PROMPT },
      ...chatHistory.map((msg) => ({
        role: msg.isUser ? 'user' : 'assistant',
        content: msg.text,
      })),
    ],
  },
];

export async function sendMessage(chatHistory) {
  let lastError

  for (const provider of PROVIDERS) {
    try {
      const formattedHistory = provider.formatHistory(chatHistory);
      const result = await provider.call(formattedHistory);
      console.log(`Using provider: ${provider.name}`);
      return result;
    } catch (error) {
      lastError = error;
      if (error.status === 'RESOURCE_EXHAUSTED') {
        console.log(`${provider.name} quota exceeded, trying next...`);
        continue;
      }
      console.log(`${provider.name} failed: ${error.message}, trying next...`);
    }
  }

  throw lastError || new Error('All providers failed');
}

export function extractWorkoutPlan(text) {
  if (!text) return

  try {
    const match = text.match(/\[WORKOUT_PLAN\]([\s\S]*?)\[\/WORKOUT_PLAN\]/);
    if (!match) return
    return JSON.parse(match[1].trim());
  } catch (error) {
    console.error('Error parsing workout plan:', error);
    return
  }
}