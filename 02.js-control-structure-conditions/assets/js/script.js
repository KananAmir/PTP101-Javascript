
// if (condition) {

// }



const person = {
    fName: "fatima",
    lName: "guliyeva",
    age: 16,
}

if (person.age >= 18) {
    console.log('U can vote!');
} else {
    console.log('U can not vote yet, u are little!');
}


let num = 0;

// if(num > 0){
//     console.log(`${num} is positive number`);
// }else{
//     console.log(`${num} is negative number`);
// }


if (num > 0) {
    console.log(`${num} is positive number`);
} else if (num < 0) {
    console.log(`${num} is negative number`);
} else {
    console.log(`${num} is neighter positive nor negative number`);
}


let weather = 'sunny'

if (weather === 'rainy') {
    console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
    console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
    console.log('Go out freely.')
} else {
    console.log('No need for rain coat.')
}


// switch case

let day = 'monday';
switch (day) {
    case 'sunday':
        console.log("today is 7th day");
        break;
    case 'monday':
        console.log("today is 1st day");
        break;
    case 'tuesday':
        console.log("today is 2nd day");
        break;
    case 'wednesday':
        console.log("today is 3rd day");
        break;
    case 'thursday':
        console.log("today is 4rd day");
        break;
    case 'friday':
        console.log("today is 5th day");
        break;
    case 'saturday':
        console.log("today is 6th day");
        break;
    default:
        console.log("invalid week day!");
        break;
}



let number = 14
let result;


result = number % 2 === 0 ? "even" : "odd"

console.log(result);

let month = "july";

switch (month) {
    case "december":
    case "january":
    case "february":
        console.log("winter");
        break;
    case "march":
    case "april":
    case "may":
        console.log("Spring");
        break;
    case "june":
    case "july":
    case "august":
        console.log("Summer");
        break;
    case "september":
    case "october":
    case "november":
        console.log("Autumn");
        break;

    default:
        break;
}