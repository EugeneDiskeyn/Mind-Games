import { getName } from "../src/cli.js";
import { evenNumGame } from "../src/evenNumGame.js";
import { calculatorGame } from "../src/calculatorGame.js";

let isGameContinue = true;

console.log("node bin/brain-games.js");
console.log("Welcome to the Brain Games!");

const name = getName();
console.log("Hello,", name);

while (isGameContinue) {
    isGameContinue = evenNumGame();
    console.log("");
    isGameContinue = calculatorGame();
    break;
}

if (isGameContinue !== true) {
    console.log("Let's try again, " + name + " !");
}
