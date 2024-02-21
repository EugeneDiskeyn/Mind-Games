import readlineSync from "readline-sync";

export const gameTemplate = (currentGame) => {
  const numberOfQuestions = 3;

  for (let i = 0; i < numberOfQuestions; i++) {
    const rightAnswer = currentGame();

    const userAnswer = readlineSync.question("Your answer: ");

    if (rightAnswer === userAnswer) {
      console.log("Correct! Let's move on");
      console.log("");
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. The right answer is '${rightAnswer}'`,
      );
      return;
    }
  }
};