//Arithmetic Operators


let firstNumber = 14;
let secondNumber = 5;

let sum = firstNumber + secondNumber;
let subtruct = firstNumber - secondNumber;
let multiply = firstNumber * secondNumber;
let division = firstNumber / secondNumber;
let remainder = firstNumber % secondNumber;

let count = 0;

// count = count + 1
count++

console.log("count", count);

console.log(2**5); // 32
console.log(3**3); // 27


console.log("sum:", sum);
console.log("subtruct:", subtruct);
console.log("multiply:", multiply);
console.log("division:", division);
console.log("division:", parseInt(division));
console.log("remainder:", remainder);


// /Assignment Operators

let x = 7;

x += 1 // x = x + 1

console.log(x) // 8;


x *= 4 // x = x * 4

console.log(x) //32


x /= 2 

console.log(x); // 16


//Comparison Operators

const a = 3, b = 2;
console.log(a > b); // true


console.log(2 == 3); // false
console.log(3 == 3); // true
console.log(3 != 3); // false


console.log("10");
console.log(10);

console.log(10 == "10"); //true
console.log(10 === "10"); //false
console.log(10 !== "10"); //true


console.log("hello" + " " +  "world");




console.log("a" > "b"); //false
console.log("b" > "a"); //true


// NaN - not a number

console.log("a" - "b"); // NaN
console.log("salam" * 17); // NaN
console.log(2 / 0); // Infinity

console.log(typeof Infinity); // number
console.log(typeof NaN); // number
