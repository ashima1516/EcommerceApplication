const mongoose=require('mongoose');

const dbConnect=async()=>{
    try{
    const connection=await mongoose.connect(process.env.MONGODB_URL);
    console.log('conection established successful');
    }catch(error){
        console.log('database connection error occured');
    }
}
module.exports=dbConnect; 