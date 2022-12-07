import express from "express";
const router = express.Router()
import { getTeacher, getTeachers, createTeacher, deleteTeacher, updateTeacher } from '../controllers/teachersController.js'
import multer from "multer";
import checkAuth from "../middlewares/checkAuth.js";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const uploads = multer({ storage: storage })

router.get('/', getTeachers)

router.get('/:id', getTeacher)

router.post('/', checkAuth, uploads.single('teacherImgUrl'), createTeacher)

router.delete('/:id', checkAuth, deleteTeacher)

router.patch('/:id', checkAuth, uploads.single('teacherImgUrl'), updateTeacher)

export default router