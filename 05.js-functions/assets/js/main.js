// qeyd: nested loop, for of, for in, prompt


// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         console.log(i, j);
//     }
// }



// 3) 0–100 arası sadə ədədləri console-a çıxarın

// 0-dan 100-ə qədər olan ədədlər arasından (prime numbers) console-da çap edən proqram yazın.

// Output:2
// 3
// 5
// 7
// 11
// 13
// 17
// ...
// 97  


// for (let i = 2; i <= 100; i++) {
//     let isPrime = true
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//             isPrime = false
//             break
//         } 
//     }

//     if(isPrime){
//         console.log(i);
//     }

// }

// console.log(Math.sqrt(81));


//alert, prompt, confirm


// window.alert("helooooo!")

// let isConfirm = window.confirm('are u sure to delete to product!')

// if (isConfirm) {
//     console.log('user accepted!!');
// }
// else {
//     console.log('user rejected!!');
// }


// let username = '';


// while (username === '') {
//     username = window.prompt('Enter ur name here!', 'Mr. Jhon')
// }

// console.log(username);

// window.alert(`Welcome, ${username}`)


// guess number

// let number = Math.round(Math.random() * 10);
// console.log(number);

// let guessedNumber;
// let count = 0
// let failed = false
// while (guessedNumber != number) {
//     guessedNumber = window.prompt('Enter your guessed number bw 0-10!')
//     console.log(guessedNumber);
//     count++
//     if (count === 3) {
//         failed = true
//         break
//     }
// }


// if (failed) {
//     console.log('u failed!');
// } else {
//     console.log(`you found on ${count} step`);
// }


// let firstNumber = +window.prompt('enter first number')
// let secondNumber = +window.prompt('enter second number')
// let operation = window.prompt('enter operation!')
// let result;
// switch (operation) {
//     case '+':
//         result = firstNumber + secondNumber
//         break;
//     case '-':
//         result = firstNumber - secondNumber
//         break;
//     case '*':
//         result = firstNumber * secondNumber
//         break;
//     case '/':
//         result = firstNumber / secondNumber
//         break;

//     default:
//         console.log('wrong operation!');
//         break;
// }

// console.log(result);



// for in, for of

const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  isMarried: true
}
console.log(person)


// for (let i = 0; i < countries.length; i++) {
//     console.log(countries[i]);
// }


for (let country of countries){
    console.log(country);
}


// for(let key in person){
//     console.log(key);
// }

// for(let key in person){
//     console.log(person[key]);
// }

for(let key in person){
    console.log(`${key}: ${person[key]}`);
}
