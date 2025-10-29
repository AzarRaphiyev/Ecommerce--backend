import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    address: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
    required: true,
  },
  orderedProducts:{
    type:mongoose.Schema.ObjectId,
    ref:"cart",
    required:true
  },
  paymentId:{
    type:String,
    required:true
  },
},{timestamps:true})   

export default order=mongoose.model("Order", orderSchema);