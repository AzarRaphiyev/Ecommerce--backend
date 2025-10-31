import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin", "store"],
      default: "user",
    },
    orders: {
      type: [mongoose.Schema.ObjectId],
      ref: "Order",
    },

    isStore: {
      type: Boolean,
      default: false,
    },
    storeName: {
      type: String,
      default: null,
    },
    voen: {
      type: String,
      default: null,
    },
    storeDescription: {
      type: String,
      default: null,
    },
    rating: {
      type: Number,
      default: 0,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    favoriteProducts: {
      type: [mongoose.Schema.ObjectId],
      ref: "Product",
      default: [],
    },
    refreshToken: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);



userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("User", userSchema);







