
console.log(Math.PI);
console.log(Math.max(3,7,8,2,4)); // 8
console.log(Math.min(3,7,8,2,4)); // 2

const numbers = [44, 73, 90, 32, 63]

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

console.log(Math.abs(-35)); // 35


console.log(Math.pow(2, 3)); // 8
console.log(2**3); // 8


console.log(Math.round(3.475698)); // 3
console.log(Math.round(3.775698)); // 4


console.log(Math.floor(3.256)); // 3
console.log(Math.ceil(3.256)); // 4

console.log(Math.trunc(3.256)); // 3
console.log(Math.trunc(3.856)); // 3


console.log(Math.sqrt(49)); // 7



// console.log(Math.random()); // Returns pseudo-random float number between 0 and 1

// console.log(Math.random() * 10);
console.log(Math.ceil(Math.random() * 10));

let min = 20;
let max = 30;
// Math.round(Math.random() * (max - min) + min)


console.log(Math.round(Math.random() * 10 + 80));  // 80-90
