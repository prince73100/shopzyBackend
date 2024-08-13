import mongoose from 'mongoose';

const productschema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    new_price:{
        type:Number,
        required:true
    },
    old_price:{
        type:Number,
        required:true
    },
    avilable:{
        type:Boolean,
        default:true
    }
},{timestamps:true})


export const Product = mongoose.model("Product",productschema)