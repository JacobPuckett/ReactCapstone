import React, { useState } from 'react'
import axios from 'axios'
import Header from './Components/Header';
import Home from './pages/Home'
import Authentication from './pages/Authentication'
import MovieList from './pages/MovieList'
import './App.css';
import { Route, Routes } from "react-router-dom"

function App() {
  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/auth" element={<Authentication />}/>
        <Route path="/list" element={<MovieList />}/>
      </Routes>
    </div>
  );
}

export default App;
