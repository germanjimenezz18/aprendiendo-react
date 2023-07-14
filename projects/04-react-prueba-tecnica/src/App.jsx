import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'
import { Otro } from './components/Otro'
export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>reload components</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${imageUrl}`} alt='Cat Photo extracted from API' />}
      </section>
      <Otro />
    </main>

  )
}
