const  jwt = require("jsonwebtoken");
require("dotenv").config();
// const User = require("../models/User")
//auth

exports.auth = async(req,res,next)=>{
    try{
        //extract token

        
        let token = req.cookies.token || req.body.token || "";

        // Check if the "Authorization" header is present
        if (req.headers.authorization) {
            token = req.headers.authorization.replace("Bearer ", "");
        }
        if(!token){
            return res.status(401).json({
                success:false,
                message:"token not found"
            })
        }
        //verify token
        try{
            const decode = jwt.verify(token,process.env.JWT_SECRET);
            // console.log(decode);
            req.user = decode;


        }catch(error){
            return res.status(401).json({
                success:false,
                message:"token is invalid"
            })
        }
        next();
    }catch(error){
        res.status(401).json({
            success:false,
            error:error.message,
            message:"Something went wrong while validating jwt"
        });

    }
}
exports.isUser = async(req,res,next)=>{
    try{
        if(req.user.accountType !== "User"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for students only"
            })
        }
        next();

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified",
        })
    }
}


//isManager
exports.isManager = async(req,res,next)=>{
    try{
        if(req.user.accountType !== "Manager"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Manager only"
            })
        }
        next();

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified",
        })
    }
}


//isAdmin

exports.isAdmin = async(req,res,next)=>{
    try{
        if(req.user.accountType !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Admin only"
            })
        }
        next();

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified",
        })
    }
}