import { useState } from "react";
import "./Visualizer.css"

export default function Visualizer({squares}) {
    const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]; //basically an array with all possible combinations 

  const [step, setStep] = useState(0);
  const[winner, setWinner] =useState(null);

  const currentLine =lines[step];
  const [a,b,c] = currentLine;
  
  const isMatch =
    squares[a] &&
    squares[a] === squares[b] &&
    squares[a] === squares[c];

function nextStep(){
    if (isMatch) {
        setWinner(squares[a]);
        return;
    }
    if (step < lines.length -1){
        setStep(step+1);
    } else{
        setWinner("no winner yet")
    }
}

return (
    <div>
      <h3>Winner Visualizer</h3>
      <div className="board">
        {squares.map((value, i) => (
          <div
            key={i}
            className={`square ${currentLine.includes(i) ? "highlight" : ""}`}
          >
            {value}
          </div>
        ))}
      </div>
      <p>Checking line: [{a}, {b}, {c}]</p>
      <button onClick={nextStep} disabled={winner !== null}>Next Step</button>
      {winner && <p>{winner === "No winner yet" ? winner : `Winner: ${winner}`}</p>}
    </div>
  );














}