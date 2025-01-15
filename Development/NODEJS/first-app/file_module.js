let files = require('fs')

// FOR FILE MODULE ALWAYS TRY TO SYNC IN ASYNC WAY

// READ FILE:
//SYNC WAY:
// const allFiles = files.readdirSync('./');
// console.log(allFiles);

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



// const asyncWayAllFiles = files.readFile('file_module_example.txt','utf-8' ,(err, data) => {
//     if(err)
//         {
//             console.log(`Error File Handling: ${err}`);
//             return;
//         } 
//     else
//         {
//             console.log(`File Content Data: ${data}`);
//         }   

// });


// WRITING FILE

// const readFile = files.writeFile('file_module_example.txt','Hello World', (err) =>{
//     if(err)
//     {
//         console.log(`Not able to write in files ${err}`);
//         return;
//     }
//     else
//     {
//         console.log('File Written Successfully.');
        
//     }
// });


// APPEND FILE 

// files.appendFile('./file_module_example.txt', '\n Appening new text in existing file' , (err) =>{
//     if(err)
//     {
//         console.log(`Error Appendind to the file: ${err}`);
        
//     }
//     console.log('Appennding data successfully');
// });


//REMOVE FILES
files.unlink('./file_module_example.txt' , (err) =>{
    if(err)
    {
        console.log(`Error Deleting Files: ${err}`);
        
    }
    else
    {
        console.log(`Files Deleted SuccessFully!`);
        
    }
})

// 5. Checking if a File or Directory Exists javascript
files.access('./file_module_example.txt' , (err) =>{
    if(err)
    {
        console.log(`Files does not exists`);
        return;
    }
    console.log(`Files Exists`);
    
});

