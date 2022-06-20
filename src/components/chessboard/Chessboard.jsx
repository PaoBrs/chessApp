import React, { useEffect, useState } from 'react'
import initialiseChessBoard from '../../utils/initalPosition';
import Tile from '../tile/Tile';
import './Chessboard.css'

const horizontalAxis = ["a", "b", "c", "d", "f", "g", "f", "h"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"]

const movePieces = (from, to, previousPositions) => {
  previousPositions[to] = previousPositions[from]
  previousPositions[from] = null
  return previousPositions
}

const Chessboard = () => {
  let board = [];
  const [positions, setPositions] = useState([])
  const [from, setFrom] = useState(null)
  const [to, setTo] = useState(null)
  const [isValidFrom, setIsValidFrom] = useState(false)


  useEffect(() => {
    if (from) {
      if (positions[from].isMoveValid(from, to, false)) {
        const newPositions = movePieces(from, to, positions)
        console.log('holiiii')
        setPositions(newPositions)
        console.log(newPositions)
      }
    }
  }, [to])


  useEffect(() => {
    if (from) {
      setIsValidFrom(true)
    } else {
      setIsValidFrom(false)
    }
  }, [from])


  useEffect(() => {
    setPositions(initialiseChessBoard())
  }, [])


  for (let j = 0; j <= verticalAxis.length - 1; j++) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = i + j + 2;


      board.push(<Tile
        key={j * 8 + i}
        index={j * 8 + i}
        number={number}
        image={positions[j * 8 + i] ? positions[j * 8 + i].img : null}
        setFrom={setFrom}
        setTo={setTo}
        isValidFrom={isValidFrom}
      />)

    }
  }

  return (
    <div id='chessboard'>
      {board}
    </div>
  )
}

export default Chessboard