import { getRandomNumber } from "../getRandomNumber.js";

export const gcdGame = () => {
  let number1 = getRandomNumber(100, 1);
  let number2 = getRandomNumber(100, 1);

  console.log(`Question: ${number1}, ${number2}`);

  while (number1 !== number2) {
    number1 < number2 ? (number2 -= number1) : (number1 -= number2);
  }
  return String(number1);
};
