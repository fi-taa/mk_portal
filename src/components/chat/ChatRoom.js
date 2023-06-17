import React from 'react';
import ChatMessage from './ChatMessage';

const ChatRoom = ({ messages }) => {
  return (
    <div className="space-y-4">
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          sender={message.sender}
          content={message.content}
        />
      ))}
    </div>
  );
};

export default ChatRoom;
