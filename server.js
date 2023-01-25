const express=require("express");
const cors=require("cors");
const morgan=require("morgan");
const colors=require("colors");
const dotenv=require("dotenv");
const port= process.env.PORT || 8080;
const {GetConnectOfDb} =require('./config/db.js');
const path=require("path");

// config dot env file

dotenv.config();

// rest object
const app=express();

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1/users",require("./routes/userRoutes"));
app.use("/api/v1/transactions",require("./routes/TransactionRoutes"));
// app.get("/",(req,res)=>{
//         res.send("<h1>Hello from serveer</h1>");
// })
// serve static file
app.use(express.static(path.join(__dirname,'./client/build')))
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

// port
app.listen(port,()=>{
    GetConnectOfDb(process.env.MONGO_URI);
    console.log(`the app is listen at http://localhost:${port}`)
})