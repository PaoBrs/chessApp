import { Piece } from './piece';

class King extends Piece {
  constructor(color) {
    super(color, (color === "white" ? 'king_w.png' : 'king_b.png'), 'king');
  }
}

export class KingFactory {
  static newKing(color) {
    return new King(color);
  }
}