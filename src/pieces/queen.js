import { Piece } from './piece';

class Queen extends Piece {
  constructor(color) {
    super(color, (color === "white" ? 'queen_w.png' : 'queen_b.png'), 'queen');
  }
}

export class QueenFactory {
  static newQueen(color) {
    return new Queen(color);
  }
}