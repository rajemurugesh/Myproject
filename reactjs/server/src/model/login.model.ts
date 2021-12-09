import mongoose from 'mongoose';


const LoginSchema = new mongoose.Schema({
    
    emailId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export const User = mongoose.model('user', LoginSchema );