const express = require('express')
const app= express();
const cors= require('cors')
require('dotenv').config()
const connectDB = require('./db/connect')
//vO2AFgYqGjWo8u9j


// const Authentication= require('./middleware/authentication')
const user=require('./routes/user');



app.use(express.json())
app.use(cors({
    credentials:true,
    origin:' http://localhost:5173'
}))


app.use(user)


const port= 5000 || process.env.MONGO_URL;
const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port)
    } 
    catch(error){
        console.log(error)        
    }
}


start();