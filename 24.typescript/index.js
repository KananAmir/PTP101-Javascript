var num = 15.77747;
// type inference
var str = "Hello, TypeScript!";
// str = 223 // error: Type 'number' is not assignable to type 'string'.
var isActive = true;
// console.log(str - 15); // error: The '-' operator cannot be applied to types 'string' and 'number'.
// let username: string = "JohnDoe"
// username = 12345; // No error, 'any' type allows reassignment to different types
// username = true; // No error, 'any' type allows reassignment to different types
// const numbers: number[]= [1 , 2, 3, 4, 5]
var numbers = [1, 2, 3, 4, 5];
var students = ["Alice", "Bob", "Charlie"];
var mixedArray = [1, "Hello", true, 3.14];
// union types 
var id = 'abc123';
id = 123456;
//  Inferred Array Type
var nums = [1, 2, 3];
nums.push(4); // No error, nums is of type number[]
// nums.push("5"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
var mixedArray2 = [1.555, "apple", true];
console.log(mixedArray2);
// mixedArray2[1].toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'string | number | boolean'.
// functions
function add(a, b) {
    if (b === void 0) { b = 0; }
    return a + b;
}
console.log(add(1, 2)); // Output: 3
console.log(add(2)); // Output: 2
// console.log(add(1, "3")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
function greet(name) {
    console.log("Hello, ".concat(name));
}
greet("Alice"); // Output: Hello, Alice
// function arithmeticOp(price: number): number {
//   return price * 9; 
// }
function arithmeticOp(price) {
    var hasDiscount = true; // Example condition
    if (hasDiscount) {
        return 'discount'; // Error here!
    }
    return price * 9;
}
var FP = arithmeticOp(2);
// optional parameters
function greetPerson(name, age) {
    if (age) {
        console.log("Hello, ".concat(name, "! You are ").concat(age, " years old."));
    }
    else {
        console.log("Hello, ".concat(name, "!"));
    }
}
greetPerson("Alice", 30); // Output: Hello, Alice! You are 30 years old.
greetPerson("Bob"); // Output: Hello, Bob!
// unknown type
function processValue(input) {
    if (typeof input === 'string') {
        return "The value is a string: ".concat(input);
    }
    else if (typeof input === 'number') {
        return "The value is a number: ".concat(input);
    }
    else {
        return 'The value is of an unknown type';
    }
}
console.log(processValue('Hello, TypeScript!')); // The value is a string: Hello, TypeScript!
console.log(processValue(42)); // The value is a number: 42
console.log(processValue(true)); // The value is of an unknown type
// any vs unknown
function printLength(value) {
    console.log(value.length);
}
printLength(123); // runtime crash ❌
function printLengthSafe(value) {
    if (typeof value === 'string' || Array.isArray(value)) {
        console.log(value.length);
    }
    else {
        console.log("Value does not have a length property");
    }
}
printLengthSafe(123); // Value does not have a length property
printLengthSafe("Hello"); // 5
// const person: { name: string, age: number, isStudent: boolean } = { name: 'Alice', age: 30, isStudent: false };
var person = { name: 'Alice', age: 30, isStudent: false };
var person2 = { name: 'Bob', age: 25, isStudent: true, isEmployed: false };
person.age = 31; // Allowed
var tuple = ["Alice", true, 30];
var tuple2 = ["Bob", false, 25];
// rest and spread operators
function joinWords() {
    var words = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        words[_i] = arguments[_i];
    }
    return words.join(" ");
}
var sentence = joinWords("TypeScript", "makes", "coding", "fun");
console.log(sentence); // "TypeScript makes coding fun"
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
var s = {
    name: 'Alice',
    age: 22,
    university: 'University of TypeScript',
    gpa: 3.8
};
var e = {
    name: 'Bob',
    age: 30,
    company: 'Tech Corp',
    position: 'Software Engineer'
};
var admin = {
    name: "Kanan",
    email: "kanan@mail.com",
    role: "admin",
    permissions: ["create", "delete"]
};
;
var box = {
    width: 10,
    height: 20,
    depth: 30
};
// const r: Response = "test"; // Error: Type '"test"' is not assignable to type 'Response'.
var r = "success";
// enums 
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
var Status;
(function (Status) {
    Status["SUCCESS"] = "success";
    Status["ERROR"] = "error";
    Status["PENDING"] = "pending";
})(Status || (Status = {}));
var dir1 = Direction.LEFT; // console.log(dir1); // Output: 2
var status1 = Status.PENDING; // console.log(status1); // Output: "pending"
// never
function throwError(message) {
    throw new Error(message);
}
function checkStatus(status) {
    switch (status) {
        case "success":
            console.log("Operation was successful.");
            break;
        case "failure":
            console.log("Operation failed.");
            break;
        default:
            var unexpected = status; // Ensures all cases are handled
    }
}
function infiniteLoop() {
    while (true) {
        console.log("Running...");
    }
}
