import React, { useState } from 'react';

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex">
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={handleInputChange}
        className="flex-grow px-4 py-2 rounded-l-md outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
