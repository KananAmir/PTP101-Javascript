const incrementBtn = document.querySelector('.increment')
const decrementBtn = document.querySelector('.decrement')
const counter = document.querySelector('.counter')
const numberInput = document.querySelector('.number-input')
const incrementByValueBtn = document.querySelector('.increment-by-value')
let count = 0


// decrementBtn.setAttribute('disabled', true)
decrementBtn.disabled = true

incrementBtn.addEventListener('click', () => {
    count++
    counter.textContent = count
    if (count > 0) {
        decrementBtn.disabled = false
    }
})

decrementBtn.addEventListener('click', () => {
    count--
    counter.textContent = count
    if (count === 0) {
        decrementBtn.disabled = true
    }
})

incrementByValueBtn.addEventListener('click', () => {
    // console.log(numberInput.value);
    // count += Number(numberInput.value)
    count += numberInput.valueAsNumber
    counter.textContent = count
        if (count > 0) {
        decrementBtn.disabled = false
    }

})



const students = [
  {
    id: 1,
    fullName: "Ali Mammadov",
    isGraduated: false,
    group: "PF103",
    contact: {
      email: "ali.mammadov@example.com",
      phone: "+994501234567"
    }
  },
  {
    id: 2,
    fullName: "Leyla Huseynova",
    isGraduated: true,
    group: "AZMPA201",
    contact: {
      email: "leyla.huseynova@example.com",
      phone: "+994505678901"
    }
  },
  {
    id: 3,
    fullName: "Rauf Abbasov",
    isGraduated: false,
    group: "APA201",
    contact: {
      email: "rauf.abbasov@example.com",
      phone: "+994507891234"
    }
  },
  {
    id: 4,
    fullName: "Nigar Aliyeva",
    isGraduated: false,
    group: "PF103",
    contact: {
      email: "nigar.aliyeva@example.com",
      phone: "+994552345678"
    }
  },
  {
    id: 5,
    fullName: "Elvin Karimov",
    isGraduated: true,
    group: "AZMPA201",
    contact: {
      email: "elvin.karimov@example.com",
      phone: "+994703456789"
    }
  },
  {
    id: 6,
    fullName: "Aysel Quliyeva",
    isGraduated: false,
    group: "APA201",
    contact: {
      email: "aysel.quliyeva@example.com",
      phone: "+994772345890"
    }
  },
  {
    id: 7,
    fullName: "Kamran Ismayilov",
    isGraduated: true,
    group: "PF103",
    contact: {
      email: "kamran.ismayilov@example.com",
      phone: "+994602345901"
    }
  }
]


const tBody = document.querySelector('tbody')

students.forEach((student)=>{
    const trElem = document.createElement('tr')

    trElem.innerHTML = `
         <td class="px-6 py-4 whitespace-nowrap">${student.fullName}</td>
        <td class="px-6 py-4 whitespace-nowrap">${student.contact.email}</td>
        <td class="px-6 py-4 whitespace-nowrap">${student.group}</td>
        <td class="px-6 py-4 whitespace-nowrap">
            <span
                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${student.isGraduated ? 'bg-red-100' : 'bg-green-100'}">${student.isGraduated ? 'graduated' : 'not graduated'}</span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            <button
                class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
        </td>
    `

   tBody.appendChild(trElem)
    
})