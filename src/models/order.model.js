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
  totalPrice:{
    type: Number,
    required: true,
  },
//   orderItems:[{

//   }],
  user:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  }
})   

export default order=mongoose.model("Order", orderSchema);