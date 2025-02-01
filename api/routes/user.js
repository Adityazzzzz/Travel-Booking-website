const express = require('express')
const router= express.Router()
const { 
    gettest,
    postregister,
    postlogin, 
    getprofile, 
    postlogout, 
    postlinkphotos, 
    postuploads,
    postlinkplaces
} = require('../controllers/user')
const multer= require('multer')


const photosmiddleware= multer({dest:'controllers/uploads/'})


router.get('/test',gettest)
router.get('/profile',getprofile)

router.post('/register',postregister)
router.post('/login',postlogin)
router.post('/logout',postlogout)

router.post('/upload-by-link',postlinkphotos)
router.post('/uploads',photosmiddleware.array('photos',100),postuploads)
router.post('/places',postlinkplaces)

module.exports=router;