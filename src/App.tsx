import React, { useState, useEffect } from 'react';
import CalculatorForm from './components/CalculatorForm';
import Result from './components/Result';
import LanguageSwitcher from './components/LanguageSwitcher';
import { calculateBmi, calculateBmr } from './utils/calculations';
import en from './localization/en.json';
import ko from './localization/ko.json';
import './App.css';
import { Heart, Moon, Sun } from 'lucide-react';

export interface Translations {
  title: string;
  subtitle: string;
  height: string;
  weight: string;
  age: string;
  gender: string;
  male: string;
  female: string;
  calculate: string;
  underweight: string;
  normal_weight: string;
  overweight: string;
  obesity: string;
  lightMode: string;
  darkMode: string;
  inputInfo: string;
  bmiTitle: string;
  bmrTitle: string;
  caloriesPerDay: string;
}

const translations: { en: Translations; ko: Translations } = { en, ko };

function App() {
  const [language, setLanguage] = useState<'en' | 'ko'>('en');
  const [bmi, setBmi] = useState<number>(0);
  const [bmr, setBmr] = useState<number>(0);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleCalculate = ({ height, weight, age, gender }: {
    height: number;
    weight: number;
    age: number;
    gender: 'male' | 'female';
  }) => {
    setBmi(Number(calculateBmi(height, weight)));
    setBmr(Number(calculateBmr(height, weight, age, gender)));
  };

  const handleLanguageSwitch = (lang: 'en' | 'ko') => {
    setLanguage(lang);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`bg-background dark:bg-gray-900 min-h-screen transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      {/* Header */}
      <header className="bg-card shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{translations[language].title}</h1>
                <p className="text-muted-foreground text-sm">{translations[language].subtitle}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
            <LanguageSwitcher onSwitch={handleLanguageSwitch} currentLanguage={language} />

            <button
              onClick={toggleDarkMode}
              className={`px-4 py-2 text-sm font-medium ${darkMode ? 'text-gray-900' : 'text-white'} ${darkMode ? 'bg-gray-200' : 'bg-gray-800'} rounded-md ${darkMode ? 'hover:bg-gray-300' : 'hover:bg-gray-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
            >
              {darkMode ? <Sun className="inline h-4 w-4 mr-2" /> : <Moon className="inline h-4 w-4 mr-2" />}
              {darkMode ? translations[language].lightMode : translations[language].darkMode}
            </button>
            </div>
          </div>
        </div>
      </header>
    
      <div className="max-w-4xl mx-auto px-4 py-8 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="grid lg:grid-cols-2 gap-8">
          <CalculatorForm
            translations={translations[language]}
            onCalculate={handleCalculate}
          />
          <Result translations={translations[language]} bmi={bmi} bmr={bmr} />
        </div>
      </div>
    </div>
  );
}

export default App;