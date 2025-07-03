
import { Flame, TrendingUp, UserCheck } from 'lucide-react';
import React from 'react';
import { Translations } from '../App';

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
    <div className="space-y-6">
      {/* BMI Result Card */}
      <div className='w-full rounded-lg border bg-card text-card-foreground shadow-sm'>
        <div className='p-6 flex items-center gap-3'>
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-primary-foreground" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{translations.bmiTitle}</h2>
        </div>

        <div className='space-y-6 p-6 pt-0'>
          <div className="text-center py-2">
            <div className={`text-4xl font-bold mb-2 ${bmi > 0 ? getBmiClass(bmi) : "text-muted-foreground"}`}>
              {bmi > 0 ? bmi : "--.-"}
            </div>
            <div className={`text-sm ${bmi > 0 ? getBmiClass(bmi) : "text-muted-foreground"} font-medium`}>
              {bmi > 0 ? getBmiCategory(bmi) : ''}
            </div>
          </div>

          {/* BMI Categories */}
          <div className="space-y-2 mt-6">
            <div className="flex items-center justify-between p-2 rounded-lg border">
              <span className="text-sm text-muted-foreground">{translations.underweight}</span>
              <span className="text-sm font-medium text-blue-600">&lt; 18.5</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg border">
              <span className="text-sm text-muted-foreground">{translations.normal_weight}</span>
              <span className="text-sm font-medium text-green-600">18.5 - 24.9</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg border">
              <span className="text-sm text-muted-foreground">{translations.overweight}</span>
              <span className="text-sm font-medium text-orange-500">25.0 - 29.9</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg border">
              <span className="text-sm text-muted-foreground">{translations.obesity}</span>
              <span className="text-sm font-medium text-red-500">≥ 30.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* BMR Result Card */}
      <div className='w-full rounded-lg border bg-card text-card-foreground shadow-sm'>
        <div className='p-6 flex items-center gap-3'>
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Flame className="h-5 w-5 text-primary-foreground" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{translations.bmrTitle}</h2>
        </div>

        <div className='space-y-6 p-6 pt-0'>
          
          <div className="text-center py-2">
            <div className={`text-4xl font-bold mb-2 ${bmr > 0 ? 'text-gray-800 dark:text-gray-200' : "text-muted-foreground"}`}>
              {bmr > 0 ? bmr : "--.-"}
            </div>
            <div className={`text-sm font-medium`}>
              {bmr > 0 ? translations.caloriesPerDay : ''}
            </div>
          </div>
          
        </div>
      </div>

      {bmr > 0 && (
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
           {bmr} kcal
        </p>
      )}
    </div>
  );
};

export default Result;
