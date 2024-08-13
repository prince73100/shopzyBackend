import { Router } from "express";
import { handlelogedIn, signUpUser } from "../controller/user.controller.js";
const router = Router()

router.route('/signupuser').post(signUpUser)
router.route('/login').post(handlelogedIn)

export default router