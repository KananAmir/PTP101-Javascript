// let str = 'Hello World'
let str = new String('hello world')


// String.prototype.customCapitalize = function(){
//     return `${this[0].toUpperCase()}${this.slice(1)}`
// }


String.prototype.customCapitalize = function () {
    return this.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')
}

String.prototype.vawyString = function () {
    let result = '';
    let word = this.toLowerCase()
    let index = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i] === ' ') {
            result += ' '
        } else {
            if (index % 2 === 0) {
                result += word[i].toUpperCase()
            } else {
                result += word[i].toLowerCase()
            }
            index++;
        }
    }
    return result;
}

console.log(str.customCapitalize());
console.log(str.vawyString());

console.log('abb ba'.vawyString());
console.log(str.vawyString());


// custom forEach

Array.prototype.customForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const arr = [10, 20, 30]
// arr.forEach((item, index, array) => {
//     console.log(item, index, array);
// })

arr.customForEach((number, i, arr) => {
    console.log(number, i, arr);
})


//custom map
Array.prototype.customMap = function (callback) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this))
    }

    return result
}


// console.log(arr.map((item) => item ** 2));
console.log(arr.customMap((item) => item ** 2));
console.log(arr.customMap((item) => item ** 3));
