export const gcdGame = () => {
    let number1 = Math.floor(Math.random() * 99) + 1;
    let number2 = Math.floor(Math.random() * 99) + 1;

    console.log("Question: " + number1 + ", " + number2);

    while (number1 !== number2) {
        number1 < number2? number2 -= number1 : number1 -= number2;
    }
    return String(number1);
}