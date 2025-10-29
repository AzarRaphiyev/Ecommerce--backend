import mongoose from "mongoose"

const productSchema= mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        minlenght:[3,"Title must be at least 3 characters"]
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    category:{
        type : mongoose.Schema.ObjectId,
        ref:"Category",
        required:true
    },
    price:{
        type:Number,
        required:true,
        trim:true,
        min:[0,"Price must be a positive number"]
    },
    currency:{
        type:String,
        default:"₼",
        enum:["$","€","£","₼","₽","￥"]
    },
    stock:{
        type:Number,
        default:0,
        min:[0,"Stock must be a positive number"]
    },
    images:{
        type:[String],
        default:[]
    },
    rating:{
        type:Number,
        default:0
    },
    storeId:{
        type: mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true})

productSchema.index({title:"text"},{description:"text"})

export default mongoose.model("Product",productSchema)

