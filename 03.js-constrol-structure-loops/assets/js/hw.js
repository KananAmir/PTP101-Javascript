
// 3) Düzbucaqlı üçbucağın katetləri və hipotenuzunun uzunluğu verilib.
// Verilən məlumatlara əsəsən bu üçbucağın düzbucaqlı üçbucaq olub olmadığını
// yoxlayan proqram tərtib edin.

// Məsələn: katet1=3, katet2=4, hipotenuz=5 yazdıqda cavab bu şəkildə olmalıdır:

// Result: düzbucaqlı üçbucaqdır

// Məsələn: katet1=3, katet2=3, hipotenuz=8 yazdıqda cavab bu şəkildə olmalıdır:

// Result: düzbucaqlı üçbucaq deyil.

// let a = 3, b = 5, c = 4;
// let a = 3, b = 4, c = 5;
let a = 5, b = 3, c = 4;

if(a**2 + b**2 === c**2 || a**2 + c**2 === b**2 || b**2 + c**2 === a**2){
    console.log("düzbucaqlı üçbucaqlıdır");
}else{
    console.log("düzbucaqlı üçbucaq deyil.");
}


// 4) Daxil olunmuş ədədin mərtəbələrinin cəmini, hasilini və ədədi ortasını qaytaran alqoritm yazın.



// Əgər daxil edilən ədəd olarsa:
// Rəqəmlərin cəmi:
// Rəqəmlərin hasili:
// Rəqəmlərin ədədi ortası:


let number = 174;

let first = number % 10;
let second = (number % 100 - first) / 10;
let third =  (number - number % 100) / 100


console.log(first);
console.log(second);
console.log(third);


let multiply = first * second * third
let sum = first + second + third
let average = sum / 3

console.log(sum, multiply, average);


// 7) Bu üç ədəd arasından ən böyük olanı müəyyən edən proqram tərtib edin.
// Əgər a ən böyükdürsə → “a ən böyük ədəddir”
// Əgər b ən böyükdürsə → “b ən böyük ədəddir”
// Əgər c ən böyükdürsə → “c ən böyük ədəddir”
// Giriş:
// a = 5
// b = 2
// c = 9

// Çıxış:
// 9 ən böyük ədəddir

let n1 = 55;
let n2 = 55;
let n3 = 9;


if(n1 > n2 && n1 > n3 ){
    console.log(`${n1}  ən böyük ədəddir`);
} else if(n2 > n1 && n2 > n3){
    console.log(`${n2}  ən böyük ədəddir`);
}else if(n3 > n2 && n3 > n1){
    console.log(`${n3}  ən böyük ədəddir`);
}

console.log(Math.max(n1, n2, n3));
