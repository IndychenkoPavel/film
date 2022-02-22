// import {generate as id} from 'shortid';
import React from 'react';
import TypeArr  from './TypeArr';
// import ButtonComponent from "./ButtonComponent";
import { Link } from 'react-router-dom';
// import { useState} from 'react'
import { useParams } from 'react-router-dom'


const DataLS = ({movies}: {movies: TypeArr[]}, {setMovies}:any) => {

  const {id} = useParams();
  // const [ title, setTitle ] = useState(movie.title);  

  const deletFilms = (e) => {
    console.log(encodeURI)
    setMovies(movies.filter(item => item._id !== id));  
  }

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
            {/* <ButtonComponent id={movie._id}/> */}
            <div className='button-block'>
              <Link to={`/editFilm/${movie._id}`} className='btn-edit'>edit</Link>
              <button className='btn-delete' id={`${movie._id}`} onClick={deletFilms} >delete</button>
            </div>
            
          </div>  
        )}
    </div>
  )
}


export default DataLS


