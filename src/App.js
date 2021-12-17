import Cell from './Cell';
import Board from './Board';

function App() {
  return (
    <div className="w3-margin">
      <h1 className="w3-margin">Lights out</h1>
      <div className="w3-center">
        <Board  />
      </div>
    </div>
  );
}

export default App;
