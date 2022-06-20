import { Piece } from './piece';

class Bishop extends Piece {
  constructor(color) {
    super(color, (color === "white" ? 'bishop_w.png' : 'bishop_b.png'), 'bishop');
  }
    }

export class BishopFactory{
  static newBishop (color){
    return new Bishop(color)
  }
}