const countries = ['Finland', 'Denmark', 'America', 'Sweden', 'Norway', 'Albania' ,'Iceland']
const numbers = [30, 46, 73, 92, 65]

const mixed = [null, 45, undefined, false, [1, 2, 3], { a: 1, b: 2 }]


// console.log(countries[0]);
// console.log(countries.length);
// console.log(countries[countries.length - 1]);

// let sum = numbers[0]
// for (let i = 1; i < numbers.length; i++) {
//     // console.log(numbers[i]);
//     sum = sum + numbers[i]
// }

// console.log('sum', sum)

// const average = sum / numbers.length

// console.log('average', average)


let sum = 0
// for of
for(let item of numbers){
    // console.log(item);
    sum+=item
}

// console.log("sum", sum);


const student = {
    firstName: 'Elmira',
    lastName: 'Mustafayeva',
    skills: ['html', 'css', 'js'],
    group: 'PTP101'
}

for(let key in student){
    // console.log(key);
    // console.log(student[key]);
    console.log(key + ': ' + student[key]);
}




const students = ['huseynaga', 'fatima', 'muraaaaaaaaaaaad', 'ganira', 'elmira']

students[1] = 'ruqayya'

//push, pop, shift, unshift

// students.push('Amin')


// students.push('Amin', 'Murad') // added Amin and Murad to the end of an array
// students.unshift('Maryam')  // added Maryam to the beginning of an array

// students.shift() //removes first element of an array
// students.pop() // removes last element of an array


console.log(students);


let result = [];
for (let i = 0; i < countries.length; i++) {
    result.push(countries[i].toUpperCase().slice(0, 3))
}

console.log(result);


const newStudentsArr = []

for (let i = 0; i < students.length; i++) {
    newStudentsArr.push(students[i][0].toUpperCase() +  students[i].slice(1))
}

console.log(newStudentsArr);


const nums = [2, -6, 7, 4, -16]

const negativeNums = []
for (let i = 0; i < nums.length; i++) {
    if(nums[i] < 0){
        negativeNums.push(nums[i])
    } 
}


console.log(negativeNums);

let max = nums[0]
let min = nums[0]

for (let i = 1; i < nums.length; i++) {
    if(nums[i] > max){
        max = nums[i]
    }
    if(nums[i] < min){
        min = nums[i]
    }
}
console.log('max', max);
console.log('min', min);



for (let i = 0; i < students.length; i++) {
   let count = 0
    for (let j = 0; j < students[i].length; j++) {
        
        if(students[i][j].toLowerCase() === 'a'){
            count++
        }  
    }

    if(count>=2){
        console.log(students[i]);
    }
}