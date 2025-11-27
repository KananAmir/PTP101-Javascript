let text = "javascript";

// console.log(text.length);
// console.log(text[0]);
// console.log(text[text.length - 1]);


// for(let i = 0; i < text.length; i++){
//     console.log(text[i]);
// }


let countOfA = 0

for (let i = 0; i < text.length; i++) {
    if (text[i].toLowerCase() === "a") {
        countOfA++
    }
}

console.log("count of a", countOfA);


const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies

const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits

const numbers = [54, 3.14, 9.81, 37, 98.6, 100] // array of numbers

// console.log(webTechs.length);
// console.log(webTechs[0]);
// console.log(webTechs[webTechs.length - 1]);



for (let i = 0; i < webTechs.length; i++) {
    console.log(webTechs[i]);
}


let sum = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    console.log(i, numbers[i]);
    
    sum += numbers[i]
}


console.log("sum", sum);

const average = sum / numbers.length

console.log("average", average);




// qeyd: nested loop, for of, for in, prompt