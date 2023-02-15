import useCatImage from './hooks/useCatImage'
import useCatFat from './hooks/useCatFat'
import './App.css'

export default function App () {
  const { fact, refreshFact } = useCatFat()
  const { pathImg } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main className='main'>
      <h1>Cat APPs</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section className='content'>
        {fact && <p>{fact}</p>}
        {pathImg && <img loading='lazy' src={pathImg} alt={`this a cat wiht his ${fact}`} />}
      </section>
    </main>
  )
}
