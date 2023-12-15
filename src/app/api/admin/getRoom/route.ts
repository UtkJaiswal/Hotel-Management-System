import {connect} from "@/dbConfig/dbConfig"
import Room from "@/models/roomModel"
import { NextRequest, NextResponse } from "next/server"

connect();

export async function POST(request:NextRequest) {
    try {
        const {room_id} = await request.json()
        const room = await Room.findOne({_id:room_id})
        

        return NextResponse.json({
            message:"Room details fetched successfully",
            data:room
        })
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:400})
    }
}