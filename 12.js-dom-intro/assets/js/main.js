// DOM - document object model

console.log(window); // global object

// console.log(window.alert("hello!"));


// console.log(document);
console.log(document.head);
console.log(document.body);


const heading = document.getElementById('first')
const secondHeading = document.getElementById('second') 

console.log(heading); // <p id="first">Hi, There!</p>
console.log(secondHeading); // null


const languageInputs = document.getElementsByName('language')

console.log(languageInputs); // NodeList


const allParagElems = document.getElementsByTagName('p')

console.log(allParagElems); //HTMLCollection


const btn = document.querySelector('button')
const allBtns = document.querySelectorAll('button')

console.log(allBtns);


allBtns.forEach((btn)=>{
    console.log(btn);
})

// HTMLCollection is dinamic
// NodeList is static

// Uncaught TypeError: allParagElems.forEach is not a function
// allParagElems.forEach((p)=>{
//     console.log(p);
// })

Array.from(allParagElems).forEach((p)=>{
    console.log(p);
})


const note = document.querySelector('#main .note')
const mainElem = document.querySelector('#main')

// console.log(note);
// console.log(note.parentElement);
// console.log(note.parentElement.parentElement.parentElement);


console.log(mainElem.children[0]);
console.log(mainElem.children[1]);
console.log(mainElem.children); //HTMLCollection(3) [p.note, span, div]


console.log(mainElem.firstElementChild);
console.log(mainElem.lastElementChild);

console.log(mainElem.childNodes); //NodeList(7) [text, p.note, text, span, text, div, text]


console.log(mainElem.firstChild);
console.log(mainElem.firstChild);


const current = document.querySelector('.current');


console.log(current.nextElementSibling);
console.log(current.previousElementSibling);
console.log(current.nextSibling);
console.log(current.previousSibling);
