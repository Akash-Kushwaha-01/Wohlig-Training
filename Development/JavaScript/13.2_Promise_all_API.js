const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{ resolve('P1 is SuccessFull')},3000)
});

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{ resolve('P2 is SuccessFull')},5000)
    // setTimeout(()=> reject('P2 is Failed'),1000);
});
const p3 = new Promise((resolve,reject)=>{
    // setTimeout(()=>{ resolve('P3 is SuccessFull')},2000)
    setTimeout(()=> reject('P3 is Failed'),2000);

});

// Promise.all([p1,p2,p3]).then((res) =>console.log(res)
// )
// .catch((err) => console.log(err));

// Promise.allSettled([p1,p2,p3]).then((res)=> console.log(res))
// .catch((err)=>console.log(err));


// Promise.race([p1,p2,p3])
// .then((res)=>console.log(res))
// .catch((err)=>console.error(err));

Promise.any([p1,p2,p3])
.then((res)=>console.log(res))
.catch((err)=>console.error(err));