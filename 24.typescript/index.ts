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

const car: { name: string, brand: number } = { name: 'Toyota', brand: 2024 };
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


// let point: [number, number] = [8, 7];
// console.log(point[0], point[1]);




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

type Dice = 1 | 2 | 3 | 4 | 5 | 6;

// let dice: Dice = 8; // Error: Type '8' is not assignable to type 'Dice'.
// let dice2: Dice = 4; // Valid

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




const nums2: number[] = [1, 2, 3, 4, 5];


type Product = {
    name: string,
    price: number,
    category: string
}

const products: Product[] = [
    { name: "one Product 1", price: 20, category: "electronics" },
    { name: "two Product 2", price: 38, category: "Clothes" },
    { name: "three Product 3", price: 43, category: "Electronics" },
    { name: "four Product 4", price: 60, category: "Clothes" },
    { name: "five Product 5", price: 35, category: "Clothes" },
    { name: "six Product 6", price: 70, category: "Electronics" },
    { name: "seven Product 7", price: 10, category: "Clothes" },
    { name: "eight Product 8", price: 85, category: "electronics" },
];

if (products[1]) {
    products[1].price = 40
}

interface IRating {
    rate?: number,
    count?: number
}

interface IProduct {
    id?: number | string,
    title?: string,
    price?: number,
    description?: string,
    category?: string,
    image?: string,
    rating?: IRating,
}

const allProducts: IProduct[] = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
            count: 120,
        },
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: {
            rate: 4.1,
            count: 259,
        },
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description:
            "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: {
            rate: 4.7,
            count: 500,
        },
    },
    {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description:
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        rating: {
            rate: 2.1,
            count: 430,
        },
    },
    {
        id: 5,
        title:
            "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description:
            "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        rating: {
            rate: 4.6,
            count: 400,
        },
    },
    {
        id: 6,
        title: "Solid Gold Petite Micropave ",
        price: 168,
        description:
            "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        rating: {
            rate: 3.9,
            count: 70,
        },
    },
    {
        id: 7,
        title: "White Gold Plated Princess",
        price: 9.99,
        description:
            "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        rating: {
            rate: 3,
            count: 400,
        },
    },
    {
        id: 8,
        title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        price: 10.99,
        description:
            "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        rating: {
            rate: 1.9,
            count: 100,
        },
    },
    {
        id: 9,
        title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        price: 64,
        description:
            "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        rating: {
            rate: 3.3,
            count: 203,
        },
    },
    {
        id: 10,
        title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109,
        description:
            "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        rating: {
            rate: 2.9,
            count: 470,
        },
    },
    {
        id: 11,
        title:
            "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        price: 109,
        description:
            "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        category: "electronics",
        image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        rating: {
            rate: 4.8,
            count: 319,
        },
    },
    {
        id: 12,
        title:
            "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        price: 114,
        description:
            "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        rating: {
            rate: 4.8,
            count: 400,
        },
    },
    {
        id: 13,
        title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        price: 599,
        description:
            "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        rating: {
            rate: 2.9,
            count: 250,
        },
    },
    {
        id: 14,
        title:
            "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        price: 999.99,
        description:
            "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        rating: {
            rate: 2.2,
            count: 140,
        },
    },
    {
        id: 15,
        title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 56.99,
        description:
            "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        rating: {
            rate: 2.6,
            count: 235,
        },
    },
    {
        id: 16,
        title:
            "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        description:
            "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        rating: {
            rate: 2.9,
            count: 340,
        },
    },
    {
        id: 17,
        title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        price: 39.99,
        description:
            "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        rating: {
            rate: 3.8,
            count: 679,
        },
    },
    {
        id: 18,
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        description:
            "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        rating: {
            rate: 4.7,
            count: 130,
        },
    },
    {
        id: 19,
        title: "Opna Women's Short Sleeve Moisture",
        price: 7.95,
        description:
            "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        rating: {
            rate: 4.5,
            count: 146,
        },
    },
    {
        id: 20,
        title: "DANVOUY Womens T Shirt Casual Cotton Short",
        price: 12.99,
        description:
            "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        rating: {
            rate: 3.6,
            count: 145,
        },
    },
];



const role = "admin" as const;
// type: "admin"

let userRole: "admin" | "user";
userRole = role;


// generic types 


function identity<T>(value: T): T {
    return value
}

console.log(identity<string>('hello'));
console.log(identity<number>(123));

interface IPerson {
    name: string,
    age: number,
    email?: string
}
// const people: IPerson[] = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 35 },
// ];
// } 
const people: Array<IPerson> = [
    { name: 'Alice', age: 30, email: 'alice@example.com' },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
];


function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
}

console.log(reverseArray<number>([1, 2, 3]));  // Output: [3, 2, 1]
console.log(reverseArray<string>(["A", "B", "C"])); // Output: ["C", "B", "A"] 



interface StorageBox<T> {
    content: T;
}

let numberBox: StorageBox<number> = { content: 100 };
let stringBox: StorageBox<string> = { content: "TypeScript" };

console.log(numberBox.content); // Output: 100
console.log(stringBox.content); // Output: "TypeScript"


// interface IUser<T> {
//     id: T,
//     name: string}

// const u: IUser<number> = {
//     id: 1,
//     name: "Alice",
// }

// const u2: IUser<string> = {
//     id: "abc123",
//     name: "Bob",
// }



function swap<T, U>(first: T, second: U): [U, T] {
    return [second, first];
}

console.log(swap<string, number>("Age", 25)); // Output: [25, "Age"]



console.log(swap<boolean, string>(true, "Yes")); // Output: ["Yes", true]



// utility types in typescript

type UserType = {
    name: string,
    age?: number,
    email: string
}

type UpdateUser = Partial<UserType>;

const user1: UpdateUser = {
    name: 'Alice',
    email: 'alice@example.com',
}


const user2: Required<UserType> = {
    name: 'Bob',
    age: 25,
    email: 'bob@example.com'
}

const user3: Readonly<UserType> = {
    name: 'Charlie',
    age: 35,
    email: 'charlie@example.com'
}

// user3.name = 'Dave'; // Error: Cannot assign to 'name' because it is a read-only property.

const user4: Pick<UserType, 'name' | 'email'> = {
    name: 'Dave',
    email: 'dave@example.com',
}



const user5: Omit<UserType, 'age'> = {
    name: 'Eve',
    email: 'eve@gmail.com',
}


type UserNames = 'Farman' | 'Amin' | 'Elmir' // litheral type


const user6: Record<UserNames, UserType> = {
    "Amin": {
        name: "Amin",
        email: "amin@example.com",
        age: 30
    },
    "Elmir": {
        name: "Elmir",
        email: "elmir@example.com",
        age: 25
    },
    "Farman": {
        name: "Farman",
        email: "farman@example.com",
        age: 40
    }
}

console.log(user6.Amin);
console.log(user6.Elmir);



type Roles = "admin" | "user" | "guest";

type Permissions = {
    read: boolean,
    write: boolean,
    delete: boolean
}

const permissions: Record<Roles, Permissions> = {
    admin: {
        read: true,
        write: true,
        delete: true,
    },
    user: {
        read: true,
        write: false,
        delete: false,
    },
    guest: {
        read: true,
        write: false,
        delete: false,
    },
};



type Role = "admin" | "user" | "guest";

// type WithoutGuest = 'admin' | 'user';

type WithoutGuest = Exclude<Role, "guest">;

type OnlyAdmin = Extract<Role, "admin">;




type Data = string | null | undefined | boolean | number;


type CleanData = NonNullable<Data>


function getUser() {
    return { id: 1, name: "Ali" };
}

type Userrrr = ReturnType<typeof getUser>;



function login(username: string, password: string) { }

type LoginParams = Parameters<typeof login>;



type ApiResponse = Promise<{ id: number }>;

type MyData = Awaited<ApiResponse>;


const getData = async (): Promise<MyData | undefined> => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data: MyData = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch data");
    }
}