import { useRef, useState } from "react";
import './App.css';
import _ from "lodash";


function App() {
  const [xoState, setXoState] = useState([  // Rember the state of the game board
                                            // 'useState' usually used to remeber and display updates
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);


  const currentPlayer = useRef("X");  // 'useRef' usually used just to remember an update (not to display)


  const click = (row, column) => {  // For now save X on a clicked cell
    if (xoState[row][column] === "") {
      let newXoState = _.cloneDeep(xoState);
      newXoState[row][column] = currentPlayer.current;

      if (currentPlayer.current === "X")
        currentPlayer.current = "O";
      else
        currentPlayer.current = "X";
      
      setXoState(newXoState);

      // Display the winner
      if (hasWin("X", xoState))
        alert("Congratulations, X won!");
      if (hasWin("O", xoState))
        alert("Congratulations, O won!");
    }  
  };


  const hasWin = (player, xoState) => {  // Check if the 'player' won
    // Check for rows
    for (let row = 0; row < 3; ++row) {
      if (
        xoState[row][0] === player && 
        xoState[row][1] === player && 
        xoState[row][2] === player
      )
        return true;
    }

    // Check for columns
    for (let column = 0; column < 3; ++column) {
      if (
        xoState[0][column] === player &&
        xoState[1][column] === player &&
        xoState[2][column] === player
      )
        return true;
    }

    // Diagonals
    if (  // Main diagonal
      xoState[0][0] === player &&
      xoState[1][1] === player &&
      xoState[2][2] === player
    )
      return true;

    if (  // Secondary diagonal
      xoState[0][2] === player &&
      xoState[1][1] === player && 
      xoState[2][0] === player
    )
      return true;

    return false;  // If none of the above, then has not win  
  }

  
  const generateCells = () => {
    let cellsArray = [];

    for (let row = 0; row < 3; ++row) { // Generate 9 cells
      for (let column = 0; column < 3; ++column) {
        cellsArray.push(
          <div 
            className="cell" 
            style={{ gridColumnStart: column + 1, gridRowStart: row + 1 }}
            onClick={() => click(row, column)}
          >
            {xoState[row][column]}
          </div>  
        )
      }
    }
    
    return cellsArray;
  };


  return (
    <div className="App">
      <div className="xoGrid">{generateCells()}</div>
    </div>
  );
}

export default App;
