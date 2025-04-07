import React from "react";

function Message({ user, text }) {
  const isAI = user === "AI";

  return (
    <div
      className={`flex ${
        isAI ? "justify-start" : "justify-end"
      } mb-4`}
    >
      <div
        className={`max-w-lg px-4 py-2 rounded-lg ${
          isAI ? "bg-indigo-600 text-white" : "bg-gray-700 text-white"
        }`}
      >
        <p className="text-sm font-bold">{user}</p>
        <p className="text-base">{text}</p>
      </div>
    </div>
  );
}

export default Message;