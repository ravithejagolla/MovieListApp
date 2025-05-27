import env from 'dotenv'
env.config()
import express from 'express'
import { connect } from 'mongoose'
import movieRouter from './routers/movieRouter.js'
import userRouter from './routers/userRouter.js'
import cors from 'cors'




const app=express()
app.use(cors())
app.use(express.json())

app.use('/movie',movieRouter)
app.use('/user',userRouter)


const PORT=process.env.PORT
const Mongo_Url=process.env.MONGO_URL

app.listen(PORT,async()=>{
    try{
        await connect(Mongo_Url)
        console.log("Mongodb Connected Successfully")
        console.log(`Server Running on ${PORT}`)
    }catch(e){
        console.log(e)
        process.exit(1)
    }
})