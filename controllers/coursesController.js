import Courses from "../models/courses.js";

// Get All courses
export const getCourses = async (req, res) => {
    try {
        const courses = await Courses.find().populate('teacherID').exec()
        res.status(200).json(courses)
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: 'Courses not found'
        })
    }
}

// Get course by ID
export const getCourse = async (req, res) => {
    try {
        const id = req.params.id
        const course = await Courses.findById(id).populate('teacherID').exec()
        res.status(200).json(course)
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: 'Course not found'
        })
    }
}

// Create Course
export const createCourse = async (req, res) => {

    try {
        const { title, price, description, tags, whatYouWillLearn, dates, teacherID } = req.body
        const newCourse = new Courses({
            title,
            price,
            description,
            tags,
            whatYouWillLearn,
            dates,
            teacherID
        })
        await newCourse.save()
        res.status(200).send(newCourse)
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: 'Course was not created'
        })
    }
}

//Find and delete course by ID
export const deleteCourse = async (req, res) => {
    try {
        const id = req.params.id
        await Courses.findByIdAndRemove({ _id: id })
        res.status(200).json(`Course with id ${id} has been deleted`)
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: `Course with this ${id} id not found`
        })
    }
}

// Find and update user by ID
export const updateCourse = async (req, res) => {
    try {
        const id = req.params.id
        const { title, price, description, tags, whatYouWillLearn, dates, teacherID } = req.body

        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            await Courses.findByIdAndUpdate({ _id: id }, {
                title,
                price,
                description,
                tags,
                whatYouWillLearn,
                dates,
                teacherID
            })
            res.status(200).json(`Course with id ${id} has been updated`)
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: `Course ${id} was not updated`
        })
    }
}