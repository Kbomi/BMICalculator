
export const calculateBmi = (height: number, weight: number): string => {
  if (height > 0 && weight > 0) {
    return (weight / ((height / 100) * (height / 100))).toFixed(1);
  }
  return '0';
};

export const calculateBmr = (height: number, weight: number, age: number, gender: 'male' | 'female'): string => {
  if (height > 0 && weight > 0 && age > 0) {
    if (gender === 'male') {
      return (66.47 + (13.75 * weight) + (5 * height) - (6.76 * age)).toFixed(0);
    } else {
      return (655.1 + (9.59 * weight) + (1.85 * height) - (4.68 * age)).toFixed(0);
    }
  }
  return '0';
};
