const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    name: String,
    phone: Number,

})

mongoose.model('User',userSchema)