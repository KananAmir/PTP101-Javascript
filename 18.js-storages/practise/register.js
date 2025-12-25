const userForm = document.querySelector('#userForm')


const storedUsers = localStorage.getItem('users')
console.log(storedUsers);

let users;
if(storedUsers){
    users = JSON.parse(storedUsers)
}else{
    users = []
}

console.log(users);

userForm.addEventListener('submit', (e)=>{

    
    e.preventDefault()
    const username = document.querySelector('#username').value.trim()
    const email = document.querySelector('#email').value.trim()
    const password = document.querySelector('#password').value.trim()

    if (username === '' || email === '' || password === '') {
        window.alert('fill all inputs!')
        return
    }

    const newUser = {
        id: Date.now(),
        username,
        email,
        password
    }
    
    // users.push(newUser)
    users = [...users, newUser]
    localStorage.setItem('users', JSON.stringify(users))

    window.location.href = 'login.html'
})