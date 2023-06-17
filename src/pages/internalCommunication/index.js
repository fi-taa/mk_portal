import React from 'react';
import Link from 'next/link';

const ChatRoomSelectionPage = () => {
  const users = ['user1', 'user2', 'user3']; // Replace with your actual user data

  return (
    <div>
      <h1>Select a User to Chat With</h1>
      <ul>
        {users.map((user) => (
          <li key={user}>
            <Link href={`/internalCommunication/${user}`} passHref>
              <span>{user}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatRoomSelectionPage;
