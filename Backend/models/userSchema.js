

import {Schema,model} from 'mongoose'


const userSchema=new Schema({
    username:String,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const User=model("user",userSchema)

export default User