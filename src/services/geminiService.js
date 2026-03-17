import { GEMINI_API_KEY } from '@env';

const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

const SYSTEM_PROMPT = `Kamu adalah AI fitness coach yang ramah dan profesional. 
Tugasmu adalah membantu user membuat program workout yang personal.

Alur percakapan yang harus kamu ikuti:
1. Tanyakan umur user
2. Tanyakan apakah sudah pernah olahraga sebelumnya
3. Tanyakan tujuan fitness (turun berat badan, bangun otot, menjaga kebugaran, dll)
4. Tanyakan berapa hari per minggu user bisa berolahraga
5. Tanyakan apakah ada kondisi fisik khusus atau cedera

Setelah semua info terkumpul, buatkan program workout harian yang detail.

Gunakan bahasa Indonesia yang santai dan friendly.
Jawab singkat dan jelas, jangan terlalu panjang.`;

export async function sendMessage(chatHistory) {
  console.log('API KEY:', GEMINI_API_KEY);

  try {
    const contents = chatHistory.map((msg) => ({
      role: msg.isUser ? 'user' : 'model',
      parts: [{ text: msg.text }],
    }));

    const response = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: SYSTEM_PROMPT }],
        },
        contents,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'Gemini API error');
    }

    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Gemini error:', error);
    throw error;
  }
}