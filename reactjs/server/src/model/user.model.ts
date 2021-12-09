import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String, 
        required: true, 
        unique : true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    password: {type: String, required: true }
});


export const Signup = mongoose.model('signup', UserSchema)