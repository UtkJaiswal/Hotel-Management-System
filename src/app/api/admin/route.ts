import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

connect()

export async function POST(request:NextRequest) {
    try {
        const { email, password } = await request.json()

        const user = await User.findOne({email})


        if(!user) {
            return NextResponse.json({error:"Admin user does not exist"},{status:400})
        }

        const validPassword = await bcryptjs.compare(password, user.password)

        if(!validPassword){
            return NextResponse.json({error:"Invalid password"},{status:400})

        }

        if(!user.isAdmin){
            return NextResponse.json({error:"Not an admin user"},{status:400})
        }

        const tokenData = {
            id:user._id,
            name:user.name,
            email:user.email
        }

        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET!, {expiresIn:"1d"})

        const response = NextResponse.json({
            message:"Login Successful",
            success: true,

        })

        response.cookies.set("token",token,{httpOnly:true})

        return response



    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:400})
        
    }
}