const btn = document.querySelector('.click')

btn.addEventListener('click', () => {
    console.log('u clicked me!');
})
btn.addEventListener('contextmenu', (e) => {
    console.log('contextmenu');
    console.log(e.target);

})



// document.addEventListener('click', ()=>{
//     console.log('clicked!'); 
// })


const box = document.querySelector('.box')

box.addEventListener('mousedown', () => {
    console.log('mousedown');
})
box.addEventListener('mouseup', () => {
    console.log('mouseup');
})
box.addEventListener('mouseout', () => {
    console.log('mouseout');
})



// window.addEventListener('keydown', (event)=>{
//     console.log(event.code);
//     console.log(event.key);
//     console.log(event.keyCode);
// })

// window.addEventListener('keyup', (event)=>{
//     console.log(event.code);
// })


const searchInput = document.querySelector('#search')


// searchInput.addEventListener('keyup', (e) => {
//     console.log(e.target.value);

// })


searchInput.addEventListener('focus', (e) => {
    e.target.style.backgroundColor = 'orange'
})
searchInput.addEventListener('blur', (e) => {
    e.target.style.backgroundColor = 'unset'
})

// form events


// searchInput.addEventListener('input', (e)=>{
//     console.log(e.target.value);
// })


searchInput.addEventListener('change', (e)=>{
    console.log(e.target.value);
})


const sort = document.querySelector('#sort')

sort.addEventListener('change', (event)=>{
    console.log(event.target.value);
    
})


const userForm = document.querySelector('.user-form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

const users = []
userForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log('form submited');
    
    const newUser = {
        username: username.value,
        email: email.value,
        password: password.value
    }


    users.push(newUser)


    console.log(users);
    
})

const eyeIcon = document.querySelector('.eye')

eyeIcon.addEventListener('click', (e)=>{
    
    if(e.target.classList.contains('fa-eye')){
        e.target.classList.replace('fa-eye', 'fa-eye-slash')
        password.type = 'text'
    }else{
        e.target.classList.replace('fa-eye-slash', 'fa-eye')
        password.type = 'password'

    }
})

window.addEventListener('load', ()=>{
    console.log('home page loaded');
})

window.addEventListener('DOMContentLoaded', ()=>{
    console.log('DOMContentLoaded');
})


const header = document.querySelector('.header')

// window.addEventListener('scroll', (e)=>{
//     // console.log(e);
//     // console.log(window.scrollY);
//     if(window.scrollY > 0){
//         header.classList.add('header-scroll')
//     }else{
//         header.classList.remove('header-scroll')
//     }
// })


window.addEventListener('scroll', (e)=>{
   header.classList.toggle('header-scroll', window.scrollY > 0)
})