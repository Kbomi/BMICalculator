
import { Calendar, Ruler, UserCheck, Users, Weight } from 'lucide-react';
import React from 'react';
import { Translations } from '../App';

interface CalculatorFormProps {
  translations: Translations;
  onCalculate: (data: { height: number; weight: number; age: number; gender: 'male' | 'female' }) => void;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({ translations, onCalculate }) => {
  const [height, setHeight] = React.useState<string>('');
  const [weight, setWeight] = React.useState<string>('');
  const [age, setAge] = React.useState<string>('');
  const [gender, setGender] = React.useState<'male' | 'female'>('male');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate({
      height: parseFloat(height),
      weight: parseFloat(weight),
      age: parseInt(age),
      gender,
    });
  };

  return (
    <div className='w-full rounded-lg border bg-card text-card-foreground shadow-sm'>
      <div className='p-6 flex items-center gap-3'>
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <UserCheck className="h-5 w-5 text-primary-foreground" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{translations.inputInfo}</h2>
      </div>
      
      <div className='space-y-6 p-6 pt-0'>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="flex items-center gap-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              <Ruler className="h-4 w-4 text-muted-foreground" />
              {translations.height}
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              <Weight className="h-4 w-4 text-muted-foreground" />
              {translations.weight}
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              {translations.age}
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              <Users className="h-4 w-4 text-muted-foreground" />
              {translations.gender}
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value as 'male' | 'female')}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-gray-900 dark:text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="male">{translations.male}</option>
              <option value="female">{translations.female}</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full h-12 flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {translations.calculate}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CalculatorForm;
