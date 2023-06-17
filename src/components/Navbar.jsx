import React from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <nav className="bg-[#146C94] py-4">
      <ul className="flex justify-center space-x-4 text-white">
        <li>
          <button
            onClick={() => handleNavigation('/')}
            className={`hover:border-b-2 hover:border-white ${
              router.pathname === '/' ? 'border-b-2 border-white' : ''
            }`}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation('/history')}
            className={`hover:border-b-2 hover:border-white ${
              router.pathname === '/history' ? 'border-b-2 border-white' : ''
            }`}
          >
            History
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation('/news')}
            className={`hover:border-b-2 hover:border-white ${
              router.pathname === '/news' ? 'border-b-2 border-white' : ''
            }`}
          >
            News
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation('/districtCenters')}
            className={`hover:border-b-2 hover:border-white ${
              router.pathname === '/districtCenters' ? 'border-b-2 border-white' : ''
            }`}
          >
            District Centers
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation('/internalCommunication')}
            className={`hover:border-b-2 hover:border-white ${
              router.pathname === '/internalCommunication' ? 'border-b-2 border-white' : ''
            }`}
          >
            Internal Communication
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
