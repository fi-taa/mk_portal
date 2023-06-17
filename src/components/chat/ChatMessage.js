import React from 'react';

const ChatMessage = ({ sender, content }) => {
  return (
    <div className="flex mb-2">
      <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full"></div>
      <div className="ml-3 p-2 bg-gray-100 rounded-md">
        <div className="text-gray-800 font-medium">{sender}</div>
        <div className="text-gray-600">{content}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
