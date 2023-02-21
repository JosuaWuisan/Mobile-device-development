export default function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  let category;

  if (bmi < 18.5) {
    category = 'Terlalu ringan';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = 'Biasa';
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = 'Diet jo tamang';
  } else if (bmi >= 30) {
    category = 'Obese';
  }

  return { bmi, category };
}

