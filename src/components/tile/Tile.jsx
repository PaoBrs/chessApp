import React from 'react'
import './Tile.css'

const Tile = ({ number }) => {
  if (number % 2 === 0) {
    return <div className='tile black-tile'></div>
  } else {
    return <div className='tile white-tile'></div>
  }


}

export default Tile
