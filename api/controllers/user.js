const User = require('../model/model');
const jwt= require('jsonwebtoken')
const fs = require('fs');
const path = require('path');
const imagedownloader= require('image-downloader')


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


const postlinkphotos = async (req, res) => {
    const { link } = req.body;
    const uploadDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }
    const newName = Date.now() + '.jpg';
    const destPath = path.join(uploadDir, newName);
    await imagedownloader.image({
        url: link,
        dest: destPath,
    });
    res.json({ success: true, filename: newName });
};


const postuploads =(req,res)=>{

    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: "No files were uploaded" });
    }
    const uploadfiles = [];
    req.files.forEach(file => {
        const { path, originalname } = file;
        const ext = originalname.split('.').pop();
        const newPath = `${path}.${ext}`;

        fs.renameSync(path, newPath);
        uploadfiles.push(newPath.replace(/.*uploads[\\/]/, '')); 
    });

    res.json( uploadfiles );
}



module.exports = { gettest, postregister, postlogin, getprofile, postlogout, postlinkphotos, postuploads  };
