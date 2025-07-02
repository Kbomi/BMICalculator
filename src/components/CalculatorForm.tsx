
import React from 'react';

interface Translations {
  height: string;
  weight: string;
  age: string;
  gender: string;
  male: string;
  female: string;
  calculate: string;
}

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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">{translations.height}</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">{translations.weight}</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">{translations.age}</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">{translations.gender}</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value as 'male' | 'female')}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="male">{translations.male}</option>
          <option value="female">{translations.female}</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {translations.calculate}
      </button>
    </form>
  );
};

export default CalculatorForm;
