const dotenv = require('dotenv')
dotenv.config();
// console.log(process.env.PORT);
// console.log(process.env.DB_HOST);


const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set
console.log(port);
const host = process.env.DB_HOST;
console.log(host);


