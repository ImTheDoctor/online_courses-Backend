import express from "express";

import { getUsers, getUser, deleteUser, updateUser } from '../controllers/userInfoController.js'

const router = express.Router()

router.get('/', getUsers)

router.get('/:id', getUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router