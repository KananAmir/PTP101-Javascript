// functions are reuseable code bloks

// declearation function (regular function)
// expression function
// arrow function



// function with no parameter
function greeting() {
    console.log('salamlar!!!');
}


greeting() // function call


// function with parameter

// function sayHi(username){
//     console.log(`Welcome, ${username}`); 
// }

// sayHi('fatima')
// sayHi('elmir')
// sayHi('murad') // Welcome murad
// sayHi() // Welcome undefined



//default parameter
function sayHi(username = 'guest') {
    console.log(`Welcome, ${username}`);
}

// username is paramter
// 'farman' is arqument

sayHi('farman')
sayHi()

// function square(number = 1) {
//     console.log(number ** 2);
// }
// square(4) // 16
// square(7) // 49 
// square() // 1


//return keyword


function test() {

}


console.log(test()); // undefined


function sum(num1 = 0, num2 = 0) {

    return num1 + num2
    console.log('hello') // this code block doesnt work, because this is after return 

}

console.log(sum(2, 3));
console.log(sum(8, 7));



function areaOfCircle(radius) {
    return Math.PI * radius ** 2
}

console.log(areaOfCircle(3));
console.log(areaOfCircle(7));


// sum of array elements

const numbers = [2, 4, 7, 1, 9]
const scores = [55, 42, 70, 95, 83]


function sumOfArrayElements(arr) {
    let sum = arr[0]
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i]
    }

    return sum
}

console.log(sumOfArrayElements(numbers)); // 23
console.log(sumOfArrayElements(scores)); // 345
console.log(sumOfArrayElements([1, 2, 3])); //6
console.log(sumOfArrayElements([4, 6, 5])); //15



console.log(averageOfArrayElements(numbers)); // 4.6
console.log(averageOfArrayElements([1, 2, 3])); // 2


function averageOfArrayElements(arr) {
    let sum = arr[0]
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i]
    }

    let average = sum / arr.length
    return average
}



//anonimous function
// function(){}

// funtion expression


// console.log(power(7, 3)); //Uncaught ReferenceError: Cannot access 'power' before initialization

// const power = function (number, p) {
//     return number ** p
// }


// console.log(power(3, 2));


// arrow functions

const square = (num) => {
    return num ** 2
}

console.log(square(12)); // 144


// console.log(cube(4)); // Uncaught ReferenceError: Cannot access 'cube' before initialization

const cube = (num) => num ** 3


console.log(cube(4)); //64





//this keyword

const student = {
    firstName: 'Umud',
    lastName: 'Huseynov',
    age: 25,
    skills: ['sleeping', 'sleeping', 'sleeping'],
    adress: {
        city: 'Baku',
        country: 'Azerbaijan'
    },
    // getFullName: function(){
    //     return `${this.firstName} ${this.lastName}`
    // },
    getFullName: () => {
        return `${this.firstName} ${this.lastName}`
    }
}


// getFullName is the method of student object


console.log(student.getFullName());


const studentX = student


console.log('--------------------------')
// düzbucaqlının sahəsini hesablayan funksiya yaz


function calcArea(a, b) {
    let result = a * b;
    return result;
}

console.log(calcArea(3, 4)); //12

// sozu tərsinə çevirən funksiya yaz

const reverseStr = (word) => {
    let result = '';
    for (let i = word.length - 1; i >= 0; i--) {
        result += word[i]
    }

    return result
}


console.log(reverseStr('salam'));
console.log(reverseStr('racecar'));

// sozun polidrom olub olmamamsini təyin edən funksiya yaz


const isPolidrom = (word) => {
    let reverse = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reverse += word[i]
    }

    // if(word === reverse){
    //     return `${word} is polidrom`
    // }else{
    //     return `${word} is not polidrom`
    // }


    if (word === reverse) {
        return `${word} is polidrom`
    }

    return `${word} is not polidrom`
}


console.log(isPolidrom('salam'));
console.log(isPolidrom('racecar'));


console.log("-------------");

// anonimous function'

// function(){}
// ()=>{}


// IIFE - immediately invoked function expression

// (function(){})()
// (()=>{})()

// (function(){
//     console.log('I am IIFE');
// })()


let result = ((name) => `Hello, ${name}`)('Amin')

console.log(result);

// callback functions

//HOC = higher order functions


function mainFunc(cb) {
    return cb()
}

function callbackFunc() {
    return 'I am CB function'
}


console.log(mainFunc(callbackFunc));



console.log(mainFunc(() => { }));
console.log(mainFunc(function () { }));



// function power(number, p) {
//     return number ** p
// }

// console.log(power(2, 3));






// examples


function calculateDiscount(price, discountPercent) {
    const discountAmount = (price * discountPercent) / 100;
    const finalPrice = price - discountAmount;
    return finalPrice;
}

console.log(calculateDiscount(100, 10)); // 90
console.log(calculateDiscount(250, 20)); // 200



function calculateTotal(price, taxPercent = 18) {
    const tax = (price * taxPercent) / 100;
    return price + tax;
}

console.log(calculateTotal(100));      // 118  (18% default)
console.log(calculateTotal(100, 8));   // 108  (8% göndərdik)



let todos = [];

function addTodo(task) {
    todos.push(task);
    console.log("Yeni tapşırıq əlavə olundu:", task);
}

function listTodos() {
    console.log("Tapşırıq siyahısı:");
    for (let i = 0; i < todos.length; i++) {
        console.log(i + 1 + ". " + todos[i]);
    }
}


addTodo("JavaScript dərsini təkrar et");
addTodo("10 ədəd məsələ həll et");

listTodos()

// 5 * 4! // 120

// 4 * 3! // 24

// 3 * 2!  // 6

// 2 * 1! // 2

// 1 * 0! // 1


// recursiv function

function factorial(n) {
    if (n === 0) {
        return 1; // dayandırma şərti
    }

    return n * factorial(n - 1); // özünü çağırır
}

console.log(factorial(3)); // 6
console.log(factorial(5)); // 120


// function factorial(num){
//     let result = 1;
//     for(let i = 2; i <= num; i++){
//         result*=i;
//     }

//     return result;
// }

// console.log(factorial(5)); // 120
// console.log(factorial(3)); // 6



// unlimited paramater


function sumOfAllDigits(...nums) {
    // console.log(nums);

    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        sum += nums[i]
    }

    return sum
}


console.log(sumOfAllDigits(1, 2)); // 3
console.log(sumOfAllDigits(1, 2, 3)); // 6
console.log(sumOfAllDigits(1, 2, 3, 4)); // 10
console.log(sumOfAllDigits(1, 2, 3, 4, 5)); // 15

// function declearation example

function welcome(user) {
    return `Welcome, ${user ? user.name : 'guest'}`
}

console.log(welcome({
    name: 'farman',
    email: 'farman@code.edu.az'
}));

const userObj = {
    name: 'elmir',
    email: 'elmir@code.edu.az'
}

console.log(welcome(userObj));

console.log(welcome());


// callback function example

function buyTicket(callback) {
    console.log('Bilet alınır...');

    setTimeout(() => {
        console.log('Bilet alındı.');
        callback()
    }, 1000);
}

function buyPopcorn(callback) {
    console.log('Popcorn alınır...');
    setTimeout(() => {
        console.log('Popcorn alındı.');
        callback()
    }, 1000);
}

function watchFilm() {
    console.log('Kino zalına gedilir.');
    setTimeout(() => {
        console.log('Kinoya baxılır...');
    }, 1000)

}

buyTicket(()=>{
    buyPopcorn(watchFilm)
})

(function () {
    const secret = "gizli məlumat";
    console.log(secret);
})();

console.log(secret); // Error: secret is not defined


