import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import DataLS from './components/DataLS';
import AddFilms from './components/AddFilms';
import EditFilm from './components/EditFilm';
import SingIn from './components/SingIn';



function App() {
  return (
    <div className="container">
      <h1>FILMS</h1>
      <div className='btn-link'>
        <Link to='/home' className='home'>Home</Link>
        <Link to='/addFilm' className='add-movie'>Add Film</Link>
        {/* <Link to='/editFilm' className='movies'>Edit Film</Link> */}
        <Link to='/singIn' className='sing-in'>Sing in</Link>
    </div>
    <Routes>
      <Route path="/home" element={<DataLS />} />
      <Route path="/addFilm" element={<AddFilms />} />
      <Route path="/editFilm" element={<EditFilm />} />
      <Route path="/singIn" element={<SingIn />} />
    </Routes>
    </div>
  );
}

export default App;
