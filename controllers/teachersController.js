import Teachers from "../models/teachers.js";

// Get All teachers
export const getTeachers = async (req, res) => {
    try {
        const teachers = await Teachers.find()
        res.status(200).json(teachers)
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: 'Teachers not found'
        })
    }
}

// Get teacher by ID
export const getTeacher = async (req, res) => {
    try {
        const id = req.params.id
        const teacher = await Teachers.findById(id)
        res.status(200).json(teacher)
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: 'Teacher not found'
        })
    }
}

// Create Teacher
export const createTeacher = async (req, res) => {
    try {
        const { fullname, position, teacherImgUrl, description, info, socials } = req.body
        const teacher = new Teachers({
            fullname,
            position,
            teacherImgUrl,
            description,
            info,
            socials
        })
        await teacher.save();
        res.status(200).send(teacher)
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: 'Teacher was not created'
        })
    }
}

//Find and delete teacher by ID
export const deleteTeacher = async (req, res) => {
    try {
        const id = req.params.id
        await Teachers.findByIdAndRemove({ _id: id })
        res.status(200).json(`Teacher with id ${id} has been deleted`)
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: `Teacher with this ${id} id not found`
        })
    }
}

// Find and update user by ID
export const updateTeacher = async (req, res) => {
    try {
        const id = req.params.id
        const { fullname, position, teacherImgUrl, description, info, socials } = req.body
        
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            await Teachers.findByIdAndUpdate({ _id: id }, {
                fullname,
                position,
                teacherImgUrl,
                description,
                info,
                socials
            })
            res.status(200).json(`Teacher with id ${id} has been updated`)
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: `Teacher ${id} was not updated`
        })
    }
}