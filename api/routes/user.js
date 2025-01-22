const express = require('express')
const router= express.Router()
const { gettest,postregister,postlogin, getprofile, postlogout }= require('../controllers/user')


router.get('/test',gettest)
router.get('/profile',getprofile)

router.post('/register',postregister)
router.post('/login',postlogin)
router.post('/logout',postlogout)

module.exports=router;