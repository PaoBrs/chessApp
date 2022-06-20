import { Piece } from './piece';

class Knight extends Piece {
  constructor(color) {
    super(color, (color === "white" ? 'knight_w.png' : 'knight_b.png'), 'knight');
  }

}

export class KnightFactory {
  static newKnight(color) {
    return new Knight(color);
  }
}