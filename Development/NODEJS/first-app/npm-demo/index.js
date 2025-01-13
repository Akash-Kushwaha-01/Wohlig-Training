var _ = require('underscore'); // assume as core module 
// in NODE we do not have core module 
// It feel as file or folder in module
// when it not get any file or folder by this name then it feels that it inside the NODE MODULE folder.

const result = _.contains([1, 2, 3], 2);
console.log(result);