const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

async function perguntarGemini(pergunta) {

    const resposta = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: pergunta
    });

    return resposta.text;
}

module.exports = {
    perguntarGemini
};