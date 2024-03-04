import { getRandomNumber } from "../getRandomNumber.js";

const getRightAnswer = (number1, number2, signNumber) => {
  switch (signNumber) {
    case 0:
      return number1 + number2;
    case 1:
      return number1 - number2;
    case 2:
      return number1 * number2;
    default:
      return number1 + number2;
  }
}

export const calculatorGame = () => {
  const arithmeticSigns = ["+", "-", "*"];
  const signNumber = getRandomNumber(0, 2);
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const rightAnswer = String(getRightAnswer(number1, number2, signNumber));
  const sign = arithmeticSigns[signNumber];

  console.log(`Question: ${number1} ${sign} ${number2}`);

  return rightAnswer;
};
