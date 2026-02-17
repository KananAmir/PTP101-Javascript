let num: number = 15.77747


// type inference
let str = "Hello, TypeScript!"

// str = 223 // error: Type 'number' is not assignable to type 'string'.
let isActive: boolean = true

// console.log(str - 15); // error: The '-' operator cannot be applied to types 'string' and 'number'.



// let username: string = "JohnDoe"

// username = 12345; // No error, 'any' type allows reassignment to different types

// username = true; // No error, 'any' type allows reassignment to different types


// const numbers: number[]= [1 , 2, 3, 4, 5]
const numbers: Array<number> = [1, 2, 3, 4, 5]

const students: string[] = ["Alice", "Bob", "Charlie"]

const mixedArray: any[] = [1, "Hello", true, 3.14]


// union types 

let id: string | number = 'abc123'
id = 123456


//  Inferred Array Type
let nums = [1, 2, 3];

nums.push(4); // No error, nums is of type number[]
// nums.push("5"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

let mixedArray2: (string | number | boolean)[] = [1.555, "apple", true];

console.log(mixedArray2);

// mixedArray2[1].toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'string | number | boolean'.



// functions

function add(a: number, b: number = 0): number {
    return a + b
}

console.log(add(1, 2)); // Output: 3
console.log(add(2)); // Output: 2

// console.log(add(1, "3")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

function greet(name: string): void {
    console.log(`Hello, ${name}`);
}

greet("Alice"); // Output: Hello, Alice


// function arithmeticOp(price: number): number {
//   return price * 9; 
// }

 
function arithmeticOp(price: number): number | string {
const hasDiscount: boolean = true; // Example condition
  if (hasDiscount) {
    return 'discount'; // Error here!
  }
  return price * 9;
}

const FP = arithmeticOp(2);




// optional parameters

function greetPerson(name: string, age?: number): void {
    if (age) {
        console.log(`Hello, ${name}! You are ${age} years old.`);
    }
    else {
        console.log(`Hello, ${name}!`);
    }
}

greetPerson("Alice", 30); // Output: Hello, Alice! You are 30 years old.
greetPerson("Bob"); // Output: Hello, Bob!



// unknown type

function processValue(input: unknown): string {
    if (typeof input === 'string') {
        return `The value is a string: ${input}`;
    } else if (typeof input === 'number') {
        return `The value is a number: ${input}`;
    } else {
        return 'The value is of an unknown type';
    }
}

console.log(processValue('Hello, TypeScript!')); // The value is a string: Hello, TypeScript!
console.log(processValue(42)); // The value is a number: 42
console.log(processValue(true)); // The value is of an unknown type


// any vs unknown
function printLength(value: any) {
    console.log(value.length);
}

printLength(123); // runtime crash ❌

function printLengthSafe(value: unknown) {
    if (typeof value === 'string' || Array.isArray(value)) {
        console.log(value.length);
    }
    else {
        console.log("Value does not have a length property");
    }
}

printLengthSafe(123); // Value does not have a length property
printLengthSafe("Hello"); // 5




// object type 

// const car: { name: string, brand: number } = { name: 'Toyota', brand: 2024 };
// const car: { name: string, brand: number } = { name: 'Toyota', brand: 2024, color: 'red' }; // Error: Object literal may only specify known properties, and 'color' does not exist in type '{ name: string; brand: number; }'.



// type alias


// type Person = {
//     name: string,
//     age: number,
//     isStudent: boolean,
//     isEmployed: boolean 
// }

type Person = {
    readonly name: string,
    age: number,
    isStudent: boolean,
    isEmployed?: boolean  // Optional property
}


// const person: { name: string, age: number, isStudent: boolean } = { name: 'Alice', age: 30, isStudent: false };

const person: Person = { name: 'Alice', age: 30, isStudent: false };
const person2: Person = { name: 'Bob', age: 25, isStudent: true, isEmployed: false };

person.age = 31; // Allowed
// person.name = 'Charlie'; // Error: Cannot assign to 'name' because it is a read-only property




// tuples

// let tuple: [string, number] = ["Alice", 30];


type TupleType = [string, boolean, number]

let tuple: TupleType = ["Alice", true, 30];
let tuple2: TupleType = ["Bob", false, 25];

// rest and spread operators

function joinWords(...words: string[]): string {
  return words.join(" ");
}

let sentence = joinWords("TypeScript", "makes", "coding", "fun");
console.log(sentence); // "TypeScript makes coding fun"

function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

interface IPerson {
    name: string,
    age: number,
}

interface IStudent extends IPerson {
    university: string,
    gpa: number
}


interface IEmployee extends IPerson {
    company: string 
    position: string
}


// interface ID = string | number // error, cannot use type alias with interface
type ID = string | number

const s: IStudent = {
    name: 'Alice',
    age: 22,
    university: 'University of TypeScript',
    gpa: 3.8
} 

const e: IEmployee = {
    name: 'Bob',
    age: 30,
    company: 'Tech Corp',
    position: 'Software Engineer'
}


// intersection types

type User = {
  name: string;
  email: string;
};

type AdminUser = User & {
    role: string;
    permissions: string[];
};

const admin: AdminUser = {
  name: "Kanan",
  email: "kanan@mail.com",
  role: "admin",
  permissions: ["create", "delete"]
};

 

interface IBox {
    width: number;
    height: number;
}; 
 
interface IBox {
    depth: number;
}

let box: IBox = {
    width: 10,
    height: 20,
    depth: 30
};


// literal types

type ProductStatus = "available" | "out of stock" | "discontinued";

type Response = "success" | "error" | "pending";

// const r: Response = "test"; // Error: Type '"test"' is not assignable to type 'Response'.
const r: Response = "success";


// enums 

enum Direction {
    UP,
    DOWN,
    LEFT, 
    RIGHT
}

enum Status {
    SUCCESS = "success",
    ERROR = "error",
    PENDING = "pending"
}

let dir1: Direction = Direction.LEFT // console.log(dir1); // Output: 2

let status1: Status = Status.PENDING // console.log(status1); // Output: "pending"


// never

function throwError(message: string): never {
    throw new Error(message);
}


type Statuss = "success" | "failure";

function checkStatus(status: Statuss): void {
  switch (status) {
    case "success":
      console.log("Operation was successful.");
      break;
    case "failure":
      console.log("Operation failed.");
      break;
    default:
      const unexpected: never = status; // Ensures all cases are handled
  }
}



function infiniteLoop(): never {
  while (true) {
    console.log("Running...");
  }
}