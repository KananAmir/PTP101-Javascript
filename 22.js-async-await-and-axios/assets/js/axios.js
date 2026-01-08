

// axios('https://northwind.vercel.app/api/categories')
//     .then((resp)=>{
//         console.log(resp.data);
//     })
//     .catch((err)=>{
//         console.error(err);
//     })

 

async function getData(){
    try {
        const response = await axios('https://northwind.vercel.app/api/categories');
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

async function deleteDataById(id){
    try {
        const response = await axios.delete(`https://northwind.vercel.app/api/categories/${id}`);
        console.log(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
async function addNewData(payload){
    try {
        const response = await axios.post(`https://northwind.vercel.app/api/categories`, payload);
        console.log(response);
    } catch (error) {
        console.log(error.message);
    }
}

deleteDataById(1)

addNewData({
    name: "New Category",
    description: "This is a new category"
})

getData();