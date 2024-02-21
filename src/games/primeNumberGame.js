import { getRandomNumber } from "../getRandomNumber.js";

export const primeNumberGame = () => {
    const randNumber =  getRandomNumber(100, 1);
    const numberSquare = Math.floor(Math.sqrt(randNumber)) + 1;

    console.log(`Question: ${randNumber}`);

    for (let i = 2; i < numberSquare; i++) {
        if (randNumber % i === 0) {
            return "no";
        }
    }

    return "yes";
}