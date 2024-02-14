import { evenNumGame } from "./games/evenNumGame.js";
import { calculatorGame } from "./games/calculatorGame.js";
import { gcdGame } from "./games/GCDGame.js";
import { gameTemplate } from "./gameTemplate.js";

const index = (gameNumber) => {
    let isAnswerValid = true;
    let currentGame;

    switch (gameNumber) {
        case "1":
            console.log("Answer 'yes' if the number is even, otherwise answer 'no'");
            currentGame = evenNumGame;
            break;
        case "2":
            console.log("What is the result of the expression?");
            currentGame = calculatorGame;
            break;
        case "3": 
            console.log("Find the greatest common divisor of given numbers");
            currentGame = gcdGame;
            break;
        case "4": 
        case "5": 
        default:
            isAnswerValid = false;
            break;
    }


    isAnswerValid? gameTemplate(currentGame) : console.log("Oops, something's wrong");
}

export { index }