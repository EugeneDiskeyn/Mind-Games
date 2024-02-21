import { getRandomNumber } from "../getRandomNumber.js";

export const evenNumGame = () => {
  const randNumber = getRandomNumber(0, 100);
  const rightAnswer = randNumber % 2 === 0 ? "yes" : "no";

  console.log(`Question: ${randNumber}`);

  return rightAnswer;
};
