const mongoose=require("mongoose");
const connection=mongoose.connect("mongodb+srv://moazzem:moa1234@cluster0.ispgnnr.mongodb.net/Register?retryWrites=true&w=majority");

module.exports={
    connection
}