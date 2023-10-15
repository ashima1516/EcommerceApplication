const express=require('express');
const dbConnect=require("./config/db");
const app=express();
const dotenv=require("dotenv").config();
var cors=require('cors');
app.use(cors());
const PORT=process.env.PORT||4000;
const authRouter=require('./routes/authRoutes');
dbConnect();
app.listen(PORT,()=>{
    console.log(`server is running at PORT ${PORT}`);
});

app.use(express.json());
app.use('/api/users',authRouter);