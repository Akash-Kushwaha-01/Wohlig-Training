//What is async?
//What is await?


//creating promises:
const p1 = new Promise((resolve,reject) =>{
    setTimeout(()=>    resolve("Promise is resovled value!!"),5000)
});

const p2 = new Promise((resolve,reject) =>{
    setTimeout(()=>    resolve("Promise is resovled value!!"),10000)
});


console.log('Start');

//always return a promise.

//  async function getData() {

//     // if you provide a normal message it will get those message and wrap it into PROMISE.

//     // return "Async Example."
//     return p;
//  }

//  const data = getData()
// //  console.log(data); // Return promise.

// // To get Promise message
// data.then((res)=>console.log(res))

//Before using async-await how we used to handle promises

//  function getData()
//  {
//     //JS engine will not wait for promise to be resolved.
//     p.then((res)=>console.log(res))
//     console.log('Testing which will be print promise or this statement');
    
//  };

//  getData();


 // Handle using async await

 // JS engine was waiting for promise to resolved.
 async function handlePromise()
 {
    // await is keyword which can only used inside the ASYNC function
    
    console.log('Hello World');
    const val = await p1;
    console.log('Testing which will be print promise or this statement');
    console.log(val);
    
    
    console.log('Hello World 2');
    const val2 = await p2;
    console.log('Testing which will be print promise or this statement');
    console.log(val2);
    
 }
 handlePromise(); 

 console.log("End");
 