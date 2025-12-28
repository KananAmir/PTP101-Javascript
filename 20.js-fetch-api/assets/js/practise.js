import { BASE_URl } from "./constant.js"

const form = document.querySelector('.category-form')
const table = document.querySelector('table')
const tBody = document.querySelector('tbody')
const spinner = document.querySelector('.spinner')
let editedId = null;

function getCategories() {
    tBody.innerHTML = ''
    spinner.classList.replace('d-none', 'd-flex')
    fetch(`${BASE_URl}/categories`).then((res) => {
        if (!res.ok) {
            throw new Error('Error status', res.status)
        }

        return res.json()
    })
        .then((data) => {
            console.log(data);

            data.forEach((c) => {
                const trElem = document.createElement('tr')
                trElem.innerHTML = `
            <td>${c.id}</td>
            <td>${c.name}</td>
            <td>${c.description}</td>
            <td>
                <a class='details btn btn-primary' href='details.html?id=${c.id}'>details</a>
                <button class='delete btn btn-danger'>delete</button>
                <button class='edit btn btn-success'>edit</button>
            </td>
        `

                const detailsBtn = trElem.querySelector('.details')

                detailsBtn.addEventListener('click', () => {

                    fetch(`${BASE_URl}/categories/${c.id}`)
                        .then((res) => {
                            return res.json()
                        }).then((category) => {
                            // console.log(category);
                            window.alert(category.name)

                        }).catch((err) => {
                            console.error(err)
                        })
                })

                const deleteBtn = trElem.querySelector('.delete')
                const editBtn = trElem.querySelector('.edit')

                deleteBtn.addEventListener('click', (event) => {
                    if (window.confirm('are u sure to delete??')) {
                        fetch(`${BASE_URl}/categories/${c.id}`, {
                            method: 'DELETE'
                        })
                            .then((res) => {
                                console.log(res);
                                if (res.status === 200) {
                                    // console.log(event.target.parentElement.parentElement);
                                    // event.target.parentElement.parentElement.remove()
                                    event.target.closest('tr').remove()

                                }
                            })
                            .catch((err) => {
                                console.error(err)
                            })
                    }
                })

                editBtn.addEventListener('click', (event) => {
                    editedId = c.id
                    const name = document.querySelector('#name')
                    const desc = document.querySelector('#desc')
                    name.value = event.target.closest('tr').children[1].textContent
                    desc.value = event.target.closest('tr').children[2].textContent

                })
                tBody.appendChild(trElem)

            })

            table.classList.replace('d-none', 'table')
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            spinner.classList.replace('d-flex', 'd-none')
        })

}

getCategories()
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.querySelector('#name').value.trim()
    const description = document.querySelector('#desc').value.trim()

    const newCategory = {
        name,
        description
    }

    if (!name && !description) {
        window.alert('fill all inputs!');
        return
    }


    if (!editedId) {
        fetch(`${BASE_URl}/categories`, {
            method: 'POST',
            body: JSON.stringify(newCategory),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response);

            if (response.status === 201) {
                // getCategories()

                return response.json()
            }
        })
            .then((data) => {
                // console.log(data);
                const trElem = document.createElement('tr')
                trElem.innerHTML = `
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.description}</td>
            <td>
                <a class='details btn btn-primary' href='details.html?id=${data.id}'>details</a>
                <button class='delete btn btn-danger'>delete</button>
                <button class='edit btn btn-success'>edit</button>
            </td>
        `

                tBody.append(trElem)
            })
            .catch((err) => {
                console.log(err);
            })
    } else {
        fetch(`${BASE_URl}/categories/${editedId}`, {
            method: 'PUT',
            body: JSON.stringify(newCategory),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response);

            if(response.status === 200){
                getCategories()
            }
        })
            .catch((err) => {
                console.log(err);
            })
    }


    editedId = null
})
