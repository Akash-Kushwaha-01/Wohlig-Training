function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    };
}

// const counter = outer();
// counter(); 
// counter(); 

// // QUE:
// Counter with Reset
// Write a function createCounter that returns an object with two methods:

// increment: Increments the counter and logs the current value.
// reset: Resets the counter to 0.

function createCounter ()
{
    let counter = 0;

    return {
        increment()
        {
            counter++;
            console.log(counter);
        },

        reset()
        {
            counter = 0;
            console.log(`counter is set to 0`);
            
        }
    };
}

const myCounter = createCounter();
myCounter.increment();
myCounter.increment();
myCounter.reset();
myCounter.increment();
