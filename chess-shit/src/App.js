import React from 'react';
import ChessBoard from './ChessBoard';
function App({ board }) {
  return (
    <div className="App" style={{ marginTop: '4em' }}>
      <ChessBoard board={board} />
    </div>
  );
}

export default App;
