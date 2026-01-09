const form = document.getElementById('add-form');
const BASE_URL = 'http://localhost:8080'


form.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
        const title = document.getElementById('title').value.trim();
        const category = document.getElementById('category').value.trim();
        const description = document.getElementById('description').value.trim();
        const price = document.getElementById('price').value.trim();
        const imageUrl = document.getElementById('imageUrl').value.trim();

        const newProduct = {
            title,
            category,
            description,
            imageUrl,
            price: Number(price)
        }

        const response = await axios.post(`${BASE_URL}/products`, newProduct)

        if (response.status === 201) {
            // setTimeout(() => {
            //     window.location.href = 'dashboard.html';
            // }, 2000);
            window.location.href = 'dashboard.html';
            Swal.fire({
                title: "Drag me!",
                icon: "success",
                draggable: true
            });
        }

    } catch (error) {
        console.error('Error adding product:', error);
    }

})


async function fillCategories() {
    const categorySelect = document.getElementById('category');

    try {
        const response = await axios.get(`${BASE_URL}/categories`);
        const { data } = response;
        data.forEach((c)=>{
            const option = document.createElement('option');
            option.value = c.id;
            option.textContent = c.name;
            categorySelect.appendChild(option);
        })
    } catch (error) {
        console.log(error.message);

    }
}   

fillCategories()