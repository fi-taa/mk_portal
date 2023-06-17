import React, { useState } from 'react';

const UserSearch = ({ onUserSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      onUserSelect(searchTerm);
      setSearchTerm('');
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex">
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={handleInputChange}
        className="flex-grow px-4 py-2 rounded-l-md outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default UserSearch;
