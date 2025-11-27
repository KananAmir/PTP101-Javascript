// for, while, do while, for of, for in


// for(start, condition, step){

// }


// for(let i = 0; i <= 10; i = i+2){
//     console.log(i);
// }

// for(let i = 0; i <= 10; i+=2){
//     console.log(i);
// }

// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

// for(let i = 2; i <= 100; i+=2){
//     console.log(i);
// }


//even numbers
// for(let i = 1; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

//odd numbers
// for(let i = 1; i <= 100; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

console.log("-------------------");


// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }


//sum of numbers bw 1-10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    // sum = sum + i;
    // console.log(`${sum} + ${i} = ${sum + i}`);
    sum += i;
}



console.log("sum", sum);

let count = 0

//infine loop
// break vs continue

for (; ;) {
    //     //     console.log("hello");
    count++
    console.log(count);

    if (count === 10000) {
        break;
    }

}


for (let i = 1; i <= 10; i++) {
    if (i === 5 || i === 7) {
        continue;
    }

    console.log(i);
}


// while loop

// while(condition){

// }

let c = 0

// while (true) {
//     c++;
//     console.log(c);
//     if (c === 5000) {
//         break;
//     }
// }

// while (c < 5000) {
//     c++;
//     console.log(c);
// }

console.log("--------------------");


do {
    c++
    console.log(c);
}
while (c < 10)


console.log("--------------------");


let number = 372
let sumOfDigits = 0

while(number>0){
    let digit = number % 10;
    console.log(digit);
    number = (number - digit) / 10

    sumOfDigits+=digit
    
}

console.log(sumOfDigits);


