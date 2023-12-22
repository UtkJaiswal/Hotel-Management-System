"use client"

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function RoomsPage() {

    const router = useRouter()

    // const [data, setData] = useState("nothing")

    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    const logout = async () => {
        try {
            await axios.get("/api/users/logout")
            toast.success("Logout successful")
            router.push("/login")
            
        } catch (error:any) {
            console.log("Error",error.message)
            toast.error(error.message)
            
        }

    }

    // const getUserDetails = async () => {
    //     const res = await axios.get("/api/users/userData")
    //     console.log(res.data)
    //     setData(res.data.data._id)
    // }

    const fetchRooms = async () => {
        try {
          setLoading(true);
          const response = await axios.post('/api/rooms', {
            check_in_date: checkInDate,
            check_out_date: checkOutDate,
          });
    
          setRooms(response.data.data);
          setLoading(false);
        } catch (error) {
          toast.error('Error fetching rooms');
          console.error('Error fetching rooms:', error);
          setLoading(false);
        }
      };

      const handleApply = () => {
        fetchRooms();
      };

      const handleCheckInDateChange = (date:any) => {
        setCheckInDate(date);
      };
    
      const handleCheckOutDateChange = (date:any) => {
        setCheckOutDate(date);
      };

      const handleBooking = async (roomId:any) => {

        // router.push("/rooms/"+roomId)

        try {
          const response = await axios.post('/api/createBooking', {
            check_in_date: checkInDate,
            check_out_date: checkOutDate,
            room_id:roomId
          });
          
          
        } catch (error:any) {

          toast.error('Error fetching rooms');
          console.error('Error fetching rooms:', error);
          
        }

      }

      return (
        <div className="flex flex-col items-center">
          <button onClick={logout}>Logout</button>
          <div className="flex items-center justify-center my-4">
            <div className="mx-2">
              <DatePicker selected={checkInDate} onChange={handleCheckInDateChange} placeholderText="Check-in Date" text-black/>
            </div>
            <div className="mx-2">
              <DatePicker selected={checkOutDate} onChange={handleCheckOutDateChange} placeholderText="Check-out Date" text-black/>
            </div>
            <button onClick={handleApply} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Apply
            </button>
          </div>
          <div className="flex flex-wrap justify-center">
            {loading ? (
              <p>Loading rooms...</p>
            ) : (
                rooms.map((room:any) => (
                    <div key={room._id} className="max-w-xs mx-2 my-4 bg-white rounded-lg shadow-md overflow-hidden">
                      <img className="w-full h-40 object-cover object-center" src={room.img_url} alt={`Room ${room.room_number}`} />
                      <div className="p-4">
                        <h2 className="text-gray-800 font-bold text-xl">Room {room.room_number}</h2>
                        <p className="text-gray-600 mt-2">Rs.{room.price}</p>
                        <p className="text-gray-600 mt-2">{room.room_type} Type</p>

                        <button 
                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick = { ()=>handleBooking(room._id) }>
                            Confirm Booking
                        </button>

                     
                      </div>
                    </div>
                  ))
            )}
          </div>
        </div>
      );
}