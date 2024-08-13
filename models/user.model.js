import mongoose from 'mongoose';

const usrSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cartData: {
        type: Object
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true })


export const User = mongoose.model('User', usrSchema);