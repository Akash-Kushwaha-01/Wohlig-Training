// var url = 'http://mylogger.io/log';

// function log(message)
// {
//     //Send an HTTP request.
//     console.log(message);
    
// };

// module.exports.log = log;
// // module.exports.endUrl = url;



function add(num1, num2)
{
    return num1 + num2;
}

function subtract(num1, num2)
{
    if(num2 > num1)
    {
        return num2 - num1;
    }
    else{
        return num1 - num2;
    }
}

module.exports.addition = add;
module.exports.subtraction = subtract;

