const cli = require("../src/cli");

console.log("node bin/brain-games.js");
console.log("Welcome to the Brain Games!");

const name = cli.getName();
console.log("Hello,", name);