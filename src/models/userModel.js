import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"]
    },

    email:{
        type: String,
        required: [true, "Please provide an email"],
        unique: true
    },

    phone:{
        type: String,
        required: [true, "Please provide an phone"],
        // unique: true
    },

    password:{
        type: String,
        required: [true, "Please provide a password"],
    },

    isVerified:{
        type: Boolean,
        default: false,
    },

    isAdmin: {
        type: Boolean,
        default:false
    },

    verifyToken:String,

    verifyTokenExpiry: Date,

})

const User = mongoose.models.users || mongoose.model("users",userSchema)

export default User