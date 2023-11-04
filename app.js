const {reverseString} = require("./reverString");
const {calculate} = require("./penjumlahan");
const {celsiusToFahrenheit} = require("./fahrenheit");
const {getRandomNumber} = require("./angkaRandom");

const hasil1 = reverseString("!idla, ollah");
const hasil2 = calculate(2, 8);
const hasil3 = celsiusToFahrenheit(12);
const hasil4 = getRandomNumber();

console.log(hasil1);
console.log(hasil2);
console.log(hasil3);
console.log(hasil4);
