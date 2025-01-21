const express = require('express')
const router= express.Router()
const { gettest,postregister,postlogin, getprofile }= require('../controllers/user')


router.get('/test',gettest)
router.get('/profile',getprofile)

router.post('/register',postregister)
router.post('/login',postlogin)


module.exports=router;