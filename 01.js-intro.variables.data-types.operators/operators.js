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


let number = 40;

number % 2 === 0 ? console.log(`${number} is even`) : console.log(`${number} is odd`);


const monthlySalary = 2000;

const yearlySalary  = monthlySalary * 12

const radius = 8;
const S = Math.PI * radius ** 2;

console.log(S);


let text = "Javascript is awesome!"

let lengthOfText = text.length

console.log(lengthOfText);

let m = 12, n = 45, l = 32;

console.log(Math.max(m, n, l));
console.log(Math.min(m, n, l));


let hello = "hello world!"

let message = hello

console.log(message);
console.log(hello);


// Logical Operators

//falthy values: false, 0, "", '', ``, null, undefined, NaN
//truth values: 17, -17, "hello", "a", " ", [], {}
console.log(10 > 6 && 6 > 2); // true
console.log(2 > 6 && 6 > 2); // false

console.log("hello" && 6 > 2 && 78); // 78
console.log("hello" && 6 < 2 && 78); // false
console.log(12 && "hello" && null && []); // null
console.log(12 && "hello" && []); // []
console.log(undefined && 65 && [] && "hello"); //undefined



console.log(10 > 6 || 6 > 2); // true
console.log(2 > 6 || 6 > 2); //true

console.log("hello" || 6 < 2 || 78); // "hello"
console.log(NaN || 6 < 2 || 78); // 78
console.log(NaN || 6 < 2 || null); // null
console.log(NaN || 6 < 2 || {} || undefined); // {}

// logical NOT
let num = 9
console.log(!(num == 3));  // true
console.log(!(num < 2));  // true

const roles = ["admin", "superAdmin"]

if(!roles.includes("admin")){
    console.log("forbidden! u do not have an access!");
}else{
    console.log("u have an access!"); 
}

console.log("Kanan" + " " + "Amirov");
console.log("a" - "b"); // NaN
