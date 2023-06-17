import React from 'react';
import ChatRoom from './ChatRoom';
import ChatInput from './ChatInput';

const ChatWindow = ({ messages, onSendMessage }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto">
        <ChatRoom messages={messages} />
      </div>
      <div className="border-t border-gray-200 py-4">
        <ChatInput onSendMessage={onSendMessage} />
      </div>
    </div>
  );
};

export default ChatWindow;
