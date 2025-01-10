function getAge ()
{
    return 19;
}

let age = getAge();
try{
    age = Number.parseInt(age)
    if(age < 18)
    {
        throw new ReferenceError("You are not Eligible to apply for Driving Exam test ");

    }
    else{
        console.log('You can apply for next step of driving exam.');
        
    }
}
catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

console.log("Check for validation....");
