import bcrypt from "bcrypt"
import UsersReg from "../models/users.js";

// Get All users
export const getUsers = async (req, res) => {
    try {
        const users = await UsersReg.find().exec()
        res.status(200).json(users)
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: 'Users not found'
        })
    }
}

// Get user by ID
export const getUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await UsersReg.findById(id)
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: 'User not found'
        })
    }
}

// Find and delete user by ID
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        await UsersReg.findByIdAndRemove({_id:id})
        res.status(200).json(`User with id ${id} has been deleted`)
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: `User with this ${id} id not found`
        })
    }
}

// Find and update user by ID
export const updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body

        const salt = await bcrypt.genSalt(10)
        const pass_hash = await bcrypt.hash(body.password, salt)
        await UsersReg.findByIdAndUpdate({ _id: id }, { "fullname": body.fullname, "email": body.email, "passwordHash": pass_hash, "isAdmin": body.isAdmin })
        res.status(200).json(`User with id ${id} has been updated`)
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: `User ${id} was not updated`
        })
    }
}