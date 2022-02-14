import React from 'react'

const AddFilms = () => {
  return (
    <div>
        <form action="">
            <input type="text" placeholder='title'/>
            <input type="text" placeholder='director'/>
            <input type="text" placeholder='price'/>
            <input type="text" placeholder='img'/>
            <input type="text" placeholder='duration'/>
            <input type="text" placeholder='description'/>
            <button>Add Movie</button>
        </form>
    </div>
  )
}

export default AddFilms