import readlineSync from "readline-sync";

export const getName = () => {
  return readlineSync.question("Type your name here: ");
};
