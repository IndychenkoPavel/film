// import {generate as id} from 'shortid';
import React from 'react';
import TypeArr  from './TypeArr';
// import { useState, useEffect } from "react";
import ButtonComponent from "./ButtonComponent";
// import dataFilms from "../App";


const DataLS = ({movies}: {movies: TypeArr[]}) => {

  return (
    <div className='films-all'>
        {movies.length > 0 && movies.map((movie) => 
          <div className='film-container' key={movie._id}>
            <div className='film-img'>
              <img src={movie.img} alt="1" />
            </div>
            <div className="film-bottom">
              <h3 className="film-title">
              {movie.title}
              </h3>
              <p className="film-director">
              {movie.director}
              </p>
              <p className="film-duration">
              {movie.duration} min
              </p>
            </div>
            <div className="film-price">
            {movie.price} $
            </div>
            <ButtonComponent id={movie._id}/>
            
          </div>  
        )}
    </div>
  )
}


export default DataLS


