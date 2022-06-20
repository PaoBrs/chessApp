import { Piece } from './piece';

class Rook extends Piece{
  constructor (color){
    super(color, (color === "white" ? 'rook_w.png' : 'rook_b.png'), 'rook')
  }

}

export class RookFactory{
  static newRook (color){
    return new Rook(color)
  }
}