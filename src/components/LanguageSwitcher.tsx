
import React from 'react';

interface LanguageSwitcherProps {
  onSwitch: (lang: 'en' | 'ko') => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ onSwitch }) => {
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => onSwitch('en')}
        className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        English
      </button>
      <button
        onClick={() => onSwitch('ko')}
        className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        한국어
      </button>
    </div>
  );
};

export default LanguageSwitcher;
