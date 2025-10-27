import mongoose from "mongoose";

const favSchema=new mongoose.Schema({
    products:[{
         type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    }],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    count:{
        type:Number,
        default:0
    }
})