const http = require('http');
const fs = require('fs');
const url = require('url');
const myServer = http.createServer((req, res) =>{
    if(req.url === `/favicon.ico`) return res.end();
    const log = ` ${Date.now()}: ${req.method} ${req.url} new req received\n`;
    fs.appendFile(`log.text`, log, (err,data) =>{
        const myurl = url.parse(`${req.url}`)
        console.log(myurl);
        
        switch(myurl.pathname){
            case '/' : res.end('Home Page');
            break;
            case'/about':res.end('About Page');
            break;
            default:
                res.end(`404 Page not Found`);
        }
    });
});

myServer.listen(8000, ()=> console.log(`Server Started`));
