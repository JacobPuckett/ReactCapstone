import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MovieCard from '../Components/MovieCard'

const MovieList = () => {

  const [getMovie, setMovie] = useState([])

  const getMovieImg = () => {
    axios.get('/movielist')
  .then ((res) => {
    setMovie(res.data)
    console.log(res.data)
    
  })
  }

  useEffect(() => {
    getMovieImg()
  },[])
  
  let displayMovies = getMovie.map((m,i) => {
    return <MovieCard movie={m}/>
  })
  

  return (
    <div>
      {displayMovies}
    </div>
  )
}

export default MovieList