import { BishopFactory } from '../pieces/bishop.js';
import { KingFactory } from '../pieces/king.js';
import { KnightFactory } from '../pieces/knight.js';
import {PawnFactory} from '../pieces/pawn.js';
import { QueenFactory } from '../pieces/queen.js';
import { RookFactory } from '../pieces/rook.js';



export default function initialiseChessBoard() {
  const squares = Array(64).fill(null);


  for (let i = 8; i < 16; i++) {
    squares[i] = PawnFactory.newPawn('black');
    squares[i + 40] = PawnFactory.newPawn('white');
  }

  squares[0] = RookFactory.newRook('black');
  squares[7] = RookFactory.newRook('black');
  squares[56] = RookFactory.newRook('white');
  squares[63] = RookFactory.newRook('white');

  squares[58] = BishopFactory.newBishop('white');
  squares[61] = BishopFactory.newBishop('white');
  squares[2] = BishopFactory.newBishop('black');
  squares[5] = BishopFactory.newBishop('black');

  squares[1] =KnightFactory.newKnight('black');
  squares[6] = KnightFactory.newKnight('black');
  squares[57] = KnightFactory.newKnight('white');
  squares[62] = KnightFactory.newKnight('white');

  squares[3] = QueenFactory.newQueen('black');
  squares[59] = QueenFactory.newQueen('white');

  squares[4] = KingFactory.newKing('black');
  squares[60] = KingFactory.newKing('white');




  return squares;
}