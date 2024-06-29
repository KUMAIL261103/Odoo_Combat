const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    
    token:{
        type:String,
    },
    
},{timestamps: true,}
);
module.exports = mongoose.model("User",UserSchema);