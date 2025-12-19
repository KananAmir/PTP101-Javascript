// selectors

const todoInput = document.querySelector('.todo-input')
const addBtn = document.querySelector('.add-btn')
const todoList = document.querySelector('.todo-list')

let todos = []

addBtn.addEventListener('click', () => {

    if (!todoInput.value.trim()) {
        window.alert('input can not be empty!')
        return
    }
    const newTodo = {
        id: Date.now(),
        todoText: todoInput.value.trim(),
        completed: false
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
})

function renderTodos(todosArray) {

    todoList.innerHTML = ''
    todosArray.forEach((todo) => {
        const liElem = document.createElement('li')

        const todoContent = document.createElement('div')
        const completedInput = document.createElement('input')
        // completedInput.setAttribute('type', 'checkbox')
        completedInput.type = 'checkbox'
        const todoText = document.createElement('span')
        todoText.textContent = todo.todoText

        const actions = document.createElement('div')
        const deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = `
            <i class="fa-solid fa-trash-can"></i>
        `

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