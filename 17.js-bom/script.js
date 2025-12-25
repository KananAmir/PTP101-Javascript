let timer = document.querySelector('#timer');

let startBtn = document.querySelector('#start-button');
let stopBtn = document.querySelector('#stop-button');
let resetBtn = document.querySelector('#reset-button');

let startTimerInterval;

let milliSeconds = 0,
    seconds = 0,
    minutes = 0;

startBtn.addEventListener('click', () => {
    startTimerInterval = setInterval(function () {
        milliSeconds += 10;
        if (milliSeconds == 1000) {
            milliSeconds = 0;
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
                if (minutes == 60) {
                    minutes = 0;
                }
            }
        }

        // let m = minutes < 10 ? "0" + minutes : minutes;
        // let s = seconds < 10 ? "0" + seconds : seconds;
        // let ms = milliSeconds < 10 ? "00" + milliSeconds : milliSeconds < 100 ? "0" + milliSeconds : milliSeconds;

        let m = String(minutes).padStart(2, '0')
        let s = String(seconds).padStart(2, '0')
        let ms = String(milliSeconds).padStart(3, '0')

        timer.innerHTML = `${m}:${s}:${ms}`;
    }, 10);

    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = true;

})

stopBtn.addEventListener('click', (e) => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;

    clearInterval(startTimerInterval);
})

resetBtn.addEventListener('click', (e) => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
    clearInterval(startTimerInterval);
    milliSeconds = 0;
    seconds = 0;
    minutes = 0;
    timer.innerHTML = '00:00:000'
})

