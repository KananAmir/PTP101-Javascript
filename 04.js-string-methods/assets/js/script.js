// 1) Verilmiş ədədin bütün bölənlərini tapın (console'a yazdırın)
// Input:
// let number = 12

// for(let i = 1; i <= number; i++){
//     if(number % i === 0){
//         console.log(i);
//     }
// }



// 2) Verilmiş ədədin bölənlərinin sayını tapın

// Input: 
// let number = 12

// 1, 2, 3, 4, 6, 12 →

// Output: 12 ədədinin 6 böləni var
//  let number =25
//  let count=0
//  for(let i = 1; i<=number; i++)
//  {
//     if(number % i===0){
//         count++
//     }



//  }
//  console.log(`${number} ededinin ${count} boleni var`)

// 3) 0–100 arası tək və cüt ədədlərin cəmini tapın (for loopu ilə)

// Output: Tək ədədlərin cəmi: 2500   // (1 + 3 + 5 + ... + 99)
// Cüt ədədlərin cəmi: 2550   // (0 + 2 + 4 + ... + 100)

// let evenSum = 0;
// let oddSum = 0;

// for (let index = 0; index <= 100; index++) {
//     if (index % 2 === 0) {
//         evenSum += index;
//     }
//     else {
//         oddSum += index;
//     }


// }
// console.log(`Cüt ədədlərin cəmi: ${evenSum}`);
// console.log(`Tək ədədlərin cəmi:  ${oddSum}`);


// 4) Mətndəki boşluq simvollarının sayını tapınlet sampleNews = `As software developers, the natural tendency is to start developing applications based on your ownhands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;

// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your ownhands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;
// let count = 0
// for(let i = 0; i<sampleNews.length ; i++){
//     if(sampleNews[i] === " "){
//         count++
//     }
// }
// console.log(count + " bosluq var")

//  5) Daxil olunan ədədin array-də olub-olmadığını yoxlayın  const numbers = [3, 7, 12, 20, 25];

// Input: 12

// Output: 12 array daxilində mövcuddur
// const numbers = [3, 7, 12, 12, 20, 25];
// let input = 12
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === input) {
//         console.log(`${input} array daxilinde movcuddur`);
//         break
//     }

// }

// let found = false
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === input) {
//         found = true
//         break
//     }
// }
// if (found===true) {
//     console.log(`${input} array daxilinde movcuddur`);
// }
// else {
//     console.log(`${input} array daxilinde movcud deyil`);
// }



// 6) Array-də minimum və maksimum elementi tapın

// Verilmiş bir ədədlər massivində (array) olan və ədədi tapan proqram yazın.

// Math.min və Math.max istifadə etmək olmaz, öz məntiqinizlə tapın.

// const numbers = [4, 2, 7, 9, 3, 12, 46, 32, 19];


// Output: Minimum: 2Maximum: 46

// const numbers = [5, 4, 2, 7];

// let min = numbers[0]
// let max = numbers[0]

// for (let index = 1; index < numbers.length; index++) {
//     if (numbers[index] < min) {
//         min = numbers[index]
//     }
//     if (numbers[index] > max) {
//         max = numbers[index]

//     }
// }
// console.log( "minimum" , min);
// console.log( "maximum" , max);





//  1) Arraydəki ən uzun sözü tapınconst fruits = ["alma", "banan", "qarpız", " portağal  ", "ananas", "nar"];

// Output: Ən uzun söz: "portağal"
// Uzunluq: 8



// const fruits = ["alma", "banan", "qarpız", "ananas", "nar"];

// let maxLengthElement = fruits[0]

// for (let i = 1; i < fruits.length; i++) {
//     if(maxLengthElement.length < fruits[i].length){ 
//         maxLengthElement = fruits[i]
//     }
// }


// console.log(maxLengthElement);


const fruits = ["alma", "banan", "qarpız", "ananas", "nar"];

let maxLengthElement = fruits[0]

for (let i = 1; i < fruits.length; i++) {

    if(maxLengthElement.length < fruits[i].length){ 
        maxLengthElement = fruits[i]
    }
}


console.log(maxLengthElement.length);



for (let i = 0; i < fruits.length; i++) {
    if(fruits[i].length === maxLengthElement.length){
        console.log(fruits[i]);
    }
    
}




// 2) Verilən string-in polindrom olub-olmadığını yoxlayın

// Input 1:
let str = "racecar"

// Output 1: "racecar" polindromdur


// Input2:
// let str = "hello"


let reverseStr = '';
for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i]
}

 if(str === reverseStr){
     console.log(`${str} is polidrom`);
 }else{
     console.log(`${str} is not polidrom`);
 }

