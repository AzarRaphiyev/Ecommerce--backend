import express from "express"
import {loginUser} from "../controllers/user.controller.js"

const UserRoute=express.Router()

UserRoute.post('/login',loginUser)

export default UserRoute

