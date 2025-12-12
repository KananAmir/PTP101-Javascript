// objects

//object litheral
const obj = {
    username: 'jhon_doe',
    email: 'jhon@code.edu.az',
    isOnline: false,
    'full name': 'Jhon Doe'
}


obj.age = 16

obj.email = 'doe@gmail.com'

delete obj.isOnline

console.log(obj);

console.log(obj['full name']);


let user = {
    name: "John",
    age: 30
};

// let key = prompt("What do you want to know about the user?", "name");

// access by variable
// alert( user[key] ); // John (if enter "name"

// object constructor
const student = new Object()

// student.fName = 'farman'
// student.isGraduated = false



// console.log(student.fName);
// console.log(student['fName']);



//function for generate object

// function makeUser(name, age){
//     return {
//         name: name,
//         age: age
//     }
// }

// const makeUser = (name, age) => {
//     return {
//         name: name,
//         age: age
//     }
// }

const makeUser = (name, age) => ({ name: name, age: age })



let elmir = makeUser('elmir', 25)
console.log(elmir);

//this keyword


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
    'phone number': '+3584545454545',
    // getFullname: ()=>{
    //     return this // gloabal object: window
    // },
    getFullname: function () {
        return `${this.firstName} ${this.lastName}`
    },
    getBirthYear: function () {

    }
}

const personCopy = { ...person }

personCopy.firstName = 'Jhon'

console.log(person.getFullname());
console.log(personCopy.getFullname());

// object methods

console.log(Object.keys(person));

console.log(Object.values(person));

console.log(Object.entries(person));

// Object.freeze(person)

// person.lastName = 'Doe'

// person.isOnline = false

// delete person.skills

// console.log(person);

Object.seal(person)

person.lastName = 'Doe'

person.isOnline = false

delete person.skills

console.log(person);

let a = {
    x: 'x',
    y: 'y'
}


let b = {
    m: 'm',
    n: 'n'
}
// console.log(Object.assign(a, b));
console.log(Object.assign({}, b));


const myObj = {
    ...a, ...b
}

