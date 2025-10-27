import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    totalPrice:{
        type:Number,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    products:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        }
    ]
})

export default mongoose.model("Cart",cartSchema);