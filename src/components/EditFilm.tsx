import React from 'react'
import { useState} from 'react'
import { useParams } from 'react-router-dom'

const EditFilm = ({setMovies, movies}:any) => {

  const {id} = useParams();

// console.log(movies[id]);
  const [ title, setTitle ] = useState(movies[id].title);
  const [ director, setDirector ] = useState(movies[id].director);
  const [ price, setPrice ] = useState(movies[id].price);
  const [ img, setImg ] = useState(movies[id].img);
  const [ duration, setDuration ] = useState(movies[id].duration);
  const [ description, setDescription ] = useState(movies[id].description);
  
  const onSubmit = (e) => {
    e.preventDefault();
    const newObj = {
      title: title,
      director: director,
      price: price,
      img: img,
      duration: duration,
      description: description
    }
  
    console.log(newObj);
    setMovies(prevMovies => {
      return [...prevMovies, newObj]  // добавить обьект в массив
    })
  }

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