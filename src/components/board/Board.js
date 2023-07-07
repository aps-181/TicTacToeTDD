import { useState } from "react";
import Square from "../square/Square";




export default function Board(){

     const [squares,setSquares] = useState(Array(9).fill(null))
     const [xIsNext, setXIsNext] = useState(true)

     const winner = calculateWinner(squares)
     let status
     if (winner) {
       status = "Winner: " + winner
     } else {
       status = "Next player: " + (xIsNext ? "X" : "O")
     }


     function handleClick(i){

          if(squares[i] || calculateWinner(squares)) return;

          let newSquareArray = squares.slice()
          newSquareArray[i] =  xIsNext ? 'X' : 'O'
          setSquares(newSquareArray)
          setXIsNext(!xIsNext)
      }
      
     return (
          <>
          <div className="status" data-testid="game-status">{status}</div>
          <div className="board-row">
               <Square testId="square_0" onSquareClick={() => handleClick(0)} value = {squares[0]}/>
               <Square testId="square_1" onSquareClick={() => handleClick(1)} value={squares[1]}/>
               <Square testId="square_2" onSquareClick={() => handleClick(2)} value={squares[2]}/>
          </div>
          <div className="board-row">
               <Square testId="square_3" onSquareClick={() => handleClick(3)} value={squares[3]}/>
               <Square testId="square_4" onSquareClick={() => handleClick(4)} value={squares[4]}/>
               <Square testId="square_5" onSquareClick={() => handleClick(5)} value={squares[5]}/>
          </div>
          <div className="board-row">
               <Square testId="square_6" onSquareClick={() => handleClick(6)} value={squares[6]}/>
               <Square testId="square_7" onSquareClick={() => handleClick(7)} value={squares[7]}/>
               <Square testId="square_8" onSquareClick={() => handleClick(8)} value={squares[8]}/>
          </div>
          </>
     )
     
     function calculateWinner(squares) {
          const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
          ]
      
          for (let winningCombination of winningCombinations) {
            const [a, b, c] = winningCombination
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return squares[a]
            }
      
          }

          return null
        }
}