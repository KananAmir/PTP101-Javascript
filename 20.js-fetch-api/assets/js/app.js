//fetch api

// HTTP request methods: GET, DELETE, POST, PUT (PATCH)
// HTTP status codes: 1xx, 2xx, 3xx, 4xx, 5xx

// const API_URL = 'https://northwind.vercel.app/api/suppliers'
// const BASE_URL = 'https://northwind.vercel.app/api'



// console.log(fetch('https://northwind.vercel.app/api/categories')); // promise


// fetch('https://northwind.vercel.app/api/categories').then((response) => {
//     console.log(response);
//     // console.log(response.json());

//     return response.json()
// })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

fetch('https://northwind.vercel.app/api/categories').then((response) => {
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    return response.json()
})
    .then((data) => {
        console.log('categories', data);
    })
    .catch((err) => {
        console.log(err);
    })

fetch('https://northwind.vercel.app/api/suppliers').then((response) => {
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    return response.json()
})
    .then((data) => {
        console.log('suppliers', data);
    })
    .catch((err) => {
        console.log(err);
    })

fetch('https://northwind.vercel.app/api/customers', {
    method: 'GET'
})
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return response.json()
    })
    .then((data) => {
        console.log("customers", data);
    })
    .catch((err) => {
        console.log(err);
    })

