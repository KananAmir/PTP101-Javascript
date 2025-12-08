const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables


const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
console.log(webTechs[0]);

// push, unshift, pop, shift 

// webTechs.pop()

// console.log(webTechs);

// length property
console.log(webTechs.length);  // 7

console.log(webTechs.at(0)); // HTML
console.log(webTechs.at(1)); // CSS
console.log(webTechs.at(-1));
console.log(webTechs.toString());

console.log(webTechs.join('-'));
console.log(webTechs.join('#'));
console.log(webTechs.join(''));

const fruitsAndVegetables = fruits.concat(vegetables)
console.log(fruitsAndVegetables);

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

console.log(countries.slice());
console.log(countries.slice(0, 3));
console.log(countries.slice(2, 4));
console.log(countries.slice(-4, -2));

console.log(countries);


// splice

const students = ['elmir', 'maryam', 'amin', 'murad', 'ruqayya']


// students.splice(2, 3)
// students.splice(2, 0, 'elmira')
// students.splice(2, 1, 'elmira')
// students.splice(0, 0, 'elmira')
// students.splice(1, 0, 'elmira', 'farman')
// students.splice(1, 2, 'elmira', 'farman')

console.log(students);


console.log('------------');
// console.log(students.splice(1, 2, 'elmira', 'farman'));
const deletedStudents = students.toSpliced(1, 2, 'elmira', 'farman')
console.log(deletedStudents);

console.log(students);


const animalProducts = ['milk', 'meat', 'butter', 'meat', 'yoghurt'] // array of strings, products


console.log(animalProducts.indexOf('meat')); // 1
console.log(animalProducts.lastIndexOf('meat')); // 3
console.log(animalProducts.lastIndexOf('test')); // -1

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers

console.log(numbers.includes(37)); // true
console.log(numbers.includes(38)); // false


// console.log(animalProducts.includes('Milk')); // false
console.log(animalProducts.includes('milk')); // true


console.log(fruits.reverse());


// const reverseStr = (str) => {
//     let reverse = ''
//     for (let i = str.length - 1; i >=0 ; i--) {
//         reverse += str[i]
//     }
//     return reverse
// }

const reverseStr = (str) => {
    return str.split('').reverse().join('')
}


console.log(reverseStr('hello')); // olleh


// sort 

console.log(students.sort());
console.log(numbers.sort());




console.log('-------------');


// iteration methods

// for (let i = 0; i < countries.length; i++) {
//     console.log(countries[i]);
// }

// countries.forEach((item, index, array)=>{
//    console.log(index, item, array);
// })


// countries.forEach((item) => {
//     console.log(item);
// })


const nums = [-4, 6, 83, -25, 66, 48]

nums.forEach(function (item, i, arr) {
    if (item % 2 === 0 && item > 0) {
        console.log(item);
    }
})


// map


console.log(nums.map((number)=>{
    return number * 2
}));


const newNums = nums.map((item)=> item * 2)

console.log(newNums);

console.log(countries.map((c)=>c.slice(0, 3).toUpperCase()));



