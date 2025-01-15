const express = require("express");
const { connectMongoDB } = require('./connection')
const { logReqRes } = require('./middlewares')
const userRouter = require("./routes/user")

// const users = require("./MOCK_DATA.json"); // Ensure this file contains your user data in JSON format //EXCLUDE WHEN you run on mongoDB
const { type } = require("os");

const app = express();
const PORT = 8000;

//MiddleWare
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes('log.txt'))



//CONNECTION:
connectMongoDB('mongodb://127.0.0.1:27017/project_01')


//Routes
app.use('/user', userRouter)


app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));




