import express from "express"
import {login, register} from "../controllers/auth.controller.js"
import { protect } from "../middleware/auth.middleware.js"

const router=express.Router()

router.post('/login',login)
router.post('/register',register)
// router.post('/logout',logout)
// router.post('/refresh',refreshToken)
router.post('/me',protect,(req,res)=>{res.json(req.user)})

export default router

