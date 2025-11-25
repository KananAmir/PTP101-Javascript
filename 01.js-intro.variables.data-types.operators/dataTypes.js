
const btn = document.querySelector(".btn")


btn.addEventListener("click", () => {
    window.alert("clicked!!")
})

// DATA TYPES: primitive vs referance (non-primitive)

let firstName = "fatima"; // string
let city = "baku"; // string

let age = 22; // number
let bigNumber = 5678888888888888888888883422342342324234234234n // more than 2^53 - 1 

let isStudent = true; // boolean

let unique = Symbol("id") // symbol

let x; // undefined

let user = null; // null

// user = "farman"


console.log(typeof 66); // number
console.log(typeof age); // number
console.log(typeof bigNumber); // bigint
console.log(typeof firstName); // string
console.log(typeof "madina"); // string
console.log(typeof x); // undefined
console.log(typeof isStudent); // boolean
console.log(typeof user); // object


// primitive data types are immuateble (dəyişməzdir)
// referance data types are mutable (dəyişə biləndir)

let str = "hello"

// str[0] = "H"
// console.log(str);


// referance data types: object, array,  function etc..
// key: value

const student = {
    firstName: 'nazrin',
    lastName: 'rahimova',
    age: 18,
    universityName: 'BDU',
    hobbies: ['coding', 'gaming', 'swimming']
}

student.age = 15
// console.log(student["firstName"]);
// console.log(student.firstName);
console.log(student);

// stack vs heap memory


let a = 3

//stack
// a -> 3
// student -> #001


//heap
// #001 -> {
//      firstName: 'nazrin',
//     lastName: 'rahimova',
//     age: 18,
//     universityName: 'BDU'
// }



// array

const students = ["farman", "akbar", "elmir", "huseynagha"]
const mixed = [33, true, "hello", ]


console.log(students);

console.log(typeof student); // object
console.log(typeof students); // object

function greeting(){
    console.log("heloooo!");
}

console.log(typeof greeting);


// ''
// ""
// ``


console.log('hello "asdasdsa"');
console.log("hello 'adsaasd'");



console.log("I am " + student.firstName + " " + student.lastName + ".");

//template litheral (string)
console.log(`I am ${student.firstName} ${student.lastName}. I am ${student.age} years old. I study at ${student.universityName}.`);
