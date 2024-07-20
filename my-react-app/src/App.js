import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const [hasWinner, setHasWinner] = useState(false);
  function checkWinner() {
    for (const combination of WINNING_COMBINATIONS) {
      const firstNode =
        initialGameBoard[combination[0].row][combination[0].column];
      const secondNode =
        initialGameBoard[combination[1].row][combination[1].column];
      const thirdNode =
        initialGameBoard[combination[2].row][combination[2].column];
      if (firstNode === secondNode && secondNode === thirdNode && firstNode) {
        setHasWinner(true);
        console.log(hasWinner);
      }
    }
    console.log(hasWinner);
  }

  function handleSelectSquare(rowIndex, colIndex) {
    let checkedBox = false;
    for (const turn of gameTurns) {
      if (turn.row === rowIndex && turn.col === colIndex) {
        checkedBox = !checkedBox;
      }
    }
    if (!checkedBox) {
      setActivePlayer((currentActivePlayer) =>
        currentActivePlayer === "X" ? "O" : "X"
      );
      initialGameBoard[rowIndex][colIndex] = activePlayer;
      setGameTurns((prevGameTurn) => {
        let currentPlayer =
          prevGameTurn.length > 0 && prevGameTurn[0].player === "X" ? "O" : "X";
        const updatedTurn = [
          { row: rowIndex, col: colIndex, player: currentPlayer },
          ...prevGameTurn,
        ];
        return updatedTurn;
      });
    }
    console.log(initialGameBoard);
    checkWinner();
  }

  return (
    <main>
      <div className="logo"></div>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" active={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" active={activePlayer === "O"} />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
          gameBoard={initialGameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
