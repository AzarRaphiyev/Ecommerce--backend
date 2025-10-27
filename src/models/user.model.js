import mongoose from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    phone:{
        type: String,
        required: true,
    },
    role:{
        type:String,
        enum:['user','admin','seller'],
        default:'user'
    },
    orders:[{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'Order'
    }],
    isStore:{
        type:Boolean,
        default:false
    },
    storeName:{
        type:String,
    },
    voen:{
        type:String,
        
    },
    storeDescription:{
        type:String,
        
    },
    rating:{
        type:Number,
        default:0
    },
    verified:{
        type:Boolean,
        default:false
    },
    refreshToken:{
        type:String,
        default:null
    },

     
})

export default mongoose.model('User',userSchema)

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.matchPassword = function (enteredPassword) {
	return bcrypt.compare(enteredPassword, this.password)
}