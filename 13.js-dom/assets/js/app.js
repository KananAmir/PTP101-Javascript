import products from "./data.js";


// innerText
// textContent
// innerHtml

const note = document.querySelector('#note')

console.log(note.textContent);
console.log(note.innerHTML);
console.log(note.innerText);


const text = document.querySelector('.text')

// text.textContent = `<h1>Hello World!</h1>`
text.innerHTML = `<h1>Hello World!</h1>`

// createElement

const parag = document.createElement('p')
const wrapper = document.querySelector('.wrapper')

parag.textContent = 'Lorem ipsum dolor!'

const clickBtn = document.createElement('button');
clickBtn.textContent = 'click'

// wrapper.append(parag, btn)
wrapper.appendChild(parag)
wrapper.appendChild(clickBtn)
// wrapper.prepend(parag)


const list = document.querySelector('.list')

// products.forEach((product)=>{
//     const liElem = document.createElement('li')
//     liElem.textContent = product.title
//     list.appendChild(liElem)
// })


// products.forEach((product) => {
//     list.innerHTML += `
//         <li>${product.title}</li>    
//     `
// })


const todoInput = document.querySelector('#todo')
const addBtn = document.querySelector('.add-btn')


const todoList = document.querySelector('.todo-list')

//js events - click
// const allLiElems = document.querySelectorAll('li') // node list
const allLiElems = document.getElementsByTagName('li') // html collection

// console.log(allLiElems);

addBtn.addEventListener('click', function () {
    const value = todoInput.value
    if (!value) {
        alert('input bos ola bilmez!!!')
        return
    }
    const li = document.createElement('li')
    li.textContent = value



    li.addEventListener('click', (event)=>{
        // console.log(event.target); 
        event.target.remove()
    })

    todoList.appendChild(li)

    todoInput.value = ''


    console.log(allLiElems);

})


const heading = document.createElement('h2')
heading.textContent = 'PTP101'
// todoList.after(heading)
// todoList.before(heading)


const clearBtn = document.querySelector('.clear-btn')

clearBtn.addEventListener('click', ()=>{
    todoList.innerHTML = ''
})



const link = document.createElement('a')

link.textContent = 'github.com'
link.setAttribute('href', 'https://github.com/kananamir')
link.setAttribute('target', '_blank')

// document.querySelector('#banner').insertAdjacentElement('beforeend', link)
document.querySelector('#banner').after(link)

console.log('--------------------');

const photo = document.createElement('img')

photo.setAttribute('src', 'https://www.javascripttutorial.net/wp-content/uploads/2021/04/JavaScript-Tutorial.svg')
photo.setAttribute('alt', 'javascript logo')
photo.setAttribute('width', '100')
document.body.appendChild(photo)

console.log(todoInput.getAttribute('name'));


// todoInput.removeAttribute('placeholder')

console.log(todoInput.hasAttribute('title')); // false
console.log(todoInput.hasAttribute('id')); // true

const header = document.querySelector('header')
const btn = document.createElement('button')

btn.textContent = 'click'

btn.style.color = 'teal'
btn.style.backgroundColor = 'transparent'
btn.style.border = '2px solid teal'
btn.style.cursor = 'pointer'
btn.style.padding = '0.5rem 1rem'


btn.addEventListener('click', ()=>{
    note.style.color = 'red'
})
header.appendChild(btn)



const firstNum = document.querySelector('.first')
const secondNum = document.querySelector('.second')
const sumBtn = document.querySelector('.sum')
const multiplyBtn = document.querySelector('.multiply')
const divideBtn = document.querySelector('.divide')
const subtructBtn = document.querySelector('.subtruct')
const result = document.querySelector('.result')

sumBtn.addEventListener('click', ()=>{
    result.textContent = Number(firstNum.value) + Number(secondNum.value )
})
multiplyBtn.addEventListener('click', ()=>{
    result.textContent = Number(firstNum.value) * Number(secondNum.value )
})
divideBtn.addEventListener('click', ()=>{
    result.textContent = Number(firstNum.value) / Number(secondNum.value )
})
subtructBtn.addEventListener('click', ()=>{
    result.textContent = Number(firstNum.value) - Number(secondNum.value )
})