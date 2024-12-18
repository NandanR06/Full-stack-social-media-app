import mongoose from "mongoose";

const structure = new mongoose.Schema({
    userName: {
        type: String,
        min: 6,
        max: 20,
        require: true,
        unique: true
    },
    email: {
        type: String,
        max: 50,
        require: true,
        unique: true,

    },
    password: {
        type: String,
        require: true,
        min: 6,
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    desc:{
        type:String,
    },
    city:{
        type:String,
        max:50
    },
    from:{
        type:String,
        max:50
    },
    relationship:{
        type:Number,
        enum:[1,2,3]
    }
},
    { timestamps: true }
)

const user = mongoose.model("user_data", structure);

export default user;
