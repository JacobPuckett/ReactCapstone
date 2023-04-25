import React from 'react'

const MovieCard = (props) => {
  const { movie } = props

  return (
    <div className='movie-card'>
        <div>
        
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
        
        </div>
    </div>
  )
}

export default MovieCard