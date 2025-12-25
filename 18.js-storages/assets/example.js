const incrementBtn = document.querySelector('.increment')
const decrementBtn = document.querySelector('.decrement')
const counter = document.querySelector('.counter')
const numberInput = document.querySelector('.number-input')
const incrementByValueBtn = document.querySelector('.increment-by-value')
let count = +localStorage.getItem('count') || 0


window.addEventListener('DOMContentLoaded', () => {
    counter.textContent = count
})

// decrementBtn.setAttribute('disabled', true)

if (count === 0) {
    decrementBtn.disabled = true
} {

}

incrementBtn.addEventListener('click', () => {
    count++
    counter.textContent = count

    addDataToLocalstorage(count)

    if (count > 0) {
        decrementBtn.disabled = false
    }
})

decrementBtn.addEventListener('click', () => {
    count--
    counter.textContent = count
    addDataToLocalstorage(count)

    if (count === 0) {
        decrementBtn.disabled = true
    }
})

incrementByValueBtn.disabled = true

numberInput.addEventListener('input', (e) => {
    console.log('aaa');

    if (!e.target.value) {
        incrementByValueBtn.disabled = true
    } else {
        incrementByValueBtn.disabled = false

    }
})
incrementByValueBtn.addEventListener('click', () => {
    // console.log(numberInput.value);
    // count += Number(numberInput.value)
    count += numberInput.valueAsNumber
    counter.textContent = count
    addDataToLocalstorage(count)
    if (count > 0) {
        decrementBtn.disabled = false
    }

})


function addDataToLocalstorage(value) {
    localStorage.setItem('count', value)
}


console.log('------------------------------------');


const themeBtn = document.querySelector('.theme')


let theme = localStorage.getItem('theme') || 'light'

if (theme === 'light') {
    document.body.classList.remove('dark')
    themeBtn.textContent = 'dark mode'
} else {
    themeBtn.textContent = 'light mode'
    document.body.classList.add('dark')
}

themeBtn.addEventListener('click', (event) => {
    let btn = event.target
    if (btn.textContent === 'dark mode') {
        btn.textContent = 'light mode'
        document.body.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    } else {
        btn.textContent = 'dark mode'
        document.body.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    }
})