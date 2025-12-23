const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const timer = document.querySelector('.timer')

let count = 0;

let intervalId = null;

stopBtn.disabled = true


startBtn.addEventListener('click', (event) => {
    stopBtn.disabled = false
    event.target.disabled = true
    // clearInterval(intervalId)
    intervalId = setInterval(() => {
        count++
        timer.textContent = count
    }, 1000);


})

stopBtn.addEventListener('click', (event) => {
    startBtn.disabled = false
    event.target.disabled = true
    clearInterval(intervalId)
})


resetBtn.addEventListener('click', () => {
    clearInterval(intervalId)
    count = 0
    timer.textContent = count
    startBtn.disabled = false
    stopBtn.disabled = true
})