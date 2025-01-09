const fruits = new Set(['Apple','Banana','Cherry'])
fruits.add('Mango');

// console.log(fruits);

console.log(fruits.size);


// convert array to sets
const numbers = [1, 2, 2, 3, 4, 4, 5];
const convertedSets =  new Set(numbers);
console.log(convertedSets);
console.log(convertedSets.size);



const cities = new Set(["New York", "London", "Paris", "Tokyo"]);
console.log(cities.has("Paris"));
// cities.delete("Paris");
console.log(cities);


// clear the sets
cities.clear();
console.log(cities);


// QUE: Union of Two Sets
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const unionOfSets = new Set([...setA,...setB]);
console.log(unionOfSets);

// QUE: Intersection of Two Sets:
function intersectionOfSets(setC, setD)
{
    const resultSet = new Set();

    for(const element of setC)
    {
        if(setD.has(element))
        {
            resultSet.add(element);
        }
    }
    return resultSet;

}
const setC = new Set([1, 2, 3]);
const setD = new Set([3, 4, 5]);
let resultSet = intersectionOfSets(setC,setD);
console.log(resultSet);


// QUE: Difference of two Sets


function differenceOfSets(setC, setD)
{
    const resultSet = new Set();

    for(const element of setC)
    {
        if(!setD.has(element))
        {
            resultSet.add(element);
        }
    }
    return resultSet;

}
const setE = new Set([1, 2, 3]);
const setF = new Set([3, 4, 5]);
let differenceResult = differenceOfSets(setE,setF);
console.log(differenceResult);
