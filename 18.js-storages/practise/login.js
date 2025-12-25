const userForm = document.querySelector('#userForm')


const storedUsers = localStorage.getItem('users')
console.log(storedUsers);

let users;
if(storedUsers){
    users = JSON.parse(storedUsers)
}else{
    users = []
}


userForm.addEventListener('submit', (e)=>{    
    e.preventDefault()
    const email = document.querySelector('#email').value.trim()
    const password = document.querySelector('#password').value.trim()

    console.log(users);
    
    const foundUser = users.find((user)=> user.email === email && user.password === password)
    console.log(foundUser);


    if (foundUser) {
        // window.alert('wellcome')

        localStorage.setItem('currentUser', foundUser.username)
        setTimeout(() => {
            window.location.href = 'index.html'
        }, 2000);

    }else{
        window.alert('wrong creadientials!')
    }
    
})