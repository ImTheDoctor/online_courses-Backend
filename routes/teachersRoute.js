import express from "express";
const router = express.Router()
import { getTeacher, getTeachers, createTeacher, deleteTeacher, updateTeacher } from '../controllers/teachersController.js'
import checkAuth from "../middlewares/checkAuth.js";

router.get('/', getTeachers)

router.get('/:id', getTeacher)

router.post('/', checkAuth, createTeacher)

router.delete('/:id', checkAuth, deleteTeacher)

router.patch('/:id', checkAuth, updateTeacher)

export default router