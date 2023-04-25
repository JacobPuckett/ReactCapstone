import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import MovieDashboard from '../Components/MovieDashboard';

function Home() {
    const [movieData, setMovieData] = useState([])
    const [movieComedy, setMovieComedy] = useState([])
    const [movieHorror, setMovieHorror] = useState([])
    const [movieRomance, setMovieRomance] = useState([])
  
    const getRomance = () => {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`)
    .then ((res) => {
      setMovieRomance(res.data.results)
    })
    }
  
    useEffect(() => {
      getRomance()
    },[])
  
    const getComedy = () => {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`)
    .then ((res) => {
      setMovieComedy(res.data.results)
    })
    }
  
    useEffect(() => {
      getComedy()
    },[])
  
    const getHorror = () => {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`)
    .then ((res) => {
      setMovieHorror(res.data.results)
    })
    }
  
    useEffect(() => {
      getHorror()
    },[])
  
  const getData = () => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`)
    .then ((res) => {
      // console.log(res.data.results)
      // console.log(res.data.results[0].original_title)
      // console.log(res.data.results[0].poster_path)
      setMovieData(res.data.results)
    })
  }
  
  useEffect(() => {
    getData()
  },[])

  return (
    <div>
    <main>
      <h2>Action</h2>
        <MovieDashboard 
        movieData={movieData}
        />
        <h2>Comedy</h2>
        <MovieDashboard 
        movieData={movieComedy}
        />
        <h2>Horror</h2>
        <MovieDashboard 
        movieData={movieHorror}
        />
        <h2>Romance</h2>
        <MovieDashboard 
        movieData={movieRomance}
        />
      </main>
    </div>
  )
}

export default Home