export const calculatorGame = () => {
    const signNumber = Math.floor(Math.random() * 2) + 1;
    const number1 = Math.floor(Math.random() * 99) + 1;
    const number2 = Math.floor(Math.random() * 99) + 1;
    
    let sign;
    let rightAnswer;
    
    switch (signNumber) {
        case 1:
            sign = "+";
            rightAnswer = number1 + number2;
            break;
        case 2:
            sign = "-";
            rightAnswer = number1 - number2;
            break;
        case 3:
            sign = "*";
            rightAnswer = number1 * number2;
            break;
    }
    console.log(`Question: ${number1} ${sign} ${number2}`);
    
    return String(rightAnswer);
}