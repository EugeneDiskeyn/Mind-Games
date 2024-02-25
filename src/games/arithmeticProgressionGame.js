import { getRandomNumber } from "../getRandomNumber.js";

const getSequence = (firstNumber, difference, indexOfHiddenNumber, sequenceLength) => {
  let sequence = "";
  for (let i = 1; i < sequenceLength + 1; i++) {
    if (indexOfHiddenNumber === i) {
      sequence += "... ";
    } else {
      sequence += `${firstNumber + difference * i} `;
    }
  }
  return sequence;
}

export const arithmeticProgressionGame = () => {
  const sequenceLength = 7;
  const firstNumber = getRandomNumber(1, 100);
  const difference = getRandomNumber(1, 50);
  const indexOfHiddenNumber = getRandomNumber(1, sequenceLength);
  const sequence = getSequence(firstNumber, difference, indexOfHiddenNumber, sequenceLength);
  const rightAnswer = String(firstNumber + difference * indexOfHiddenNumber);

  console.log(`Question ${sequence}`);

  return rightAnswer;
};
