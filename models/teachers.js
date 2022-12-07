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
        type: Object,
    },
    description: {
        type: String,
        required: true,
    },
    socials: [String]
}, { timestamps: true });

export default mongoose.model('Teachers', teachersSchema);