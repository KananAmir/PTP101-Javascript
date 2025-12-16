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

const btn = document.createElement('button');
btn.textContent = 'click'

// wrapper.append(parag, btn)
wrapper.appendChild(parag)
wrapper.appendChild(btn)
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

addBtn.addEventListener('click', () => {
    const value = todoInput.value
    if (!value) {
        alert('input bos ola bilmez!!!')
        return
    }
    const li = document.createElement('li')
    li.textContent = value
    todoList.appendChild(li)

    todoInput.value = ''
})