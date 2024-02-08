import readlineSync from "readline-sync"

export const calculatorGame = () => {
    const signNumber = Math.floor(Math.random() * 2) + 1;
    let isAnswerRight = true;
    let rightAnswerCounter = 0;
    let sign;
    let rightAnswer;

    console.log("What is the result of the expression?");
    while (isAnswerRight && rightAnswerCounter !== 3) {
    
    const number1 = Math.floor(Math.random() * 99) + 1;
    const number2 = Math.floor(Math.random() * 99) + 1;

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
        }

        console.log("Question: " + number1 + sign + number2);
        const userAnswer = readlineSync.question("Ypur answer: ");
        if (rightAnswer === Number(userAnswer)) {
            console.log("Correct!");
            rightAnswerCounter++;
        } else {
            console.log(userAnswer + " is wrong answer ;(. The right answer is " + rightAnswer);
            isAnswerRight = false;
        }
    }
    return isAnswerRight;
}