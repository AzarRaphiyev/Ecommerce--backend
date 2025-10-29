import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
    },
   count:{
    type:Number,
    required:true,
    min:[1,'Product count cannot be less than 1']
   }
    
},{timestamps:true})

export default mongoose.model('CartItem',cartItemSchema)