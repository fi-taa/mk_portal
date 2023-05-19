import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 text-white text-center">
      <p>&copy; {new Date().getFullYear()} Your Web Portal</p>
    </footer>
  );
};

export default Footer;
