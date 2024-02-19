export const evenNumGame = () => {

    const randNumber =  Math.floor(Math.random() * 100);
    const rightAnswer = randNumber % 2 === 0 ? "yes" : "no";

    console.log("Question: " + randNumber);

    return rightAnswer;
}