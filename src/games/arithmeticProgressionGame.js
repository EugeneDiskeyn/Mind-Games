import { getRandomNumber } from "../getRandomNumber.js";

export const arithmeticProgressionGame = () => {
  const firstNumber = getRandomNumber(1, 100);
  const difference = getRandomNumber(1, 50);
  const indexOfHiddenNumber = getRandomNumber(1, 10);
  const sequenceLength = 10;

  let rightAnswer;
  let sequence = "";

  for (let i = 1; i < sequenceLength + 1; i++) {
    if (indexOfHiddenNumber === i) {
      rightAnswer = firstNumber + difference * i;
      sequence += "... ";
    } else {
      sequence += `${firstNumber + difference * i} `;
    }
  }

  console.log("Question ");
  console.log(sequence);

  return String(rightAnswer);
};
