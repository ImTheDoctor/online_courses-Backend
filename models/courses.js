import mongoose from "mongoose";

const Schema = mongoose.Schema;

const coursesSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    whatYouWillLearn: {
        type: String,
        required: true,
    },
    dates:{
        type: [{
            from : String,
            to : String
        }],
        required : true
    },
    teacherID:{
        type: String,
        required: true,
    }
}, { timestamps: true });

export default mongoose.model('Courses', coursesSchema);