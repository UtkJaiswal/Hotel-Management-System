import {connect} from "@/dbConfig/dbConfig"
import Room from "@/models/roomModel"
import Booking from "@/models/bookingModel"
import { NextRequest, NextResponse } from "next/server"
import User from "@/models/userModel";
import { getDataFromToken } from "@/helpers/getDataFromToken";


connect();

export async function POST(request:NextRequest) {
    try {
        const {room_id,check_in_date,check_out_date } = await request.json()

        const room = await Room.findOne({_id:room_id})

        const price = room.price

        const checkInDate2:any = new Date(check_in_date);

        const checkOutDate2:any = new Date(check_out_date);

        
        const durationMs = checkOutDate2 - checkInDate2;

        
        const durationDays = durationMs / (1000 * 60 * 60 * 24);

        
        const total_cost = (durationDays+1) * price;

        const user = await getDataFromToken(request)

        const newBooking = new Booking({
            check_in_date:check_in_date,
            check_out_date:check_out_date,
            room_number:room_id,
            user:user,
            total_cost
        })

        const savedBooking = await newBooking.save();


        

        return NextResponse.json({
            message:"Room booked successfully",
            data:savedBooking
        })
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:400})
        
    }
}