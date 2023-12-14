import {connect} from "@/dbConfig/dbConfig"
import Booking from "@/models/bookingModel"
import Room from "@/models/roomModel";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server"


connect();

export async function GET(request:NextRequest) {
    try {
        
        const bookings:any = await Booking.find({})

        let finalData:any = [];

        for (const booking of bookings) {
        const user = await User.findById(booking.user);

        const room = await Room.findById(booking.room_number)

        const data = {
            booking: booking.toObject(),
            user: user ? user.toObject() : null,
            room: room ? room.toObject() : null
        };

        finalData.push(data); 
        }


        

        return NextResponse.json({
            message:"Booking details fetched successfully",
            data: finalData
        })

    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:400})        
    }
}