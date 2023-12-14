import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({

    check_in_date: {
        type: Date,
        required: [true, "Please provide checkin date"]
    },

    check_out_date: {
        type: Date,
        required: [true, "Please provide a check out date"]
    },
    
    room_number: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: [true, "Please provide a room"]
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Please provide a user"]
    },

    total_cost: {
        type: Number,
    }
    

    

})

const Booking = mongoose.models.bookings || mongoose.model("bookings",bookingSchema)

export default Booking