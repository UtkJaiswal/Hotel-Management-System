"use client"

import axios from "axios"
import { useEffect, useState } from "react"

export default function Bookings() {

    const [bookings, setBookings] = useState([])
    const [revenue, setRevenue] = useState(0)

    useEffect(() => {
        const fetchBooking = async () => {
            try {
                const response = await axios.get(`${process.env.DOMAIN}/api/admin/bookingDetails`);
                setBookings(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchBooking();
    }, []);

    useEffect(() => {
        // console.log("Fjf",bookings);
        const totalRevenue = bookings.reduce((total, booking:any) => {
            return total + (booking?.booking?.total_cost || 0);
        }, 0);
        
        setRevenue(totalRevenue);
    }, [bookings]);

    return (
        
        <div>
            <h1>Booking Details</h1>
            <h4>Total revenue is Rs. {revenue}</h4>
            <table>
                <thead>
                    <tr>
                        <th>Booking ID</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>User Phone</th>
                        <th>Room Number</th>
                        <th>Room Type</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>Total Cost</th>
                        {/* Add other headers for booking details */}
                    </tr>
                </thead>
                <tbody>
                    
                    {bookings.map((item:any, index) => (
                        <tr key={index}>
                            <td>{item.booking._id}</td>
                            <td>{item.user ? item.user.name : 'N/A'}</td>
                            <td>{item.user ? item.user.email : 'N/A'}</td>
                            <td>{item.user ? item.user.phone : 'N/A'}</td>
                            <td>{item.room ? item.room.room_number : 'N/A'}</td>
                            <td>{item.room ? item.room.room_type : 'N/A'}</td>
                            <td>{item.booking ? item.booking.check_in_date : 'N/A'}</td>
                            <td>{item.booking ? item.booking.check_out_date : 'N/A'}</td>
                            <td>Rs.{item.booking ? item.booking.total_cost : 'N/A'}</td>
                            {/* Render other booking details */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}