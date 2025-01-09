// QUE:You are given an array of student objects, each containing their name and an array of grades. Use map(), filter(), and reduce() to process this data.

const students = [
    { name: "Alice", grades: [85, 78, 92] },
    { name: "Bob", grades: [56, 64, 72] },
    { name: "Charlie", grades: [95, 90, 93] },
    { name: "David", grades: [60, 58, 65] }
  ];

//   Use map() to calculate the average grade for each student.
const studentsWithAverages = students.map((students) =>{
    const avgGrades = students.grades.reduce((sum,marks)=>sum +marks,0)/students.grades.length;
    return{
        name:students.name,
        avg:parseFloat(avgGrades.toPrecision(3))
    };

});
console.log(studentsWithAverages);

const studentWithAvg70 = studentsWithAverages.filter((student)=> student.avg >70)
console.log(studentWithAvg70);

// Use reduce() to calculate the overall class average.
const overallAvgStudent = studentsWithAverages.reduce((sum,student)=> sum + student.avg , 0)/studentsWithAverages.length;
console.log(overallAvgStudent);


// You are given an array of objects representing items in a shopping cart. Each object contains the item's name, price, and quantity.


const cart = [
    { name: "Laptop", price: 800, quantity: 1 },
    { name: "Phone", price: 500, quantity: 2 },
    { name: "Tablet", price: 300, quantity: 3 },
    { name: "Charger", price: 20, quantity: 5 },
    { name: "Headphones", price: 50, quantity: 1 }
  ];

//   Use map() to calculate the total cost for each item (price × quantity).

  const totalCost = cart.map((cart) => {
    const totalPrice = cart.price * cart.quantity;
        return{
            name:cart.name , total: totalPrice
        }
    });

    console.log(totalCost);
    

    const greaterCost = totalCost.filter((cart)=>{
        return cart.total > 50
    });
    console.log(greaterCost);
    

    const totalCartValue = totalCost.reduce((totalSum , current) =>
     totalSum + current.total
    ,0);

    console.log(totalCartValue);
    