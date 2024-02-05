exports.evenNumGame = () => {
    const readlineSync = require("../lib/readline-sync");

    let isAnswerRight = true;
    let rightAnswerCounter = 0;

    console.log("Answer 'yes' if the number is even, otherwise answer 'no'");

    while (isAnswerRight && rightAnswerCounter !== 3) {
        const randNumber =  Math.floor(Math.random() * 100);
        const rightAnswer = randNumber % 2 == 0 ? "yes" : "no";

        console.log("Question: " + randNumber);

        const answer = readlineSync.question("Your answer: ");

        if (answer === rightAnswer) {
            rightAnswerCounter++;
            console.log("Correct! Let's move on");
        } else {
            console.log("'" + answer + "'" + " is wrong answer ;(. The right answer was " + "'" + rightAnswer + "'");
            isAnswerRight = false;
        }
    }
    
    return isAnswerRight;
}