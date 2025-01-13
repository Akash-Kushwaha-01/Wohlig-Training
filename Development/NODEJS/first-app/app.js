const math = require('./math');

console.log(math);

let num1 = 10;
let num2 = 15;

const result = math.addition(num1, num2);
console.log(result);


const Subtactsresult = math.subtraction(num1,num2);
console.log(Subtactsresult);


console.log(__dirname);
console.log(__filename);




// we can use Object Destruturing for eliminate math.addition :--> const {add, subtract} = require(`./math`);