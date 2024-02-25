import { getRandomNumber } from "../getRandomNumber.js";

const getRightAnswer =(f_number1, f_number2) => {
  while (f_number1 !== f_number2) {
    f_number1 < f_number2 ? (f_number2 -= f_number1) : (f_number1 -= f_number2);
  }
  return String(f_number1);
}

export const GCDGame = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const rightAnswer = getRightAnswer(number1, number2);

  console.log(`Question: ${number1}, ${number2}`);

  return rightAnswer;
};