const { Socket } = require('dgram');
const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url ==='/')
    {
        res.write("Hello World");
        res.end();
    }
    if(req.url ==='/api/Courses')
    {
        res.write(JSON.stringify([1,2,3]));
        res.end();  
    }   
});

server.on('connection', (socket) =>{
    console.log(`new connection`)
    
}); 

server.listen(3000);
console.log(`Listening on Port 3000`);
