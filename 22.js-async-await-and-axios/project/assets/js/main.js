const BASE_URL = 'http://localhost:8080'
const products = document.querySelector('#products')
const searchInput = document.querySelector('#search')

let allProducts;
async function fetchProducts() {
  try {
    const response = await axios.get(`${BASE_URL}/products`)
    // const productsData = response.data
    // renderCards(productsData)

    console.log(response);
    const { data } = response
    allProducts = [...data]
    renderCards(data)
  }
  catch (err) {
    console.log(err);
  }
}
fetchProducts()



function renderCards(arr) {
  products.innerHTML = ''
  arr.forEach((product) => {
    const card = document.createElement('a')
    card.classList.add('card')
    card.href = `details.html?id=${product.id}`

    card.innerHTML = `
              <img src="${product.imageUrl}" alt="Modern Desk Lamp">
              <div class="meta">
                  <div class="title">${product.title}</div>
                  <div class="category">${product.category}</div>
                  <div class="price">$${product.price}</div>
              </div>
        `
    products.appendChild(card)
  })
}

async function getData() {
  try {
    const resp = await fetch('')
    const data = await resp.json()

  } catch (error) {
    console.log(err);
  }
}


// const person = {
//   name: "John",
//   age: 30
// }

// const { name, age } = person


// searching (debounce)


let intervalId;

searchInput.addEventListener('keyup', (event) => {
  const searchValue = event.target.value.toLowerCase().trim()
  clearTimeout(intervalId)
  try {
    // const response = await axios.get(`${BASE_URL}/products?q=${searchValue}`)
    intervalId = setTimeout(async () => {
      const response = await axios.get(`${BASE_URL}/products?title_like=${searchValue}`)
      console.log(response.data);
      renderCards(response.data)
    }, 500)

  } catch (error) {
    console.log(error.message);

  }
})


const categorySelect = document.getElementById('category');
async function fillCategories() {

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


categorySelect.addEventListener('change', async (e) => {
  try {
    const categoryId = e.target.value;
    if (categoryId === 'all') {
      renderCards(allProducts);
      return;
    }
      
    const response = await axios.get(`${BASE_URL}/products?category=${categoryId}`)
    const { data } = response;
    renderCards(data)
    
  } catch (error) {
    console.log(error.message);
    
  }
});