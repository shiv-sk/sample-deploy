const Simple = require("../model/simple.model");
exports.register = async (req,res)=>{
    try {
        const {username , email , password} = req.body
        if(!(username || email || password)){
            return res.status(400).json({
                status:"fail",
                message:"the fields are required"
            })
        }
        
        const existeduser = await Simple.findOne({email});
        if(existeduser){
            return res.status(400).json({
                status:"fail",
                message:"the user is already exists"
            })
        }
        const newUser = await Simple.create({
            username,
            password,
            email
        })

        if(!newUser){
            return res.status(500).json({
                status:"fail",
                message:"user is not created"
            })
        }
        console.log(newUser.username);
        return res.status(201).json({
            status:"success",
            message:"user is created successfully",
            user:newUser
        })
        
    } catch (error) {
        return res.status(400).json({
            status:"fail",
            message:error.message
        })
    }
}

exports.login = async (req,res)=>{
    try {
        const {email , password} = req.body;
        if(!(email || password)){
            return res.status(404).json({
                status:"fail",
                message:"please provide credentials"
            })
        }
        const existeduser = await Simple.findOne({email});
        if(!existeduser){
            return res.status(404).json({
                status:"fail",
                message:"user not found"
            })
        }
        console.log(existeduser.username);
        return res.status(200).json({
            status:"success",
            message:"login successfull",
            user:existeduser
        })
        
    } catch (error) {
        return res.status(400).json({
            status:"fail",
            message:error.message
        })
    }
    
}

//get all user
exports.getAlluser = async(req,res)=>{
    try {
        const Alluser = await Simple.find();
        if(Alluser.length === 0){
            return res.status(404).json({
                status:"fail",
                message:"user not found"
            })
        }
        return res.status(200).json({
            status:"success",
            message:"all users",
            data:{
                Alluser
            }
        })
    } catch (error) {
        return res.status(500).json({
            status:"fail",
            message:error.message
        })
    }
}