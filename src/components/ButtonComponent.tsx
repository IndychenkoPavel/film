import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import EditFilm from './EditFilm';

const ButtonComponent = () => {
  return (
    <>
    <div className='button-block'>
        <Link to="editFilm" className='btn-edit'>edit</Link>
        <button className='btn-delete'>delete</button>
    </div>
    <Routes>
      <Route path="/editFilm" element={<EditFilm />} />
    </Routes>
    </>
  )
}

export default ButtonComponent
