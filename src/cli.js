exports.getName = function() {
    const readlineSync = require("../lib/readline-sync");
    return readlineSync.question("Type your name here: ");
}