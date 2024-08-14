const mongoose = require("mongoose");

const simpleSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    }
} , {timestamps:true})
const Simple = mongoose.model("Simples" , simpleSchema);
module.exports = Simple;