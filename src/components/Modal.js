import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 text-black">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-2 w-full sm:w-3/4 lg:w-1/2 lg:h-3/4">
          <div className="relative">
            <button
              className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-800"
              onClick={onClose}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="mt-8  overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
