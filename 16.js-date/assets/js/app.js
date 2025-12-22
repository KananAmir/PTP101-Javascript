const date = new Date()

console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getMilliseconds());
console.log(date.getSeconds());
console.log(date.getTime());
console.log(Date.now());


const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')

hour.textContent = String(date.getHours()).padStart(2, '0')
minute.textContent = String(date.getMinutes()).padStart(2, '0')
second.textContent = String(date.getSeconds()).padStart(2, '0')


setInterval(() => {
    const date = new Date()
    hour.textContent = String(date.getHours()).padStart(2, '0')
    minute.textContent = String(date.getMinutes()).padStart(2, '0')
    second.textContent = String(date.getSeconds()).padStart(2, '0')
}, 1000)


const date1 = new Date("2024-12-31");

console.log(date1);

const date3 = new Date(1700000000000);

console.log(date3);



let birthDate = new Date('1999-10-12')

let diff = new Date() - birthDate

console.log(diff);

const saniye = diff / 1000
console.log("saniye", saniye);

const deqiqe = saniye / 60
console.log("deqiqe", deqiqe);

const saat = deqiqe / 60
console.log("saat", saat);

const gun = saat / 24

console.log("gun", gun);

const il = gun / 365

console.log(il);



console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());


const today = new Date().toLocaleDateString("az-AZ");
console.log(`Bugün: ${today}`);