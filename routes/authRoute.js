import express from "express";
import { loginValidator, registerValidator } from '../helpers/authValidations.js'
import { loginController, registerController } from "../controllers/authController.js"

const router = express.Router()
router.post('/login', loginValidator, loginController)
router.post('/register', registerValidator, registerController)
export default router