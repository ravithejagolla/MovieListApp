import env from 'dotenv'
env.config()
import User from "../models/userSchema.js";
import argon2 from 'argon2'
import jwt from 'jsonwebtoken'


const Jwt_Password=process.env.Jwt_Password

export const signUp=async (req,res) => {

    const {username,email,password}=req.body
    try{
        
        let hashedpassword=await argon2.hash(password)
        let user=new User({
            username:username,
            email:email,
            password:hashedpassword
        })
        await user.save()
        res.status(201).json({
            messege:"User SignedUp Successfully",user
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            messege:"Internal Error"
        })
    }
}


export const login=async (req,res) => {
    const {username,email,password}=req.body
    try{
        let user=await User.findOne({email})
        let isVerified=argon2.verify(user.password,password)
        if(!isVerified){
            res.status(401).json({
                messege:"User Not Registered"
            })
            return
        }
        let token=jwt.sign({
            id:user._id,
            username:username
        },Jwt_Password,{
            expiresIn:'48h'
        })
        res.status(200).json({
            messege:"User Logged in Successfully",
            token
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            messege:"Internal Server Error"
        })
    }
    
}