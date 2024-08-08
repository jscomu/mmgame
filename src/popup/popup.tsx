import React, { useEffect } from 'react'
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
  const [choice1st, setChoice1st] = useState(null)
  const [choice2rd, setChoice2rd] = useState(null)

  const btnShuffle = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card_src) => ({id: Math.random(), ...card_src}))
    
    setCards(shuffledCards)
    setTurns(0)
    
  }
  //console.log(cards, turns)  //6가지 2개씩 12개 그림파일 배열

  const handleChoice = (card) => {
    console.log(card) //선택한 카드 로그로 확인
    choice1st ? setChoice2rd(card) : setChoice1st(card)
  }

  // compare 2 selected cards
  useEffect(() => {
    //console.log("둘중 하나 값 변경")
    if(choice1st && choice2rd) {  // 카드 두개가 선택되어 있으면
      //console.log("둘다 값이 있다.")
      if(choice1st.src === choice2rd.src) {
        console.log("선택한 카드는 같은 그림")
        resetTurn()
      } else {
        console.log("선택한 카드는 다른 그림")
        resetTurn()
      }
    }
  }, [choice1st, choice2rd])

  //reset choices & increase turn
  const resetTurn = () => {
    setChoice1st(null)
    setChoice2rd(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  return (
    <div>
      <h1>메모리게임</h1>
      <button onClick={btnShuffle}>시작</button>

      <div className='card-grid'>
        {cards.map(card => (
          <ComCard key={card.id} card={card} handleChoice={handleChoice}  />
        ))}
      </div>
    </div>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)
