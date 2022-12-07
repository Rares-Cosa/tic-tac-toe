import './App.css';

function App() {
  const generateCells = () => {
    let cellsArray = [];

    for (let row = 0; row < 3; ++row) {  // Generate 9 cells
      for (let column = 0; column < 3; ++column) {
        cellsArray.push(
          <div 
            className="cell" 
            style={{ gridColumnStart: column + 1, gridRowStart: row + 1 }} 
          /> 
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
