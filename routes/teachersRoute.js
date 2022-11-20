import express from "express";
const router = express.Router()
import {getTeacher, getTeachers, createTeacher, deleteTeacher, updateTeacher} from '../controllers/teachersController.js'

router.get('/', getTeacher)

router.get('/:id', getTeachers)

router.post('/', createTeacher)

router.delete('/:id', deleteTeacher)

router.patch('/:id', updateTeacher)

export default router