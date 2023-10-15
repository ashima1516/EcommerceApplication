const user=require('../models/UserModal');
const asyncHandler=require('express-async-handler');
const {generatetoken}=require('../config/jwttoken');



//create a user...................................//////
const createuser=asyncHandler(async(req,res)=>{
const email=req.body.email;

const findUser=await user.findOne({email});
if(!findUser){
  
    const newuser=await user.create(req.body);
    res.json({ success:true,newuser});
}
else{

    res.json({msg:'user already exists',success:false});
}
});


//login a user...........................////
const loginUser=asyncHandler(async(req,res)=>{

    const {email,password}=req.body;
    const findUser=await user.findOne({email:email});
    if(findUser&&await findUser.ispasswordMatched(password)){
     
        res.json({
            
            name:findUser?.name,
            email:findUser?.email,
            password:findUser?.password,
            mobile:findUser?.mobile,
            token: generatetoken(findUser?._id),
            success:true,
            userid:findUser?._id,

        });
    
    }

        else{
   
            res.json({msg:'invalid creds',success:false});
        }
    
})
module.exports={createuser, loginUser};