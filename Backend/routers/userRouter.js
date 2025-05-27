
import {Router} from 'express'
import { signUp,login } from '../controllers/userController.js'



const userRouter=Router()

userRouter.post('/signUp',signUp)
userRouter.post('/login',login)


export default userRouter