import mongoose from "mongoose"
import dotenv from "dotenv"
import express from "express"
import UserRoute from "./src/routes/auth.route.js"
import ProductRoute from "./src/routes/product.route.js"

dotenv.config()
const app =express()
app.use(express.json())
app.get("/",(req,res)=>{
res.send("asdasdsada")
})

app.use('/api/auth',UserRoute)
app.use('/api/products',ProductRoute)

app.listen(process.env.PORT,()=>{
    
    mongoose.connect(process.env.MONGO_URL)
    console.log("DB CONNETED");
    console.log(`Server running PORT:${process.env.PORT}`);
        
    
    
})