const express = require('express')
const app= express();
const cors= require('cors')
const cookieparser= require('cookie-parser')
require('dotenv').config()

const connectDB = require('./db/connect')
const user=require('./routes/user');


app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))
app.use('/uploads',express.static(__dirname + '/controllers/uploads'))
app.use(cookieparser())
app.use(express.json())


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