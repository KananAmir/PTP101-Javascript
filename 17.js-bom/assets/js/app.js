// DOM - document object model
// BOM - browser object model

import products from './data.js'

console.log(window);


const btn = document.querySelector('.btn')
const backBtn = document.querySelector('.back')
const forvardBtn = document.querySelector('.forvard')


btn.addEventListener('click', ()=>{
    window.location.href = 'https://github.com/KananAmir'
})


backBtn.addEventListener('click', ()=>{
    // window.history.back()
    window.history.go(-1)
})
forvardBtn.addEventListener('click', ()=>{
    window.history.forward()
})

//timing functions

// setTimeout vs setInterval


// let timeout = setTimeout(()=>{
//     console.log('Hello World!');
// }, 2000)

// console.log(timeout);

let interval = setInterval(()=>{
    console.log('hello!');
}, 1000)


console.log(interval);


setTimeout(()=>{
    clearInterval(interval)
}, 5000)

const image = document.querySelector('.image')

console.log(products);
let index = 0
let intervalId = setInterval(()=>{
    image.src = products[index].thumbnail
    index++

    if(index === products.length){
        index = 0
    }
}, 1000)


// clipboard

const copyBtn = document.querySelector('.copy')
const text = document.querySelector('.text')


copyBtn.addEventListener('click', ()=>{
    window.navigator.clipboard.writeText(text.textContent).then(()=>{
        console.log('text copied successfully!'); 
    })
})