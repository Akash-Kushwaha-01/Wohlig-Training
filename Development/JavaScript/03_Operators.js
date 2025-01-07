let score = "33ABC";

// two way to write
console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN --> Not a number it happens when there are another DT with primary DT.

// TODO: NOTE
let score1 = null;
let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1); // number
console.log(valueInNumber1); // 0

let score2 = undefined;
let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2); // NaN

// TODO: NOTE

// "33" => 33
// "33abc","Akash" => NaN
// true => 1; false => 0

// let isLoggedIn = 1;
//  let isLoggedIn = "";
let isLoggedIn = "Akash";
let booleanIsLoggenIn = Boolean(isLoggedIn);

console.log(booleanIsLoggenIn);

// 1 => true; 0 => false;
// "" => false;
// "Akash" => true;

let someNumber = 33;
console.log(typeof someNumber);

let stringNumber = String(someNumber);
console.log(stringNumber);

// *************************************** OPERATIONS *************************************************

let value = 3;
let negValue = -value;

// console.log(negValue);

// console.log( 2+2 );
// console.log( 2-2 );
// console.log( 2*2 );
// console.log( 2**3 ); //POWER
//  console.log( 2/2 );
// console.log( 2%2 ); //Modulus //Remainder

let str1 = "Akash";
let str2 = "Kushwaha";

console.log(str1 + " " + str2);

// TODO: NOTE: First value is as reffered as a Datatype for operations

console.log("1" + 2); //12 //string
console.log(1 + "2"); //12 //num
console.log("1" + 2 + 2); //122 //string
console.log(3 + 1 + "2"); //42 // number

console.log(((3 + 4) * 5) % 3); //2;