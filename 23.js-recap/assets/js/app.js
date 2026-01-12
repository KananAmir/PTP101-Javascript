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
