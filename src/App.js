import { useState } from "react";
import './App.css';
import _ from "lodash";


function App() {
  const [xoState, setXoState] = useState([  // Rember the state of the game board
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);


  const click = (row, column) => {  // For now save X on a clicked cell
    let newXoState = _.cloneDeep(xoState);
    newXoState[row][column] = "X";
    setXoState(newXoState);
  };

  
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
