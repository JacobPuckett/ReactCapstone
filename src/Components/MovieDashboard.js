import React from 'react'
import MovieCard from './MovieCard'


const MovieDashboard = (props) => {
  const { movieData, movieComedy, movieRomance, movieHorror } = props

  let displayMovies = movieData.map((m,i) => {
    return <MovieCard movie={m}/>
  })
 





  return (
    <div className='movie-dashboard'>
      {displayMovies}
      
    </div>
  )
}

export default MovieDashboard