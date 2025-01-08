// function expression and function declaration:

function addNumbers(num1,num2)
{
    return num1 + num2;
}

console.log(addNumbers(2,3));


let multiplyThree = function(num1,num2)
{
    return [num1*3, num2*3];
}

console.log(multiplyThree(4,5));

let result = multiplyThree(4,5)
console.log(...result);


console.log(declaredFunction());
console.log(expressionFunction()); // gives you reference error.

function declaredFunction() {
    return "I am a declared function!";
}

// const expressionFunction = function() {
//     return "I am a function expression!";
// };


// Anonymous Function Expression
const divideNumbers = function (a, b) {
    return a / b;
  };
  
  // Named Function Expression
  const subtractNumbers = function subtract(a, b) {
    return a - b;
  };
  
  console.log(divideNumbers(10, 2)); 
  console.log(subtractNumbers(10, 2)); 
  
  console.log(divideNumbers.name); // Output: "" (anonymous function has no name)
  console.log(subtractNumbers.name); // Output: "subtract" (named function)
  

  // Arrow Function:

  const square = (num) => num*num;
  console.log(square(4));
  

  // High Order Function:


  function sayHello()
  {
    console.log("Hello");
    
  }

  function functionRepeatation(num, sayHello)
  {
        for(let i=0; i<num; i++)
        {
            sayHello();
        }
  }

  functionRepeatation(5, sayHello);

  // QUE: Write a higher-order function delayedMultiply that takes a function fn and a delay in milliseconds. It should return a new function that, when called, waits for the delay and then executes fn.

function multiply(num1, num2)
{
    return num1 * num2
}

setTimeout(()=>{
    let qResult = multiply(3,5);     
    console.log(qResult);
},1000);



// CALL BACK function

function greet(name, callBack) {
    console.log(`Hello ${name}`);
    callBack(); // Call the callback function
}

function sayGoodBye() {
    setTimeout(() => {
        console.log(`GoodBye!`); 
    }, 2000); // 2 seconds delay
}

greet('Akash', sayGoodBye);

// Example 2: Using Callbacks for Asynchronous Operations
function fetchData(callback)
{
    console.log(`Fetching Data...`);

    setTimeout( ()=>
    {
        const data = {
            id : 1,
            name : "Akash Kushwaha"
        };
        callback(data);
    },5000);
}

function processData(data)
{
    console.log(`ProcessData: ${JSON.stringify(data)}` );
    
};

fetchData(processData);

// TODO: (`${}`), JavaScript converts objects into a string like [object Object]. To fix this, you need to either access the properties of the object directly or use JSON.stringify to convert the object to a string.