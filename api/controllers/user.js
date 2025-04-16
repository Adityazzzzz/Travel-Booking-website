const User = require('../model/user');
const Place = require('../model/place')
const Book = require('../model/booking')
const jwt = require('jsonwebtoken')
const fs = require('fs');
const path = require('path');
const imagedownloader = require('image-downloader')

function getUserDatafromtoken(req){
    return new Promise ((resolve,reject)=>{
        jwt.verify(req.cookies.token, process.env.JWT_SECRET, {}, async (err, userData) => {
            if(err) throw err;
            resolve(userData)
        })
    })
}


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
    const { email, password } = req.body;
    try {
        const userDoc = await User.findOne({ email });
        if (!userDoc) { return res.status(422).json({ message: 'User not found' }); }

        const isPasswordCorrect = await userDoc.comparePassword(password);
        if (!isPasswordCorrect) { return res.status(422).json({ message: 'Invalid password' }); }

        const token = await userDoc.createJWT();
        res.cookie('token', token).json({ user: { _id: userDoc._id, name: userDoc.name, email: userDoc.email } });
    }
    catch (error) {
        res.status(500).json({ message: "Login failed", error: error.message });
    }
};


const getprofile = (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) throw err;
            res.json(user)
        })
    }
    else {
        res.json(null)
    }
}

const postlogout = (req, res) => {
    res.cookie('token', '').json(true);
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


const postuploads = (req, res) => {

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

    res.json(uploadfiles);
}


const postlinkplaces = (req, res) => {
    const { token } = req.cookies;
    const { title, address, addedPhotos, perks, description, extraInfo, checkIn, checkOut, maxGuests, price } = req.body

    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, user) => {
        if (err) throw err;
        const placeDoc = await Place.create({
            owner: user.id,
            title, address, photos: addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price
        })
        res.json(placeDoc)
    })
}


const getplaceslist = (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, user) => {
        const { id } = user
        res.json(await Place.find({ owner: id }))
    })
}


const getplacebyid = async (req, res) => {
    const { id } = req.params
    res.json(await Place.findById(id))
}


const putplacebyid = async (req, res) => {
    const { token } = req.cookies;
    const {
        id, title, address, addedPhotos, description,
        perks, extraInfo, checkIn, checkOut, maxGuests, price,
    } = req.body;
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, userData) => {
        if (err) throw err;
        const placeDoc = await Place.findById(id);
        if (userData.id === placeDoc.owner.toString()) {
            placeDoc.set({
                title, address, photos: addedPhotos, description,
                perks, extraInfo, checkIn, checkOut, maxGuests, price,
            });
            await placeDoc.save();
            res.json('ok');
        }
    });
};


const gethomepageplaces=async(req,res)=>{
    res.send(await Place.find())
}


const postbookings = async(req, res) => {
    const userData= await getUserDatafromtoken(req);
    const { place, checkIn, checkOut, numberOfGuests, name, phone, price } = req.body;

    Book.create({ place, checkIn, checkOut, numberOfGuests, name, phone, price, user: userData.id })
        .then((doc) => {
            res.json(doc); 
        })
        .catch((err) => {
            console.error("Error creating booking:", err);
            res.status(500).json({ error: "Failed to create booking" });
        });
};


const getbookings=async(req,res)=>{
    const userData= await getUserDatafromtoken(req);
    const bookings = await Book.find({ user: userData.id }).populate('place');
    res.json(bookings);
}




const postbudgetplanner = async (req, res) => {
    const { destination, days, accommodation } = req.body;
  
    const promptText = `Estimate a travel budget for a trip to ${destination} for ${days} days. 
    The accommodation type is ${accommodation} class. 
    Break down costs into flight, accommodation, food, and activities. 
    Return result in JSON with currency.`;
  
    try {
      const apiRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer api-key`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "Travel Planner",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-4-maverick:free",
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: promptText,
                },
              ],
            },
          ],
        }),
      });
  
      const raw = await apiRes.text(); // force raw text to debug
      console.log("🔁 Raw OpenRouter Response:", raw);
  
      if (!apiRes.ok) {
        throw new Error(`OpenRouter API failed with status ${apiRes.status}`);
      }
  
      const data = JSON.parse(raw);
      const content = data.choices?.[0]?.message?.content;
  
      if (!content) {
        throw new Error("No message content from OpenRouter response");
      }
  
      const jsonMatch = content.match(/{[\s\S]*}/);
      if (!jsonMatch) {
        throw new Error("JSON block not found in OpenRouter response");
      }
  
      const budgetJson = JSON.parse(jsonMatch[0]);
      res.status(200).json(budgetJson);
  
    } catch (err) {
      console.error("🔥 BudgetPlanner Error:", err.message);
      res.status(500).json({ error: "Failed to generate budget. " + err.message });
    }
  };
  

module.exports = { gettest, postregister, postlogin, getprofile, postlogout, postlinkphotos, postuploads, postlinkplaces, getplaceslist, getplacebyid, putplacebyid,gethomepageplaces, postbookings, getbookings,postbudgetplanner };
