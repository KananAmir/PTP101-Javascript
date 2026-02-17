let username = "murad";

// console.log('Salam, ' + username);
console.log(`Salam, ${username}`);

const person = {
  firstName: "Olalekan",
  lastName: "Akande",
  middleName: "Toheeb",
  address: {
    street: "123 Main St",
    city: "London",
    state: {
      name: "Kwara",
      abbreviation: "KW",
    },
  },
  //   age: 40
};

let firstName = "fatima";
// const fName = person.firstName

const {
  age = 30,
  firstName: fName,
  lastName,
  address: { city },
} = person;

// console.log(fName, lastName);
console.log(city);
console.log(age);

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first, second, rest);

let x = {
  name: "jhon",
  age: 20,
};

// const MyComponent = (obj) => {
//     const {name, age} = obj

//   return (
//     <div>
//       <h1>Hello, {name}!</h1>
//       <p>You are {age} years old.</p>
//     </div>
//   );
// };

// const arr = ["a", "b", "c"];
// const MyComponent = ({ name, age }) => {
//   return (
//     <div>
//       <h1>Hello, {name}!</h1>
//       <p>You are {age} years old.</p>
//       <button>click</button>
//       {arr.map((item) => {
//         return <p>{item}</p>;
//       })}
//     </div>
//   );
// };

let userAge = 9;

const message = userAge >= 18 ? "You are an adult." : "You are a minor.";
console.log(message);

// function greet(name){
//     return `Hello, ${name}!`
// }

const greet = (name) => `Hello, ${name}!`;
console.log(greet("Akande")); // Output: Hello, Akande!

function hello(username) {
  return "Hello, " + (username || "Guest");
  //   return `Hello, ${username || 'Guest'}`
}

console.log(hello());

console.log("m" + "a" + +"a" + "a");



console.log('--------------------------');

const arr = [10, 21, 3, 4, 5];


// const newArr = arr.map(function(){})
const newArr = arr.map((item) => item * 2);

console.log(newArr);


const sortedArr = arr.toSorted((a, b) => {
  return a - b
})

console.log(arr);
console.log(sortedArr);


const employees = [
  { name: "Bob", age: 25, department: "Engineering" },
  { name: "Alice", age: 30, department: "HR" },
  { name: "David", age: 28, department: "Engineering" },
  { name: "Charlie", age: 35, department: "Sales" },
];

const sortByAge = employees.toSorted((a, b) => a.age - b.age)
const sortByName = employees.toSorted((a, b) => a.name.localeCompare(b.name))

console.log(employees);


console.log(employees.reduce((sum, employee) => {
  return sum + employee.age
}, 0));


console.log(employees.reduceRight((acc, curr) => {
  return acc + curr.name[0]
}, ''));


// flat

const nestedArr = [1, 2, [3, 4], [5, 6, [7, 8, [9]]]];

// console.log(nestedArr.flat());
console.log(nestedArr.flat(3));


// flatMap

const sentences = [
  "Hello world",
  "JavaScript is awesome",
  "I love coding",
];

const words = sentences.flatMap(item => item.split(' '));

console.log(words);


const users = [
  { name: 'Akande', age: 30, email: 'akande@gmail.com' },
  { name: 'Fatima', age: 15, email: 'fatima@gmail.com' },
  { name: 'Toheeb', age: 25, email: 'toheeb@gmail.com' },
  { name: 'Murad', age: 17, email: 'murad@gmail.com' },
  { name: 'Olalekan', age: 35, email: 'olalekan@gmail.com' },
];

// chaning
const adultUsers = users
  .filter(user => user.age >= 18)
  .map(user => ({ name: user.name, age: user.age }));

console.log(adultUsers);




// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// console.log(3);



async function square(num) {
  return Math.pow(num, 2);
}

// console.log(square(3));


// square(3)
//   .then(result => { console.log(result) })
//   .catch(error => console.log(error))
//   .finally(() => console.log('Operation completed'));

// async function getData() {
//   try {
//     const response = await square(3);
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log('Done');
//   }
// }

// getData();



// async function fetchData() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchData();


// callback hell example

// setTimeout(() => {
//     console.log("Joel");
//     setTimeout(() => {
//         console.log("Victoria");
//         setTimeout(() => {
//             console.log("John");
//             setTimeout(() => {
//                 console.log("Doe");
//                 setTimeout(() => {
//                     console.log("Sarah");
//                 }, 2000);
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }, 2000);


// function addName (time, name){
//   return new Promise ((resolve, reject) => {
//     if(name){
//       setTimeout(()=>{
//         console.log(name)
//         resolve();
//       },time)
//     }else{
//       reject('No such name');
//     }
//   })
// }

// addName(2000, 'Joel')
//   .then(()=>addName(2000, 'Victoria'))
//   .then(()=>addName(2000, 'John'))
//   .then(()=>addName(2000, 'Doe'))
//   .then(()=>addName(2000, 'Sarah'))
//   .catch((err)=>console.log(err))


const nums = [4, 3, 4, 2, 5, 3, 4, 5, 2, 1, 2, 4, 3, 8];

// const uniqueNums = [...new Set(nums)];
const uniqueNums = nums.filter((item, index, arr) => arr.indexOf(item) === index);

console.log(uniqueNums);


const result = []
for (let i = 0; i < nums.length; i++) {
  if (!result.includes(nums[i])) {
    result.push(nums[i]);
  }
}

console.log(result);



// let lion = {
//   category: "carnivore",
//   "lion-baby": 'cub'
// };

// console.log(lion); // { category: "carnivore" }
// lion.baby = 'cub';
// console.log(lion.category); // carnivore
// console.log(lion); // { category: "carnivore" , baby: "cub" }

// console.log(lion["lion-baby"]); // cub




let category = 'test';


let lion = {
  age: 5,
  'lion-baby': "cub",
  [category]: true,
};

console.log(lion); // { lion-baby: "cub" , test: true }



const myUsers = [
  {
    name: "Sam",
    age: 64,
    hobby: "cooking",
    hobbies: {
      hobb1: "cooking",
      hobby2: "sleeping"
    }
  },
  { name: "Bruno", age: 56 },
  { name: "Dave", age: 56, hobby: "Football" },
  {
    name: "Jacob",
    age: 65,
    hobbies: {
      hobb1: "driving",
      hobby2: "sleeping"
    }
  }
];


try {
  myUsers.forEach(user => {
  console.log(user?.hobbies?.hobb1);
})
} catch (error) {
  console.log(error);
  
}


