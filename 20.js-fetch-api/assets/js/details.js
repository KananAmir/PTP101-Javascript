import { BASE_URl } from "./constant.js";
const url = new URLSearchParams(window.location.search)


const id = url.get('id');
const goBackBtn = document.querySelector('.back')
if (id) {
    getCategoryDetails()
}

function getCategoryDetails() {
    fetch(`${BASE_URl}/categories/${id}`)
        .then((resp) => {

            return resp.json()
        })
        .then((data) => {
            console.log(data);

            const title = document.querySelector('.title')
            const desc = document.querySelector('.description')
            title.textContent = data.name
            desc.textContent = data.description
        })
        .catch((err) => {
            console.error(err)
        })
}

goBackBtn.addEventListener('click', ()=>{
    window.history.back()
})