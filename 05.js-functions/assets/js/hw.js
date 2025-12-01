// Cümlədəki sözləri sayın. Sözlər boşluqlar ilə ayrılır.


let str = "I love JavaScript and coding JAVASCRIPT"

// let count = 1;
// for(let i=0; i<str.length;i++){
//     if(str[i] === ' ') {
//         count++
//     }
// }

// console.log("count:", count);

console.log(str.trim().split(' ').length);

console.log('------------------------');

const strArray = str.split(' ')

let maxLengthElem = strArray[0]

for (let i = 0; i < strArray.length; i++) {
    if(strArray[i].length > maxLengthElem.length){
        maxLengthElem = strArray[i]
    }
}

console.log("max length element: ", maxLengthElem);


for (let i = 0; i < strArray.length; i++) {
    if(strArray[i].length === maxLengthElem.length){
        console.log(strArray[i]);
    }
}

console.log('------------------------');


// Cümlə daxilindəki a və A hərfləri * ilə əvəz edilməlidir.


let sentence = "Salam necesen dostumA?";

console.log(sentence.replaceAll(/[a]/gi, '*'));



// "S*l*m necesen dostum?"



console.log('------------------------');

// Email daxilində @ işarəsindən sonrakı hissəni götürün.


let emailAdress = "user123@hotmail.com"

// let result = emailAdress.split('@')[1]
// console.log(result);

let idx = emailAdress.indexOf('@')

console.log(idx);

let result = emailAdress.slice(idx+1)

console.log(result);


console.log('------------------------');


// Verilən string-in əvvəl və son hissəsinə # əlavə edin.


let text = "hello"


// "#hello#"

let length = text.length;

let newText = text.padStart(length + 1, '#').padEnd(length + 2, '#')


console.log(newText);


console.log(`#${text}#`);
