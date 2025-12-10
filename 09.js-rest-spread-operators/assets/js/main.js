// rest vs spread operator
// destructing


const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits



// spread operator
const nums1 = [1, 2, 3]
const nums2 = [4, 5, 6, 8, 3]

// const allNums = nums1.concat(nums2)
const allNums = [...nums1, ...nums2]

console.log(allNums);


function sum(a, b, c) {
    return a + b + c
}

console.log(sum(nums2[0], nums2[1], nums2[2]));
console.log(sum(...nums2));




// rest 

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum:", sum(1, 2, 3, 4, 5)); // Sum: 15
console.log("Sum:", sum(10, 20)); // Sum: 30



// destructing

const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies

// let h = webTechs[0]
// let c = webTechs[1]


// let first = webTechs[0]
// let second = webTechs[1]
// let third = webTechs[2]

// let [first, second, third] = webTechs
// let [first, , third] = webTechs
let [first, , third, ...rest] = webTechs

console.log(first, third);
console.log(rest[0]);


// object destructing


let firstName = 'Kanan';

const student = {
    firstName: "Ali",
    lastName: "Mammadov",
    age: 20,
    group: "PF103",
    isGraduated: false,
    skills: ["HTML", "CSS", "JavaScript"],
    address: {
        city: "Bakı",
        country: "Azerbaijan",
    },
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};


// const firstName = student.firstName
// const lastName = student.lastName
// const skills = student.skills

// const {firstName: fName, lastName, address: unvan, skills} = student

// console.log(fName, lastName, skills);
// console.log(unvan);

const { address: { country: olke } } = student

console.log(olke);



function greeting(obj) {
    const { firstName } = obj
    console.log(`Welcome, ${firstName}`);
}

greeting(student)
greeting({
    firstName: 'Mammad',
    lastName: 'Aliyev'
})

// shallow copy vs deep copy

const students = ['amin', 'elmira', 'elmir', 'farman', 'ganira']

// const studentsCopy = students;

const studentsCopy = [...students]; // copy with spread operator

students.pop()


console.log("original", students);
console.log("copy", studentsCopy);


const user = {
    username: "Jhon_Doe",
    email: 'jhon@code.edu.az',
    skills: ["HTML", "CSS", "JavaScript"],
    address: {
        city: "Bakı",
        country: "Azerbaijan",
    },
}

// const userCopy = {...user}

// user.skills.pop()
// userCopy.address.city = 'London'
// user.username = 'lorem_ipsum'

// console.log('copy', userCopy);
// console.log('original', user);



// deep copy

// first method

// const userCopy = JSON.parse(JSON.stringify(user))


// user.skills.pop()
// user.address.city = 'London'
// // user.username = 'lorem_ipsum'

// console.log(userCopy);

// second method

const userCopy = structuredClone(user)


user.skills.pop()
user.address.city = 'London'
// user.username = 'lorem_ipsum'

console.log(user);
console.log(userCopy);