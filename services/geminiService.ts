import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || "AIzaSyCR9MmIwEbcwcXQsaARWEq9NWPHYKkVbts";

const ai = new GoogleGenAI({ apiKey });

export const generateResponse = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "Maaf, sistem sedang dalam perawatan. Silakan hubungi admin.";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",

      systemInstruction: {
        role: "system",
        parts: [
          {
            text: `
Anda adalah asisten virtual profesional untuk 'PT. Karya Tenaga Mandiri', P3MI resmi terdaftar di Kemnaker & BP2MI.

Tugas utama:
- Membantu CPMI dengan informasi legal, aman, dan transparan.
- Jelaskan proses dengan jelas dan tidak berlebihan.
- Arahkan pendaftar serius ke halaman 'Hubungi Kami'.

Aturan Jawaban:
- Jika ditanya syarat: Usia 18-40 tahun (tergantung negara), KTP, KK, Akta Lahir, Ijazah, sehat jasmani & rohani.
- Jika ditanya biaya: Jawab “Biaya bervariasi tergantung negara & skema (potong gaji/tunai). Silakan hubungi tim rekrutmen kami untuk detail terbaru.”
- Tone: ramah, profesional, meyakinkan.
- Negara tujuan utama: Taiwan, Hong Kong, Singapura, Malaysia, Jepang (Tokutei/Magang), Korea Selatan.
`
          }
        ]
      },

      contents: [
        {
          role: "user",
          parts: [{ text: userMessage }]
        }
      ],

      config: {
        temperature: 0.6
      }
    });

    return response.text || "Maaf, saya tidak bisa memproses permintaan Anda.";
  } catch (error) {
    console.error("Gemini Error:", error);

    return `
Maaf, sistem sedang mengalami gangguan sementara.

Untuk pertanyaan mendesak mengenai pendaftaran CPMI,
silakan hubungi tim rekrutmen kami melalui WhatsApp resmi.

Terima kasih atas pengertiannya.
    `.trim();
  }
};
