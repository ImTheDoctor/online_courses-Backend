import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

import { validationResult } from "express-validator";
import { registerValidator } from '../helpers/authValidations.js'
import authToken from "../middlewares/authToken.js"
import generateAccessToken from "../helpers/generateAccessToken.js";
import UsersReg from "../models/users.js";



// import { getUsers, getUser, createUser, deleteUser, updateUser } from '../controllers/userInfoController.js'

const router = express.Router()




router.post('/login', async (req, res) => {
    try {
        const user = await UsersReg.findOne({email: req.body.email});
        if(!user){
            return res.status(404).json({
                message: 'User is not found',
            });
        }
        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);
        if(!isValidPass) {
            return res.status(400).json({
                message: 'Wrong login or password'
            })
        }
        const token = generateAccessToken(user._id)
        const { passwordHash, ...userData } = user._doc
        res.json({
            ...userData,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to login"
        })
    }
})

router.post('/register', registerValidator, async (req, res) => {
    try {
        const err = validationResult(req);
        if (!err.isEmpty()) {
            return res.status(400).json(err.array())
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10)
        const pass_hash = await bcrypt.hash(password, salt)

        const document = new UsersReg({
            email: req.body.email,
            fullname: req.body.fullname,
            passwordHash: pass_hash
        })

        const user = await document.save();

        const token = generateAccessToken(user._id)

        const { passwordHash, ...userData } = user._doc
        res.json({
            ...userData,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to register"
        })
    }
})


export default router