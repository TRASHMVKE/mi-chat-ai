import { GoogleGenerativeAI } from "@google/generative-ai";

const client = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);

export const obtenerRespuestaIA = async (prompt) => {
  try {
    // Configura el modelo Gemini 1.5 (modo flash)
    const model = client.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Genera el contenido usando el modelo
    const result = await model.generateContent(prompt);

    // Obtén la respuesta generada por el modelo
    const response = await result.response;
    const text = response.text();

    // Devuelve el texto generado
    return text;
  } catch (error) {
    console.error("Error al generar contenido:", error);
    return "Hubo un problema al conectar con la API.";
  }
};


