let person = {
    name: "Akash Kushwaha",
    age : 22,
    address:{
        city:"Mumbai",
        state:"Maharshtra"
    }
};

const {address:{city,state}} = person;
console.log(city);
console.log(state);
console.log(person.name +" lives in "+ person.address.city);



// Looping on Object:

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};


for(let details in car)
{
    console.log(details +" : " + car[details] );
     
}


// Write a function hasProperty(obj, prop) that checks if the given property exists in the object.

function hasProperty(obj, proprty)
{
    return proprty in  obj;
};

let anotherPerson = {
    name: "Akash Kushwaha",
    age : 22,
    address:{
        city:"Mumbai",
        state:"Maharshtra"
    }
}
console.log(hasProperty(anotherPerson, "name"));


function copyObject(original)
{
    return JSON.parse(JSON.stringify(original));
}

const original = { a: 1, b: 2 };
const copy = copyObject(original);
copy.b = 3;

console.log(original); // { a: 1, b: 2 }
console.log(copy); // { a: 1, b: 3 }

//Write a function groupBy(arr, key) that groups an array of objects by a specific property.

const employees = [
    {name: 'Alina', company: 'Google', id : 1},
    {name: 'Vika', company: 'Coca Cola', id : 2},
    {name: 'Alex', company: 'Jonson & Jonson', id : 3},
    {name: 'Vlad', company: 'Google', id : 4},
    {name: 'Fibi', company: 'Coca Cola', id : 5},
    {name: 'Joey', company: 'Google', id : 6},
  ];

  
  const grouped = groupBy(employees, employee => employee.company);
  console.log(grouped);
  