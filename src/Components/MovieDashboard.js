import React from 'react'
import MovieCard from './MovieCard'


const MovieDashboard = (props) => {
  const { movieData, movieComedy } = props

  let displayMovies = movieData.map((m,i) => {
    return <MovieCard movie={m}/>
  })
  // let displayComedy = movieComedy.map((m,i) => {
  //   return <MovieCard comedy={m}/>
  // })




  return (
    <div className='movie-dashboard'>
      {displayMovies}
      
    </div>
  )
}

export default MovieDashboard