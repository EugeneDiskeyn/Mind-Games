import { getRandomNumber } from "../getRandomNumber.js";

const getIsNumberPrime = (randNumber) => {
    const numberSquare = Math.floor(Math.sqrt(randNumber)) + 1;

    for (let i = 2; i < numberSquare; i++) {
        if (randNumber % i === 0) {
            return "no";
        }
    }

    return "yes";
}

const getOddNumber = () => {
    return Math.floor(getRandomNumber(1, 99) / 2) * 2 + 1;
}

export const primeNumberGame = () => {
    const randNumber = getOddNumber();
    const rightAnswer = getIsNumberPrime(randNumber);

    console.log(`Question: ${randNumber}`);

    return rightAnswer;
}