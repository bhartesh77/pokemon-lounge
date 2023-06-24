import React from 'react';
import { FaDesktop } from 'react-icons/fa';
import { FiAlertTriangle } from 'react-icons/fi';

const MobileWarning = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm">
        <div className="flex items-center justify-center">
          <FiAlertTriangle className="text-red-500 text-4xl mr-2" />
          <h2 className="text-2xl font-bold">Mobile View Not Supported</h2>
        </div>
        <p className="text-gray-700 my-4">
          Please open the app on a desktop to access the full experience.
        </p>
        <div className="flex items-center justify-center">
          <FaDesktop className="text-gray-500 text-6xl" />
        </div>
      </div>
    </div>
  );
};

export default MobileWarning;
