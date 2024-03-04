import { getRandomNumber } from "../getRandomNumber.js";

const getProgression = (firstNumber, difference, indexOfHiddenNumber, sequenceLength) => {
  const progression = [];
  for (let i = 0; i < sequenceLength; i++) {
    progression[i] = `${firstNumber + difference * (i+1)}`;
  }
  progression[indexOfHiddenNumber-1] = "...";
  return progression.join(", ");
}

export const arithmeticProgressionGame = () => {
  const sequenceLength = 7;
  const firstNumber = getRandomNumber(1, 100);
  const difference = getRandomNumber(1, 50);
  const indexOfHiddenNumber = getRandomNumber(1, sequenceLength);
  const sequence = getProgression(firstNumber, difference, indexOfHiddenNumber, sequenceLength);
  const rightAnswer = String(firstNumber + difference * indexOfHiddenNumber);

  console.log(`Question ${sequence}`);

  return rightAnswer;
};
