const mongoose = require('mongoose');
const bcrypt=require('bcrypt')
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
   
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{      
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    cart:{
        type: Array,
        default:[],
    },
    userType:{
        type:String,

    }
},
{
    timestamps:true,
}
)
userSchema.pre('save',async function(){
  const salt = await bcrypt.genSaltSync(10); 
    this.password= await bcrypt.hash(this.password,salt) ;
});
userSchema.methods.ispasswordMatched=async function(enteredpassword){
    return await bcrypt.compare(enteredpassword,this.password);
}
module.exports=mongoose.model('Customer',userSchema);