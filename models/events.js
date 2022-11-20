import mongoose from "mongoose";

const Schema = mongoose.Schema;

const eventSchema = new Schema({
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
    whatWeWillTalk: {
        type: [{
            talkTitle: String,
            talkDescription: String
        }],
        required: true,
    },
    time: {
        type: [{
            day: String,
            time: {
                from: String,
                to: String
            }
        }],
        required: true
    }
}, { timestamps: true });

export default mongoose.model('Event', eventSchema);