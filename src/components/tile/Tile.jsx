import React, { useState } from 'react'
import './Tile.css'

const Tile = ({ number, image, index, setFrom, isValidFrom, setTo }) => {
  const handlerClick = () => {
    if (!isValidFrom) {

      if (image) {
        setFrom(index)
      } else {
        setFrom(null)
      }

    } else {
      setTo(index)
    }

    console.log(image)
  }

  if (number % 2 === 0) {
    return <button onClick={handlerClick} className='tile white-tile'>{image ? <img src={`/images/${image}`} alt='.' className='piece' /> : null}</button>
  } else {
    return <button onClick={handlerClick} className='tile black-tile'>{image ? <img src={`/images/${image}`} alt='.' className='piece' /> : null}</button>
  }


}

export default Tile
