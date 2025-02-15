const mongoose=require('mongoose')

const BookingSchema=new mongoose.Schema({
    place:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Place'
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    checkIn:{
        type:Date,
        required:true
    },
    checkOut:{
        type:Date,
        required:true
    },
    price:Number
})
const Bookingplace = mongoose.model('Book',BookingSchema)
module.exports=Bookingplace 