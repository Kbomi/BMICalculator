
export const calculateBmi = (height: number, weight: number): string => {
  if (height > 0 && weight > 0) {
    return (weight / ((height / 100) * (height / 100))).toFixed(2);
  }
  return '0';
};

export const calculateBmr = (height: number, weight: number, age: number, gender: 'male' | 'female'): string => {
  if (height > 0 && weight > 0 && age > 0) {
    if (gender === 'male') {
      return (10 * weight + 6.25 * height - 5 * age + 5).toFixed(2);
    } else {
      return (10 * weight + 6.25 * height - 5 * age - 161).toFixed(2);
    }
  }
  return '0';
};
