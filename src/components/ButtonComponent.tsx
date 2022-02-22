import React from 'react';
import { Link } from 'react-router-dom';
// import { useState } from 'react'


const ButtonComponent = ({id}) => {
  const deletFilms = () => {

  }
  return (
    <>
    <div className='button-block'>
        <Link to={`/editFilm/${id}`} className='btn-edit'>edit</Link>
        <button className='btn-delete' id={id} onClick={deletFilms} >delete</button>
    </div>
    </>
  )
}

export default ButtonComponent
