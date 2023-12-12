"use client"
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
    const [user,setUser] = React.useState({
        name:"",
        email:"",
        phone:"",
        password: ""
    })

    const onSignUp = async () => {

    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Signup</h1>
            <hr />
            <label htmlFor="email">Email</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="email"
                type="email"
                value={user.email}
                onChange={(e)=> setUser({...user,email:e.target.value})}
                placeholder="email"
            />

            <label htmlFor="name">Name</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="name"
                type="text"
                value={user.name}
                onChange={(e)=> setUser({...user,name:e.target.value})}
                placeholder="name"
            />

            <label htmlFor="password">Password</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="password"
                type="password"
                value={user.password}
                onChange={(e)=> setUser({...user,password:e.target.value})}
                placeholder="password"
            />

            <label htmlFor="phone">Phone</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="phone"
                type="text"
                value={user.phone}
                onChange={(e)=> setUser({...user,phone:e.target.value})}
                placeholder="phone"
            />

            <button
             onClick={onSignUp}
             className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
                SignUp
            </button>

            <Link href="/login">Visit Login Page</Link>
        </div>
    )
}