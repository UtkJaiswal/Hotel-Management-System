import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({

    room_number: {
        type: String,
        required: [true, "Please provide a room number"]
    },

    room_type: {
        type: String,
        required: [true, "Please provide a room type"]
    },
    
    price: {
        type: Number,
        required: [true, "Please provide a price"]
    },

    isAvailable:{
        type: Boolean,
        default: false,
    },

    img_url: {
        type: String,
        required: [true, "Please provide an image url"],
    },
    

    

})

const Room = mongoose.models.rooms || mongoose.model("rooms",roomSchema)

export default Room