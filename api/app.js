const express = require('express')
const app= express();
const cors= require('cors')
const cookieparser= require('cookie-parser')
require('dotenv').config()

const connectDB = require('./db/connect')
const user=require('./routes/user');


app.use(cors({
    credentials:true,
    origin:'https://nestaway-tyto.onrender.com/'
}))
app.use('/uploads',express.static(__dirname + '/controllers/uploads'))
app.use(cookieparser())
app.use(express.json())


app.use(user)


const port=process.env.PORT || 5000;
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