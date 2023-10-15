const express=require('express');
const router=express.Router();
const{createuser, loginUser}=require('../controller/userCtrl');
router.post('/signup',createuser);
router.post('/login', loginUser);
module.exports=router;