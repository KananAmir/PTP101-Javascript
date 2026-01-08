const BASE_URL = 'http://localhost:8080'
const products = document.querySelector('#products')


async function fetchProducts() {
  try {
    const response = await axios.get(`${BASE_URL}/products`)
    // const productsData = response.data
    // renderCards(productsData)

    console.log(response);
    const { data } = response
    renderCards(data)
  }
  catch (err) {
    console.log(err);
  }
}
fetchProducts()



function renderCards(arr) {
  arr.forEach((product) => {
    const card = document.createElement('div')
    card.classList.add('card')

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