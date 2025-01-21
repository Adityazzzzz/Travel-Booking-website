const express = require('express')
const router= express.Router()
const { gettest,postregister,postlogin }= require('../controllers/user')


router.get('/test',gettest)
router.post('/register',postregister)
router.post('/login',postlogin)


module.exports=router;