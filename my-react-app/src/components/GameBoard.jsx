

export default function GameBoard({onSelectSquare, turns, gameBoard}) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(row, col) {
  //   if (!gameBoard[row][col]) {
  //     const newGameBoard = gameBoard.map((innerArray) => [...innerArray]);
  //     newGameBoard[row][col] = activePlayerSymbol;
  //     setGameBoard(newGameBoard);
  //     onSelectSquare();
  //   }
  // }

  for (const turn of turns) {
    gameBoard[turn.row][turn.col] = turn.player;
  }
  
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
