// String are immuateble

let str = 'javascript';

// str[0] = 'J'

// console.log(str);


//string methods

console.log(str.length);
console.log(str.charAt(2)); //v
console.log(str.at(2)); //v
console.log(str.at(-2)); //p
console.log(str.charCodeAt(2)); // 118


console.log();


let fName = 'Kanan';
let lName = 'Amirov';

// let fullName = fName + " " + lName
// let fullName = `${fName} ${lName}`
let fullName = fName.concat(' ', lName)
console.log(fullName);




console.log(str.toUpperCase());
console.log(str.toLowerCase());


console.log(str.toLocaleUpperCase('az'));
console.log(str.toLocaleUpperCase('az'));


console.log(str.substring(0, 4));
console.log(str.substring(1, 4));
console.log(str.substring(4));
console.log(str.substring(4));

console.log(str.slice(0, 4));
console.log(str.slice(4));
console.log(str.slice(-4));
console.log(str.slice(-4, -2));


console.log("     hello      ".trimEnd());
console.log("     hello      ".trimStart());
console.log("hello".trim());


console.log("a".repeat(4));


console.log("hello".padEnd(16, "*"));
console.log("hello".padStart(16, "*"));

let cardNumber = "4169788864627002";


let result = cardNumber.slice(-4).padStart(16, '*')

console.log(result);


console.log("asus zenbook".startsWith("asus")); // true
console.log("asus zenbook".startsWith("len")); // false

console.log("asus zenbook".endsWith("asus")); // false
console.log("asus zenbook".endsWith("k")); // true


console.log(str.includes('z')); // false
console.log(str.includes('script')); // true


console.log(str.indexOf('s')); // 4
console.log(str.indexOf('script')); // 4
console.log(str.indexOf('v')); // 2
console.log(str.indexOf('b')); // -1

console.log(str.indexOf('a')); // 1
console.log(str.indexOf('a', 2)); // 3


console.log(str.lastIndexOf('a')); // 3



console.log(str.split()); ['javascript']
console.log('salam'.split(''));
console.log('ruqayya,amin,huseynagha,murad'.split(','));


let newStr = str.replace('java', 'type')

console.log(newStr);
console.log(str);

console.log('He5llo232342'.search(/[a-z]/gi));
console.log('Hello'.match(/[A-Z]/g));
