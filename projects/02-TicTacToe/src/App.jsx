import './App.css'


const board = Array(9).fill(null)
const Square = ({children, updateBoard, indexw}) => {
    return(
      <div className='square'>{children}</div>
    )

}


function App() {



  return (
   <main id='board'>
    <h1>Tic Tac Toe</h1>
    <section className='game'>
      {
      board.map((_, index) => {
        return (
          <Square
          key={index}
          index={index}
          >
            {index}
          </Square>
        )
      } 
      )}
    </section>

   </main>
  )
}

export default App
