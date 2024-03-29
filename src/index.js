import { evenNumGame } from "./games/evenNumGame.js";
import { calculatorGame } from "./games/calculatorGame.js";
import { GCDGame } from "./games/GCDGame.js";
import { arithmeticProgressionGame } from "./games/arithmeticProgressionGame.js";
import { primeNumberGame } from "./games/primeNumberGame.js";
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
      currentGame = GCDGame;
      break;
    case "4":
      console.log("What number is missing in the progression?");
      currentGame = arithmeticProgressionGame;
      break;
    case "5":
      console.log(
        "Answer 'yes' if given number is prime. Otherwise answer 'no'",
      );
      currentGame = primeNumberGame;
      break;
    default:
      isAnswerValid = false;
      break;
  }

  isAnswerValid
    ? gameTemplate(currentGame)
    : console.log("Oops, something's wrong");
};

export { index };
