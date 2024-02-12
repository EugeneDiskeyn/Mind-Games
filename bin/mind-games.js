import readlineSync from "readline-sync"

import { getName } from "../src/cli.js";
import { index } from "../src/index.js"

let isGameContinue = true;

console.log("node bin/brain-games.js");
console.log("Welcome to the Brain Games!");

const name = getName();
console.log("Hello,", name);

while (isGameContinue) {
    console.log("");
    console.log("1. Even or odd");
    console.log("2. Calculator");
    console.log("0. exit");
    console.log("");
    
    const gameNumber = readlineSync.question("Choose the game you would like to play(type the number of the game) ");
    console.log("");

    if (gameNumber !== "0") { 
        index(gameNumber);
    } else {
        isGameContinue = false;
    }
}