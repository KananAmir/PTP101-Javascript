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
                <td>${student.fullName}</td>
                <td>${student.contact?.email || 'email datasi yoxdur!'}</td>
                <td>ptp101</td>
                <td>not graduated</td>
                <td>
                    <button>delete</button>
                </td>
    `

   tBody.appendChild(trElem)
    
})