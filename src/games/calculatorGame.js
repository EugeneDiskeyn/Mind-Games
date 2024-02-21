import { getRandomNumber } from "../getRandomNumber.js";

export const calculatorGame = () => {
  const signNumber = getRandomNumber(1, 3);
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  let sign;
  let rightAnswer;

  switch (signNumber) {
    case 1:
      sign = "+";
      rightAnswer = number1 + number2;
      break;
    case 2:
      sign = "-";
      rightAnswer = number1 - number2;
      break;
    case 3:
      sign = "*";
      rightAnswer = number1 * number2;
      break;
    default:
      sign = "+";
      rightAnswer = number1 + number2;
      break;
  }
  console.log(`Question: ${number1} ${sign} ${number2}`);

  return String(rightAnswer);
};
