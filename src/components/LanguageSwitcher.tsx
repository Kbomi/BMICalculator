
import { Globe } from 'lucide-react';
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface LanguageSwitcherProps {
  onSwitch: (lang: 'en' | 'ko') => void;
  currentLanguage: 'en' | 'ko';
  darkMode: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ onSwitch, currentLanguage, darkMode }) => {
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
            <SelectItem key={option.value} value={option.value} className={`bg-background dark:bg-gray-900 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
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
};

export default LanguageSwitcher;
