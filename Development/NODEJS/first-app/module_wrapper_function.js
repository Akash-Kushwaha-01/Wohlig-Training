(function(exports, require, module, __filename, __dirname)
    {
        function add(num1 , num2)
        {
            return num1 + num2;
        }

        module.exports.addition = add;
    }
);

console.log(module.exports = exports);


// NOTE: Node.js executes a module only once and places the result in the cache for the next use.
let dbLogger = require('./dblogger');
dbLogger = require('./dblogger');

// DBLogger is loaded. // output 