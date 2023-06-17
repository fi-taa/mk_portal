import React, { useState } from 'react';
import { useRouter } from 'next/router';

const UserChatPage = () => {
  const router = useRouter();
  const { userId } = router.query;

  const [selectedUser, setSelectedUser] = useState(userId);
  const [chatHistory, setChatHistory] = useState(getChatHistory(userId));

  function getChatHistory(userId) {
    // Replace with your actual logic to retrieve chat history for the selected user
    return [
      { sender: userId, message: 'Hello' },
      { sender: 'user2', message: 'Hi there' },
      { sender: userId, message: 'How are you?' },
      { sender: 'user2', message: "I'm good, thanks!" },
    ];
  }

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setChatHistory(getChatHistory(user));
  };

  const handleSendMessage = (message) => {
    console.log(`Sending message "${message}" to user ${selectedUser}`);
    // Replace with your actual logic to send the message to the backend or perform any desired action
  };

  return (
    <div className="flex flex-col md:flex-row container mx-auto px-4 py-8">
      <div className="w-full md:w-1/4 md:pr-8">
        <h1 className="text-2xl font-bold mb-4">Select a User</h1>
        <ul className="space-y-2">
          <li
            className={`cursor-pointer ${
              selectedUser === 'user1' ? 'text-blue-500 font-bold' : 'text-gray-600'
            }`}
            onClick={() => handleUserSelect('user1')}
          >
            User 1
          </li>
          <li
            className={`cursor-pointer ${
              selectedUser === 'user2' ? 'text-blue-500 font-bold' : 'text-gray-600'
            }`}
            onClick={() => handleUserSelect('user2')}
          >
            User 2
          </li>
          <li
            className={`cursor-pointer ${
              selectedUser === 'user3' ? 'text-blue-500 font-bold' : 'text-gray-600'
            }`}
            onClick={() => handleUserSelect('user3')}
          >
            User 3
          </li>
        </ul>
      </div>
      <div className="w-full md:w-3/4 text-black">
        <div className="h-screen flex flex-col bg-gray-100">
          <h1 className="text-2xl font-bold mb-4 px-4 py-2 bg-white border-b">
          Chat History with User ID: <span className="text-blue-500">{selectedUser}</span>
          </h1>
          <div className="flex-grow overflow-y-auto px-4 py-2">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`flex flex-col mb-4 ${
                  chat.sender === selectedUser ? 'self-end items-end' : 'items-start'
                }`}
              >
                <span className="text-gray-600">{chat.sender}</span>
                <p
                  className={`bg-white rounded-lg p-2 shadow-sm ${
                    chat.sender === selectedUser ? 'bg-blue-100' : 'bg-gray-200'
                  }`}
                >
                  {chat.message}
                </p>
              </div>
            ))}
          </div>
          <div className="px-4 py-2">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => handleSendMessage('Sample message')}
                className="bg-blue-500 text-white px-4 py-2 rounded-r-lg ml-2 hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChatPage;
