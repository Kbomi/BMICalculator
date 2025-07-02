
import { Globe } from 'lucide-react';
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface LanguageSwitcherProps {
  onSwitch: (lang: 'en' | 'ko') => void;
  currentLanguage: 'en' | 'ko';
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ onSwitch, currentLanguage }) => {
  const toggleLanguage = () => {
    onSwitch(currentLanguage === 'en' ? 'ko' : 'en');
  };

  const languageOptions = [
  { value: "ko", label: "한국어", flag: "🇰🇷" },
  { value: "en", label: "English", flag: "🇺🇸" },
  ];
  const currentLanguageOption = languageOptions.find(option => option.value === currentLanguage);

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <Select value={currentLanguage} onValueChange={(value: 'en' | 'ko') => onSwitch(value)}>
        <SelectTrigger className="w-[140px]">
          <SelectValue>
            <div className="flex items-center gap-2">
              <span>{currentLanguageOption?.flag}</span>
              <span className="text-sm">{currentLanguageOption?.label}</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {languageOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              <div className="flex items-center gap-2">
                <span>{option.flag}</span>
                <span>{option.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      {currentLanguage === 'en' ? '한국어' : 'English'}
    </button>
  );
};

export default LanguageSwitcher;
