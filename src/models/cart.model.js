import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },
    cartProducts:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"cartItem"
        }
    ],
    currency:{
        type:String,
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    },

},{timestamps:true})

export default mongoose.model("Cart",cartSchema);