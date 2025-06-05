//Bhuvi is commenting ..
// So app.js creates a component (reusable code)
// UI components render and manage UI elements in the application 
import { useState } from "react"; 

//this is how 
// components remeber things 
//oo fun part of props too 
//so "value" is a prop if passed as Square({value})
function Square({value, onSquareClick}){
  return <buttton className="square"  onClick={onSquareClick}>{value}</buttton>
}

export default function Board() {
  const [xIsNext , setXIsNext] = useState(true);
  const [squares, setSquares] =useState(Array(9).fill(null));
 

  function handleClick(i) {
    const nextSquares = squares.slice(); // creates a copy of the sqaures array using slice function 
    if (squares[i] || calculateWinner(squares)) {
    return;
  }
    if (xIsNext){
      nextSquares[i] = "X";
    } else{
      nextSquares[i]="O";
    }
    
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
   const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  
  return (
    <>
     <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={()=>{handleClick(0)}}/>
        <Square value={squares[1]} onSquareClick={()=>{handleClick(1)}} />
        <Square value={squares[2]} onSquareClick={()=>{handleClick(2)}} />
      </div>
      <div className="board-row">
        <Square value={squares[3]}  onSquareClick={()=>{handleClick(3)}}/>
        <Square value={squares[4]} onSquareClick={()=>{handleClick(4)}}/>
        <Square value={squares[5]} onSquareClick={()=>{handleClick(5)}}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={()=>{handleClick(6)}}/>
        <Square value={squares[7]} onSquareClick={()=>{handleClick(7)}}/>
        <Square value={squares[8]} onSquareClick={()=>{handleClick(8)}}/>
      </div>
    </>
  );
}
// Button elements is combo of html + js
  // classname CSS ofc!!

// okay so we need to creat 9 squares but cannot copy paste -> as react components need to return a single JSX element !!!

// so we wrap it in <> </>
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// so the above logic basically just includes all the possible winning combos 
//needed a visualizer 
