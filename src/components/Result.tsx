
import React from 'react';

interface Translations {
  underweight: string;
  normal_weight: string;
  overweight: string;
  obesity: string;
  bmi_result: string;
  bmr_result: string;
}

interface ResultProps {
  translations: Translations;
  bmi: number;
  bmr: number;
}

const Result: React.FC<ResultProps> = ({ translations, bmi, bmr }) => {
  const getBmiCategory = (bmi: number): string => {
    if (bmi < 18.5) return translations.underweight;
    if (bmi >= 18.5 && bmi < 23) return translations.normal_weight;
    if (bmi >= 23 && bmi < 25) return translations.overweight;
    return translations.obesity;
  };

  const getBmiClass = (bmi: number): string => {
    if (bmi < 18.5) return 'text-blue-500';
    if (bmi >= 18.5 && bmi < 23) return 'text-green-500';
    if (bmi >= 23 && bmi < 25) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="mt-6 text-center">
      {bmi > 0 && (
        <p className={`text-lg font-semibold ${getBmiClass(bmi)}`}>
          {translations.bmi_result} {bmi} ({getBmiCategory(bmi)})
        </p>
      )}
      {bmr > 0 && (
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {translations.bmr_result} {bmr} kcal
        </p>
      )}
    </div>
  );
};

export default Result;
