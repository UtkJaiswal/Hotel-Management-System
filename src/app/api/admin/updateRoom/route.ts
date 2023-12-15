import { connect } from "@/dbConfig/dbConfig";
import Room from "@/models/roomModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function PUT(request: NextRequest) {
  try {
    
    const { _id, room_number, room_type, price, isAvailable, img_url } = await request.json();

    const room = await Room.findById(_id);

    if (!room) {
      return NextResponse.json({ error: "Room not found" }, { status: 404 });
    }

    room.room_number = room_number || room.room_number;
    room.room_type = room_type || room.room_type;
    room.price = price || room.price;
    room.isAvailable = isAvailable ?? room.isAvailable;
    room.img_url = img_url || room.img_url;

    
    const updatedRoom = await room.save();

    return NextResponse.json({
      message: "Room updated successfully",
      data: updatedRoom,
    });
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
