// localStorage
// sessionStorage
// cookie

const addBtn = document.querySelector('.add')
const removeBtn = document.querySelector('.remove')
const getBtn = document.querySelector('.get-data')
const clearAllBtn = document.querySelector('.clear')


addBtn.addEventListener('click', ()=>{
    localStorage.setItem('username', 'ganira')
})

removeBtn.addEventListener('click', ()=>{
    localStorage.removeItem('username')
})

getBtn.addEventListener('click', ()=>{
    const localData = localStorage.getItem('username')
    console.log(localData);
    
    // window.alert(localData)
})

clearAllBtn.addEventListener('click', ()=>{
    localStorage.clear()
})

localStorage.setItem('isAdmin', true)

console.log(typeof localStorage.getItem('isAdmin'));


const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] 
const numbers = [1,2,3,4]

const obj = {
    username: 'jhon_doe',
    email: 'jhon@code.edu.az',
    isOnline: false,
}

// yanlisdir!
// localStorage.setItem('numbers', numbers)
// localStorage.setItem('user', obj)


localStorage.setItem('numbers', JSON.stringify(numbers))
localStorage.setItem('user', JSON.stringify(obj))



console.log(JSON.parse(localStorage.getItem('user')));
console.log(JSON.parse(localStorage.getItem('numbers')));
