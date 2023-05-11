import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { Carousel } from '@trendyol-js/react-carousel';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const MovieCard = (props) => {
  const { movie } = props;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [list, setList] = useState([]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  const deleteMovie = () => {
    axios.delete(`/movielist/${movie.id}`)
    .then(res => {
      console.log(res)
      console.log(res.data)
      window.location.reload(false)
    })
  }
  // Modal.setAppElement('#root');

  // const handleShow = () => setIsOpen(true)

  const addMovie = () => {
    axios.post("/movielist", {
      img: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
    });
  };

  return movie.poster_path ? (
    
    <div className="movie-card">
      <div>
        
        <img
          className="imgmain"
          onClick={openModal}
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        />
        
        <Modal className="modal" isOpen={modalIsOpen} style={customStyles}>
          <button className="close" onClick={closeModal}>
            X
          </button>
          <div className="data-center">
            <img
              className="MovieImg"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
            <p className="movieData">{movie.overview}</p>
          </div>

          <p className="description">Release Date {movie.release_date}</p>
          <button onClick={addMovie} className="watchlistbtn">
            add To Watch List
          </button>
        </Modal>
      </div>
    </div>
    
  ) : (
    <div className="listed">
    <img src={`https://image.tmdb.org/t/p/original${movie.imageUrl}`} />
    <button className="delete" onClick={deleteMovie}>Remove</button>
    </div>
  );
};

// ReactDOM.render(<App />, appElement);

export default MovieCard;
