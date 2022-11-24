import express from "express";
import { getCourses, getCourse, createCourse, deleteCourse, updateCourse } from "../controllers/coursesController.js";
import checkAuth from "../middlewares/checkAuth.js";
const router = express.Router()

router.get('/', getCourses)

router.get('/:id', getCourse)

router.post('/', checkAuth, createCourse)

router.delete('/:id', checkAuth, deleteCourse)

router.patch('/:id', checkAuth, updateCourse)

export default router;