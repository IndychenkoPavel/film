import React from 'react';
import { Link } from 'react-router-dom';


const ButtonComponent = () => {
  return (
    <>
    <div className='button-block'>
        <Link to="/editFilm" className='btn-edit'>edit</Link>
        <button className='btn-delete'>delete</button>
    </div>
    </>
  )
}

export default ButtonComponent
