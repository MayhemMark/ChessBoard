import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Board, Knight, Pawn } from './pieces/Pawn';

// 1player gets 8 x Pawn, 2x Rook, 2x Bischop, 2x Knight, 1x Queen, 1x King. White starts on the 1 side, black on the 8 side
function createNewBoard(playerB, playerW) {
  const b = new Board(8, 8);
  for (let i = 0; i < 8; ++i) {
    b.addPieceToCoordinate(i, 1, new Pawn(playerB));
    b.addPieceToCoordinate(i, 6, new Pawn(playerW));
  }
  
  return b;
}


const board = createNewBoard('MayhemMark', 'wvbe');

ReactDOM.render(
  <React.StrictMode>
    <App board={board} />
  </React.StrictMode>,
  document.getElementById('root')
);