
// const sum = (a,b)=>{
//     return a+b
// }

// console.log(sum(1, 3));

// async function sum(){}

const sum = async (a, b) => {
    return a + b
}

// console.log(sum(1, 2)); // returns promise

sum(1, 2).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})


// function fetchData(endpoint) {
//     // fetch('https://northwind.vercel.app/api/' + endpoint)
//     fetch(`https://northwind.vercel.app/api/${endpoint}`)
//         .then((response) => {
//             return response.json()
//         })
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }


// fetchData('categories')
 

async function fetchData(endpoint) {
    try {
        const response  = await fetch(`https://northwind.vercel.app/api/${endpoint}`)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


fetchData('categories')
fetchData('customers')
fetchData('suppliers')