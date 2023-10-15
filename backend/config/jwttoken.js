const jwt= require('jsonwebtoken');
const generatetoken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"2d"});
}
module.exports={generatetoken};