import { getRandomNumber } from "../getRandomNumber.js";

const getGCD = (f_num1, f_num2) => {
  if (f_num1 === f_num2) {
    return f_num1;
  }
  return f_num1 < f_num2? getGCD(f_num1, f_num2 - f_num1) : getGCD(f_num1 - f_num2, f_num2);
}

export const GCDGame = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const rightAnswer = String(getGCD(number1, number2));

  console.log(`Question: ${number1}, ${number2}`);

  return rightAnswer;
};