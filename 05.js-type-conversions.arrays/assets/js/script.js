// implicit vs explicit type conversions



// implicit type conversion (coersion) - automatic
console.log(3 + 'a'); // '3a'
console.log('a' + 3); // 'a3']

console.log(3 + '2'); // '32'
console.log('2' + 3); // '23

console.log(typeof ('' + 19));
console.log('a' + true);
console.log('a' + 0);
console.log(NaN + 'hello');

console.log(false + '');


console.log(3 + '17'); // '317'
console.log(3 + +'17'); // 20


console.log(17 + true); // 18
console.log(true - 10); //-9
console.log(false + true); // 1
console.log('' + true + false);
console.log(true + false + ''); // '1'


console.log('4' - '1'); // 3
console.log('4' - 1); // 3
console.log(4 - '1'); // 3
console.log(4 - true); // 3
console.log('4' - true); // 3
console.log(4 - false); // 4

console.log("4" * 2); // 8
console.log("4" / 2); // 2



console.log('4' - true + '2'); // '32'
console.log('4' - true + +'2'); // 5


console.log('4' - 'true'); // NaN
console.log('4' * 'hello'); // NaN


// explicit type conversion - manual

let result;

result = '5'

console.log(Number(result)); // 5


console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number('ten')); // NaN
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number('')); // 0
console.log(Number(' ')); // 0



console.log(Boolean(true)); // true
console.log(Boolean(false)); // false
console.log(Boolean('ten')); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('')); // false
console.log(Boolean(' '))// true



console.log(String(null)); //'null'
console.log(String(5)); //'5'



//parseInt

console.log(Number(11.27)); //11.27
console.log(parseInt('11.27')); // 11
console.log(parseFloat('11.27')); // 11.27

console.log(Number('103abc')); // NaN
console.log(parseInt('103abc')); // 103
console.log(parseInt('abc103')); // NaN

console.log('-----------------');

console.log(Number.parseInt("10")); // 10
console.log(Number.parseInt("10.00")); //10
console.log(Number.parseInt("10.33")); //10
console.log(Number.parseInt("34 45 66")); //34
console.log(Number.parseInt(" 60 ")); // 60
console.log(Number.parseInt("40 years")); //40
console.log(Number.parseInt("He was 40")); //NaN

console.log(Number.parseInt("100101001001", 2));
console.log(Number.parseInt("765", 8));
console.log(Number.parseInt("76BC3", 16)); //486339
console.log(Number.parseInt("76BC3")); // 76

let number = 11.345345456
console.log(number.toFixed()); // '11'
console.log(number.toFixed(3)); // '11.345'
console.log(number.toFixed(1)); // '11.3'

console.log(parseInt(75e2)); // 7500

