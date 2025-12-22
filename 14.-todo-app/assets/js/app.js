// selectors

const todoInput = document.querySelector('.todo-input')
const addBtn = document.querySelector('.add-btn')
const todoList = document.querySelector('.todo-list')
const errorMessage = document.querySelector('.error-message')
let todos = []


const addTodo = () => {

    if (!todoInput.value.trim()) {
        // window.alert('input can not be empty!')
        errorMessage.classList.add('show')
        todoInput.classList.add('error-border')
        return
    }
    const newTodo = {
        id: Date.now(),
        todoText: todoInput.value.trim(),
        completed: false,
        createdAt: new Date().toDateString()
    }


    todos.push(newTodo)

    renderTodos(todos)
    todoInput.value = ''
    console.log(todos);

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Todo Added Successfully!",
        showConfirmButton: false,
        timer: 1500
    });

    errorMessage.classList.remove('show')
    todoInput.classList.remove('error-border')
}


addBtn.addEventListener('click', addTodo)

function renderTodos(todosArray) {

    todoList.innerHTML = ''
    todosArray.forEach((todo) => {
        const liElem = document.createElement('li')

        const todoContent = document.createElement('div')
        const completedInput = document.createElement('input')
        todoContent.style.display = 'flex'
        todoContent.style.gap = '10px'
        // completedInput.setAttribute('type', 'checkbox')
        completedInput.type = 'checkbox'

        completedInput.checked = todo.completed

        completedInput.addEventListener('change', (e)=>{
            console.log(e.target.checked);
            
           todo.completed = e.target.checked
           
           renderTodos(todos)

        //    console.log(todos);
           
        })

        const todoText = document.createElement('p')
        todoText.textContent = todo.todoText
        if (todo.completed) {
            todoText.style.textDecoration = 'line-through'
        }

        const dateSpan = document.createElement('span')
        dateSpan.textContent = todo.createdAt

        todoText.append(', ', dateSpan)
        const actions = document.createElement('div')
        const deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = `
            <i class="fa-solid fa-trash-can"></i>
        `
        deleteBtn.className = 'delete-btn'

        deleteBtn.addEventListener('click', (e) => {
            // console.log(e.target);
            // console.log(e.currentTarget);
            console.log(todo.id);
            // console.log(e.currentTarget.parentElement.parentElement);
            // e.currentTarget.parentElement.parentElement.remove()
            // e.currentTarget.closest('li').remove()



            Swal.fire({
                title: "Are you sure to delete todo?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {

                if (result.isConfirmed) {

                    todos = todos.filter((q) => q.id !== todo.id)
                    renderTodos(todos)

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your todo has been deleted.",
                        icon: "success",
                    });
                }
            });

        })

        todoContent.append(completedInput, todoText)
        actions.append(deleteBtn)
        liElem.append(todoContent, actions)
        todoList.append(liElem)
    })
}

renderTodos(todos)


todoInput.addEventListener('keyup', (e) => {
    if (e.target.value.trim()) {
        errorMessage.classList.remove('show')
        e.target.classList.remove('error-border')
    }else{
        errorMessage.classList.add('show')
        e.target.classList.add('error-border')

    }
})


window.addEventListener('keyup', (e)=>{
    if(e.code === 'Enter'){
        addTodo()
    }
    
})