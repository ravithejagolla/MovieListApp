
import { Router } from "express";
import { createmovie,getmoviebyid,updatemovie,deletemovie,getmovie } from "../controllers/movieController.js";


const movieRouter=Router()

movieRouter.post('/create-movie',createmovie)
movieRouter.get('/',getmovie)
movieRouter.get('/get-movie/:id',getmoviebyid)
movieRouter.put('/update-movie/:id',updatemovie)
movieRouter.delete('/delete-movie/:id',deletemovie)



export default movieRouter