const BASE_URl = 'https://northwind.vercel.app/api'
const tBody = document.querySelector('tbody')

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
                <button class='details'>details</button>
                <button class='delete'>delete</button>
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

            deleteBtn.addEventListener('click', (event) => {


                if (window.confirm('are u sure to delete??')) {
                    fetch(`${BASE_URl}/categories/${c.id}`, {
                        method: 'DELETE'
                    })
                        .then((res) => {
                            console.log(res);
                            if(res.status === 200){
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


            tBody.appendChild(trElem)

        })
    })
    .catch((err) => {

    })