const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true, 
        maxlength: 32,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        require: true,
        maxlength:10
    },
    password: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("User", userSchema)