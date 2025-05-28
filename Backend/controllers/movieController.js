
import Movie from '../models/movieSchema.js'

export const createmovie=async (req,res) => {
        let {title,cast,director,releaseDate,rating}=req.body
    try{
         let newmovie=new Movie({
            title:title,
            cast:cast,
            director:director,
            releaseDate:releaseDate,
            rating:rating
         })
        await newmovie.save()
         res.status(201).json({
            messege:"Movie Created Successfully"
         })

    }catch(e){
        res.status(500).json({
            messege:"Internal server Error"
        })
    }
    
}

export const getmovie=async (req,res) => {
    try{
        let movies=await Movie.find()
        res.status(200).json({
            messege:"Movies are",
            movies
        })

    }catch(e){
        console.log(e)
        res.status(500).json({
            messege:"Internal Server Error"
        })
    }
    
}
export const getmoviebyid=async (req,res) => {
    try{
        let movie=await Movie.findById(req.params.id)
        res.status(200).json({
            messege:"Movie found",
            movie
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            messege:"Internal Server Error"
        })
    }
    
}

export const updatemovie=async (req,res) => {
    const {rating}=req.body
    try{
        let id=req.params.id
        let updatemovie=await Movie.findByIdAndUpdate((id),{
            $set:{
               rating:5
            }
        })
        res.status(200).json({
            messege:"Updatation sucess",
            updatemovie
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            messege:"Internal Server Error"
        })
    }
}


export const deletemovie=async (req,res) => {
    try{
        let id=req.params.id
        let moviedelete=await Movie.findByIdAndDelete(id)
        res.status(200).json({
            messege:"Movie Deleted successfully",
            moviedelete
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            messege:"Internal Server Error"
        })
    }
}
