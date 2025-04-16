const express = require('express')
const cors= require('cors')
const app= express();
const cookieparser= require('cookie-parser')
require('dotenv').config()

const connectDB = require('./db/connect')
const user=require('./routes/user');


const allowedOrigins = [
    'http://localhost:5173',
    'https://nestaway-tyto.onrender.com',
    'https://travel-booking-website-backend-e72p.onrender.com'
];

app.use(cors({
    origin: function(origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            return callback(new Error('CORS policy violation'), false);
        }
        return callback(null, true);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept']
}));
app.options('*', cors());

app.use(express.json())
app.use(cookieparser())
app.use('/uploads',express.static(__dirname + '/controllers/uploads'))


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