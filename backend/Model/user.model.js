
const mongoose=require("mongoose");

const regiserSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
},{
    versionKey:false
});

const RegisterModel=mongoose.model("user",regiserSchema);
module.exports={
    RegisterModel
}