import mongoose from "mongoose";

const Schema = mongoose.Schema;

const teachersSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    position: {
        type:String,
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
    info: {
        type: [{
            rating: String,
            coursesQty: Number,
            studentsQty: Number
        }],
        required: true,
    },
    socials:{
        type: [{
            facebook : String,
            behance : String,
            twitter : String,
            linkedin : String
        }],
        required : true
    },
}, { timestamps: true });

export default mongoose.model('Teachers', teachersSchema);