import mongoose from "mongoose";

const postStructure = new mongoose.Schema({

    userID: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        max: 500,
    },
    img: {
        type: String,
    },
    likes: {
        type: Array,
        default:[]
    }
}, { timestamps: true }
)

const user = mongoose.model("postdata", postStructure);

export default user;
