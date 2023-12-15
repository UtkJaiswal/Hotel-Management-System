"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

export default function Rooms() {

    const router = useRouter()

    const [rooms, setRooms] = useState([])

    useEffect(()=>{
        const fetchRooms = async () => {
            try {
                const response = await axios.get(`${[process.env.HOST]}/api/admin/bookingDetails`)

                setRooms(response.data.data)
                console.log(response.data.data)
                
            } catch (error:any) {
                console.error("Error fetching data:", error);
                
            }
        }

        fetchRooms();

    },[])

    const editRoom = async (room_id:any) => {
        try {

            router.push("/admin/rooms/"+room_id)
            
            
        } catch (error:any) {

            toast.error('Error fetching rooms');
            console.error('Error fetching rooms:', error);
            
        }

    }

    return (
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center my-4">
            
            
            
          </div>
          <div className="flex flex-wrap justify-center">
            {
                rooms.map((room:any) => (
                    <div key={room._id} className="max-w-xs mx-2 my-4 bg-white rounded-lg shadow-md overflow-hidden">
                      <img className="w-full h-40 object-cover object-center" src={room.img_url} alt={`Room ${room.room_number}`} />
                      <div className="p-4">
                        <h2 className="text-gray-800 font-bold text-xl">Room {room.room_number}</h2>
                        <p className="text-gray-600 mt-2">Rs.{room.price}</p>

                        <button 
                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick = { ()=>editRoom(room._id) }>
                            Edit Room Details
                        </button>
                        

                     
                      </div>
                    </div>
                  ))
            }
          </div>
        </div>
    )


}