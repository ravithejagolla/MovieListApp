

import { Schema,model } from "mongoose";

const movieSchema = new Schema({
  title: {
    type: String,
  },
  cast: {
    type: [String],
    default: []
  },
  director: {
    type: String,
  },
  releaseDate: {
    type: Date,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  }
});

const Movie=model("movie",movieSchema)

export default Movie