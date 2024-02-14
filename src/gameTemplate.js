import readlineSync from "readline-sync"

export const gameTemplate = (currentGame) => {
    let isAnswerRight = true;
    let rightAnswerCounter = 0;

    while (isAnswerRight && rightAnswerCounter !== 3) {

        const rightAnswer = currentGame();
        
        const userAnswer = readlineSync.question("Your answer: ");

        if (rightAnswer === userAnswer) {
            console.log("Correct! Let's move on");
            console.log("");
            rightAnswerCounter++;
        } else {
            console.log("'" + userAnswer + "'" + " is wrong answer ;(. The right answer is " + rightAnswer);
            isAnswerRight = false;
        }
    }
}