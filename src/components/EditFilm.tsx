import React from 'react'
import { useState} from 'react'
import { useParams } from 'react-router-dom'

const EditFilm = ({setMovies, movies}:any) => {

  const {id} = useParams();

  const movie = movies.find((e) => e._id === Number(id));
  const [ title, setTitle ] = useState(movie.title);
  const [ director, setDirector ] = useState(movie.director);
  const [ price, setPrice ] = useState(movie.price);
  const [ img, setImg ] = useState(movie.img);
  const [ duration, setDuration ] = useState(movie.duration);
  const [ description, setDescription ] = useState(movie.description);
  
  const onSubmit = (e) => {
    e.preventDefault();
    setMovies((prevMovies: any) => {
      prevMovies.forEach((movie: any) => {
        if (movie._id === Number(id)) {
          movie.title = title;
          movie.director = director;
          movie.price = price;
          movie.img = img;
          movie.duration = duration;
          movie.description = description
        }
      });
      localStorage.setItem("LSdata", JSON.stringify(prevMovies));
      return [...prevMovies];
    });
  };
  

  return (
    <div>
        <form onSubmit={onSubmit} className='form-editFilm' action="">
        <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder='director' value={director} onChange={(e) => setDirector(e.target.value)}/>
            <input type="text" placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)}/>
            <input type="text" placeholder='img' value={img} onChange={(e) => setImg(e.target.value)}/>
            <input type="text" placeholder='duration' value={duration} onChange={(e) => setDuration(e.target.value)}/>
            <input type="text" placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
            <input type="submit" className='btn-editFilm' value="Edit Movie" />
          </form>
    </div>
  )
}

export default EditFilm