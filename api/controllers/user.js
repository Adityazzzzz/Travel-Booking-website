const User = require('../model/model');
const jwt= require('jsonwebtoken')

const gettest = (req, res) => {
    res.send('test ok');
};


const postregister = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userDoc = await User.create({
            name,
            email,
            password
        });
        res.status(200).json(userDoc); 
    } 
    catch (error) {
        res.status(422).json({ message: "User registration failed", error: error.message });
    } 
};



const postlogin = async (req, res) => {
    const {email,password}=req.body;
    try {
        const userDoc = await User.findOne({ email });
        if (!userDoc) {return res.status(422).json({ message: 'User not found' });}

        const isPasswordCorrect = await userDoc.comparePassword(password);
        if (!isPasswordCorrect) {return res.status(422).json({ message: 'Invalid password' });}

        const token =await userDoc.createJWT();
        res.cookie('token',token).json({user:{_id:userDoc._id, name:userDoc.name, email:userDoc.email}});
    } 
    catch (error) {
        res.status(500).json({ message: "Login failed", error: error.message });
    }
};


const getprofile= (req, res) => {
    const {token}=req.cookies;
    if(token){
        jwt.verify(token,process.env.JWT_SECRET,{},(err,user)=>{
            if(err) throw err;
            res.json(user)
        })
    }
    else{
        res.json(null)
    } 
}

const postlogout=(req,res)=>{
    res.cookie('token','').json(true);
}

module.exports = { gettest, postregister, postlogin, getprofile, postlogout };
