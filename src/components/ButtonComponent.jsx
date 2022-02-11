import React from 'react'

const ButtonComponent = (id) => {
  return (
    <div className='button-block'>
        <button className='btn-edit' id={id}>edit</button>
        <button className='btn-delete' id={id}>delete</button>
    </div>
  )
}

export default ButtonComponent