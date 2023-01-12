const express=require("express");
const {connection}=require("./configs/db.js")
const {RegisterModel}=require("./Model/user.model")
const jwt= require("jsonwebtoken");
const app=express();
app.use(express.json())



app.post("/register",async(req,res)=>{
   const payload=req.body
   try{
    const user=new RegisterModel(payload)
    await user.save();
    res.send("Reg")
}catch(err){
    res.send(err)
    console.log(err);
   }
    
})

app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await RegisterModel.find({email,password})
        var token = jwt.sign({ course: 'backend' }, 'masai');
        if(user.length>0){
            res.send({msg:"sucess",token:token})
        }else{
            res.send({msg:"Wrong",token:""})
        } 
    }catch(err){
        res.send(err);
        console.log(err);
    }
})




app.listen(4500,async()=>{
    try{
        console.log("Wait is connected");
        await connection
        console.log("Database is connected");

    }catch(err){
        console.log(`Err:${err}`);
    }
    console.log(`Server is running on port 4500`);
})