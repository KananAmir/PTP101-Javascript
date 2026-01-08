const BASE_URL = 'http://localhost:8080'


const getProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        const { data } = response;
        console.log(data);
        renderTableRows(data)
    } catch (error) {
        console.log(error.message);
    }
}

getProducts()

function renderTableRows(arr) {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';
    arr.forEach((product) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                    <img src="${product.imageUrl}" alt="${product.title}" width="50">
            </td>
            <td>${product.title}</td>
            <td>$ ${product.price}</td>
            <td>${product.category}</td>
            <td>${product.description}</td>
            <td>
                <button class='btn delete'><i class="fa-solid fa-trash-can"></i></button>
                <button class='btn edit'><i class="fa-solid fa-pen-to-square"></i></button>
            </td>
        `

        const deleteBtn = tr.querySelector('.delete');
        const editBtn = tr.querySelector('.edit');

        deleteBtn.addEventListener('click', (e) => {
            try {
                
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then(async (result) => {
                    console.log(result);

                    if (result.isConfirmed) {

                        const response = await axios.delete(`${BASE_URL}/products/${product.id}`);
                        console.log(response);
                        if (response.status === 200) {
                            tr.remove();
                        }

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                });

            } catch (error) {
                console.log(error.message);
            }
        })
        tableBody.appendChild(tr);
    })



}