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
    tags: {
        type: Array,
        default: []
    },
    whatYouWillLearn: {
        type: Array,
        default: []
    },
    dates: [{
        from: String,
        to: String,
    }],
    teacherID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teachers',
        required: true,
    }
}, { timestamps: true });

export default mongoose.model('Courses', coursesSchema);