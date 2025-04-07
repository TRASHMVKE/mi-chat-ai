import React, { useState } from "react";
import { obtenerRespuestaIA } from "../api/googleAI";

function InputBox({ onReceiveMessage }) {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Envía el mensaje del usuario
    onReceiveMessage({ user: "User", text: input });

    // Llama a la API de IA para obtener una respuesta
    const response = await obtenerRespuestaIA(input);

    // Muestra la respuesta de la IA
    onReceiveMessage({ user: "AI", text: response });

    // Limpia el campo de entrada
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-0 left-0 flex items-center w-full px-4 py-3 bg-gray-900 border-t border-gray-700"
    >
      {/* Campo de entrada */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe tu mensaje aquí..."
        className="flex-1 px-4 py-2 text-white placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-full focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      />
      {/* Botón de enviar */}
      <button
        type="submit"
        className="px-4 py-2 ml-3 font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700"
      >
        Enviar
      </button>
    </form>
  );
}

export default InputBox;