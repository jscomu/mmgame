import React from 'react'
import {useState} from 'react'
import { createRoot } from 'react-dom/client'
import './popup.css'
import ComCard from './comCard'

const cardImages = [
  {"src": "/img/symbol1.png", matched: false},
  {"src": "/img/symbol2.png", matched: false},
  {"src": "/img/symbol3.png", matched: false},
  {"src": "/img/symbol4.png", matched: false},
  {"src": "/img/symbol5.png", matched: false},
  {"src": "/img/symbol6.png", matched: false}
]

const App: React.FC<{}> = () => {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const btnShuffle = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card_src) => ({id: Math.random(), ...card_src}))
    
    setCards(shuffledCards)
    setTurns(0)
    
  }
  console.log(cards, turns)  //6가지 2개씩 12개 그림파일 배열

  return (
    <div>
      <h1>메모리게임</h1>
      <button onClick={btnShuffle}>시작</button>

      <div className='card-grid'>
        {cards.map(card => (
          <ComCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)
