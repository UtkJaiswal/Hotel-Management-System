import {connect} from "@/dbConfig/dbConfig"
import Room from "@/models/roomModel"
import Booking from "@/models/bookingModel"
import { NextRequest, NextResponse } from "next/server"


connect()

export async function GET(request:NextRequest) {
    try {
        const rooms = await Room.find({})

        return NextResponse.json({
            message:"Rooms fetched successfully",
            data: rooms
        })
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:400})
        
    }
}