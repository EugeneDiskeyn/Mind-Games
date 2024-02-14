export const primeNumberGame = () => {
    const randNumber =  Math.floor(Math.random() * 99) + 1;

    console.log("Question: " + randNumber);

    for (let i = 2; i < Math.floor(Math.sqrt(randNumber)) + 1; i++) {
        if (randNumber % i === 0) {
            return "no";
        }
    }

    return "yes";
}