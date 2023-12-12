"use client"
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignupPage() {

    const router = useRouter()

    const [buttonDisabled, setButtonDisabled] = React.useState(false)

    const [loading, setLoading] = React.useState(false)

    const [user,setUser] = React.useState({
        name:"",
        email:"",
        phone:"",
        password: ""
    })

    const onSignUp = async () => {

        try {

            setLoading(true)

            const response = await axios.post("/api/users/signup",user)

            console.log("Signup success",response.data)

            router.push("/login")
            
        } catch (error:any) {
            console.log("Sign Up Failed",error.message)
            toast.error(error.message)
            
        } finally {
            setLoading(false)
        }

    }

    useEffect (()=>{
        if(user.email.length > 0 && user.password.length>0 && user.name.length>0 && user.phone.length==10){
            setButtonDisabled(false)
        }

        else{
            setButtonDisabled(true)
        }

    },[user])
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{ loading?"Processing":"SignUp"}</h1>
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
                {buttonDisabled?"No Sign Up":"Sign Up"}
            </button>

            <Link href="/login">Visit Login Page</Link>
        </div>
    )
}