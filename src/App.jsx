import React, { useState } from "react";
import ChatBox from "./components/ChatBox";
import InputBox from "./components/InputBox";

function App() {
  const [messages, setMessages] = useState([]);

  const handleReceiveMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <div className="flex flex-col items-center min-h-screen text-white bg-gray-900">
      <h1 className="mt-8 text-4xl font-bold">Mi Chat AI</h1>
      <div className="w-full max-w-2xl p-4 ">
        <ChatBox messages={messages} />
        <InputBox onReceiveMessage={handleReceiveMessage} />
      </div>
    </div>
  );
}

export default App;