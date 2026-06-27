const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")

const connect = require("./connectDB/connect");
const routers = require("./router/router");
const error = require("./middleware/error");

const app = express();


dotenv.config();
connect();




app.use(express.json());

app.get ("/" , (req,res)=>{
    res.send("Server is okay")
})


app.use("/api/notes", routers);


app.use(error)










const Port = process.env.PORT || 4800; 
app.listen(Port , ()=>{
    console.log(" SERVER RUNNINGGGGGGGGGGGGGGG")
})