import express from "express";
import multer from "multer";
const router = express.Router()

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'uploads');
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname)
    }
})

const uploads = multer({ storage })

router.post('/', uploads.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`
    })
})

export default router;