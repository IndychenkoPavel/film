import React from 'react'
import { useState } from 'react'

const AddFilms = () => {
  // const mass = ['director', 'title', 'price', 'img', 'duration', 'description',];

const [ title, setTitle ] = useState('');
const [ director, setDirector ] = useState('');
const [ price, setPrice ] = useState('');
const [ img, setImg ] = useState('');
const [ duration, setDuration ] = useState('');
const [ description, setDescription ] = useState('');

// useEffect(() => {
    
//   setTitle()
// }, []);


const onSubmit = (e) => {
  e.preventDefault();
  console.log(title);
  console.log(director);
  console.log(price);
}


  return (
    <div>
        <form onSubmit={onSubmit} className='form-addFilms' action="">
            <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder='director' value={director} onChange={(e) => setDirector(e.target.value)}/>
            <input type="text" placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)}/>
            <input type="text" placeholder='img' value={img} onChange={(e) => setImg(e.target.value)}/>
            <input type="text" placeholder='duration' value={duration} onChange={(e) => setDuration(e.target.value)}/>
            <input type="text" placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
            <input type="submit" className='bnt-addFilms' value='Add Movie'/>
        </form>
    </div>
  )
}

export default AddFilms