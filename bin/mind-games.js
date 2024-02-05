const cli = require("../src/cli");
const evenNumGame = require("../src/evenNumGame");
let isGameContinue = true;

console.log("node bin/brain-games.js");
console.log("Welcome to the Brain Games!");

const name = cli.getName();
console.log("Hello,", name);

while (isGameContinue) {
    isGameContinue = evenNumGame.evenNumGame();
    break;
}

if (isGameContinue !== true) {
    console.log("Let's try again, " + name + " !");
}
