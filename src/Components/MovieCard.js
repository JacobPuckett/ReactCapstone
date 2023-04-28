import React, { useState } from 'react'
import Modal from 'react-modal'

const MovieCard = (props) => {
  const { movie } = props
  const [modalIsOpen, setIsOpen] = useState(false)


  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

 

  return (
    <div className='movie-card'>
        <div onClick={openModal}>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
        <Modal className='modal'
          isOpen={modalIsOpen}
          onRequestClose={closeModal}   
          style={customStyles}
        >
          <button className='close'onClick={closeModal}>X</button>
          <div className='data-center'>
          <img className='MovieImg' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
          <p className='movieData'>{movie.overview}</p>
          </div>
          
          <p className='description'>Release Date {movie.release_date}</p>
          <button className='watchlistbtn'>add To Watch List</button>

        </Modal>
        
        </div>
        
    </div>
  )
}

export default MovieCard