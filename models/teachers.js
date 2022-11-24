import mongoose from "mongoose";

const Schema = mongoose.Schema;

const teachersSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    teacherImgUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    info: [{
        rating: { type: Number, default: 0 },
        coursesQty: { type: Number, default: 0 },
        studentsQty: { type: Number, default: 0 }
    }],
    socials: [{
        facebook: String,
        behance: String,
        twitter: String,
        linkedin: String,
    }],
}, { timestamps: true });

export default mongoose.model('Teachers', teachersSchema);