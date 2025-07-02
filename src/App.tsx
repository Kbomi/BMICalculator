import React, { useState } from 'react';
import CalculatorForm from './components/CalculatorForm';
import Result from './components/Result';
import LanguageSwitcher from './components/LanguageSwitcher';
import { calculateBmi, calculateBmr } from './utils/calculations';
import en from './localization/en.json';
import ko from './localization/ko.json';
import './App.css';

interface Translations {
  title: string;
  height: string;
  weight: string;
  age: string;
  gender: string;
  male: string;
  female: string;
  calculate: string;
  bmi_result: string;
  bmr_result: string;
  underweight: string;
  normal_weight: string;
  overweight: string;
  obesity: string;
}

const translations: { en: Translations; ko: Translations } = { en, ko };

function App() {
  const [language, setLanguage] = useState<'en' | 'ko'>('en');
  const [bmi, setBmi] = useState<number>(0);
  const [bmr, setBmr] = useState<number>(0);

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

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="absolute top-4 right-4">
        <LanguageSwitcher onSwitch={handleLanguageSwitch} />
      </div>
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-900">{translations[language].title}</h1>
        <CalculatorForm
          translations={translations[language]}
          onCalculate={handleCalculate}
        />
        <Result translations={translations[language]} bmi={bmi} bmr={bmr} />
      </div>
    </div>
  );
}

export default App;