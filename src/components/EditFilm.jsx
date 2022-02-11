import React from 'react'

const EditFilm = () => {
  return (
    <div>
        <form action="">
            <input type="text" placeholder='title'/>
            <input type="text" placeholder='director'/>
            <input type="text" placeholder='price'/>
            <input type="text" placeholder='img'/>
            <input type="text" placeholder='duration'/>
            <input type="text" placeholder='description'/>
            <button>Edit Movie</button>
        </form>
    </div>
  )
}

export default EditFilm