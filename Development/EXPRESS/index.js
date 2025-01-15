const express = require('express');

const app = express(); // app is basically a handler function.

app.get('/', (req,res) =>{
    res.end('Hello From Home Page');
})

app.get('/about', (req,res) =>{
    if(req.query.name == undefined)
    {
        res.end(`Welcome to about page`);
    }
    else
    {
        res.end(`Hello ${req.query.name} welcome to about page`);
    }
})
 
app.listen(8000, ()=>console.log(`Server Started..`));


// NO NEED OF THIS LONG CODE FUNCTION AFTER EXPRESS.
// function handlingURL(req, res)
// {
//     if(req.url === `/favicon.ico`) return res.end();
//         const log = ` ${Date.now()}: ${req.method} ${req.url} new req received\n`;
//         fs.appendFile(`log.text`, log, (err,data) =>{
//             const myurl = url.parse(`${req.url}`)
//             console.log(myurl);
            
//             switch(myurl.pathname){
//                 case '/' : res.end('Home Page');
//                 break;
//                 case'/about':res.end('About Page');
//                 break;
//                 default:
//                     res.end(`404 Page not Found`);
//             }
//         });
// }


// CREATING SERVER

// const myServer = http.createServer(handlingURL);
// const myServer = http.createServer(app);
// myServer.listen(8000, ()=>console.log(`Server Started!`));