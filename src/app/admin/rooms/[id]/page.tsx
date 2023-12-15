"use client"

// import { useState } from "react"

// export default function EditRoom({params}: any) {
    
//     const [first, setfirst] = useState(second)

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen py-2">
//             <h1>Profile</h1>

//             <hr />

//             <p className="text-4xl">Profile page 

//                 <span className=" p-2 ml-2 rounded bg-orange-500 text-black">{params.id}</span>

//             </p>

//         </div>
//     )
// }

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UpdateRoom({params}:any) {

    const [roomDetails, setRoomDetails] = useState({
    _id:'',
    room_number: '',
    room_type: '',
    price: '',
    isAvailable: false,
    img_url: '',
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setRoomDetails({ ...roomDetails, [name]: value });
      };


    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
          await axios.put('http://localhost:3000/api/admin/updateRoom', roomDetails);
        } catch (error) {
          console.error('Error updating room:', error);
        }
      };

      useEffect(() => {

        const fetchRoomDetails = async () => {
          try {
            const response = await axios.post(`http://localhost:3000/api/admin/getRoom`,{room_id:params.id});
            setRoomDetails(response.data.data);
            console.log("G",roomDetails)

          } catch (error) {
            console.error('Error fetching room details:', error);
          }
        };
        fetchRoomDetails();
      },[]); 



    return (
        <div>
          <h1>Update Room</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Room Number:
              <input type="text" name="room_number" value={roomDetails.room_number} onChange={handleChange} />
            </label>
            <label>
              Room Type:
              <input type="text" name="room_type" value={roomDetails.room_type} onChange={handleChange} />
            </label>
            <label>
              Price:
              <input type="number" name="price" value={roomDetails.price} onChange={handleChange} />
            </label>
            {/* Add input fields for other room details */}
            <button type="submit">Update Room</button>
          </form>
        </div>
      );

}