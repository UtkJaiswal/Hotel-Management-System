import {connect} from "@/dbConfig/dbConfig"
import Room from "@/models/roomModel"
import Booking from "@/models/bookingModel"
import { NextRequest, NextResponse } from "next/server"


connect()

export async function POST(request: NextRequest) {
    try {
        const { check_in_date, check_out_date } = await request.json()

        const availableRooms = await Room.find({
            _id: {
              
              $nin: await Booking.find({
                $or: [
                  {
                    check_in_date: { $lt: check_out_date },
                    check_out_date: { $gt: check_in_date },
                  },
                  {
                    check_in_date: { $gte: check_in_date, $lte: check_out_date },
                  },
                ],
              }).distinct("room_number"),
            },
            isAvailable: true, 
          });
      
          return NextResponse.json({
            message:"Available rooms fetched successfully",
            data:availableRooms
          });
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:400})
        
    }
}