import { connect } from "@/dbConfig/dbConfig";
import Room from "@/models/roomModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const { room_number, room_type, price, isAvailable, img_url } = await request.json();

    
    const newRoom = new Room({
      room_number,
      room_type,
      price,
      isAvailable,
      img_url,
    });

    
    const savedRoom = await newRoom.save();

    return NextResponse.json({
      message: "Room created successfully",
      data: savedRoom,
    });
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
