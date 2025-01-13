let files = require('fs')

const allFiles = files.readdirSync('./');
console.log(allFiles);

// files.readdir('./',function(err, files){
//     if(err)
//     {
//         console.log('ERROR:',err);
//     }
//     else
//     {
//         console.log('FILES:', files);
//     }
// });

