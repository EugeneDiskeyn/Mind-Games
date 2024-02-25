import { getRandomNumber } from "../getRandomNumber.js";

const getRightAnswer = (number1, number2, signNumber) => {
  let rightAnswer;
  switch (signNumber) {
    case 0:
      rightAnswer = number1 + number2;
      break;
    case 1:
      rightAnswer = number1 - number2;
      break;
    case 2:
      rightAnswer = number1 * number2;
      break;
    default:
      rightAnswer = number1 + number2;
      break;
  }
  return String(rightAnswer);
}

export const calculatorGame = () => {
  const arithmeticSigns = ["+", "-", "*"];
  const signNumber = getRandomNumber(0, 2);
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const rightAnswer = getRightAnswer(number1, number2, signNumber);
  const sign = arithmeticSigns[signNumber];

  console.log(`Question: ${number1} ${sign} ${number2}`);

  return rightAnswer;
};
