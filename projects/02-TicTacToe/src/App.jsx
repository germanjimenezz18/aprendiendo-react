import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'

import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'


function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null)
  })



  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null) //null no hay ganador - false empate



  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    //no actualizamos esta posicion
    //si ya tiene algo
    if (board[index] || winner) return
    const newBoard = [...board];
    newBoard[index] = turn
    setBoard(newBoard)

    //cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)


    //revisar hay ganador
    const newWinner = checkWinner(newBoard)
    console.log(newWinner)
    if (newWinner) {
      confetti()
      setWinner(newWinner)

    } else if (checkEndGame(newBoard)) {
      setWinner(false) //empate
    }

  }
  
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>New Game</button>
      {/* seccion de tablero */}
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                className="square"
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          }
          )}
      </section>

      {/* Seccion de muestra de turnos */}
      <section className="turn">
        <Square
          isSelected={turn == TURNS.X}>
          {TURNS.X}
        </Square>
        <Square
          isSelected={turn == TURNS.O}>
          {TURNS.O}
        </Square>
      </section>


      <WinnerModal resetGame={resetGame} winner={winner} />


    </main>
  )
}

export default App
