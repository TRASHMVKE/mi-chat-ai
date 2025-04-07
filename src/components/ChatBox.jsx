import React from "react";
import Message from "./Message";

function ChatBox({ messages }) {
  return (
    <div className="flex flex-col h-screen p-4 text-white bg-gray-900">
      {messages.map((message, index) => (
        <Message key={index} user={message.user} text={message.text} />
      ))}
    </div>
  );
}

export default ChatBox;