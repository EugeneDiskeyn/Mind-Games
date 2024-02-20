export const arithmeticProgressionGame = () => {
    const firstNumber = Math.floor(Math.random() * 99) + 1;
    const difference = Math.floor(Math.random() * 49) + 1;
    const indexOfHiddenNumber = Math.floor(Math.random() * 9) + 1;
    const sequenceLength = 10;

    let rightAnswer;
    let sequence = "";

    for (let i = 1; i < sequenceLength + 1; i++) {
        if (indexOfHiddenNumber === i) {
            rightAnswer = firstNumber + difference * i;
            sequence += "... ";
        } else {
            sequence += `${firstNumber} ${difference * i} `;
        }
    }
    
    console.log("Question ");
    console.log(sequence);

    return String(rightAnswer);
}