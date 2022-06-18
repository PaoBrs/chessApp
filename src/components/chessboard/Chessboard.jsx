import React from 'react'
import Tile from '../tile/Tile';
import './Chessboard.css'

const horizontalAxis = ["a", "b", "c", "d", "f", "g", "f", "h"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"]

const Chessboard = () => {
  let board = [];

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = i + j + 2;

      board.push(<Tile number={number} />)

    }
  }

  return (
    <div id='chessboard'>
      {board}
    </div>
  )
}

export default Chessboard