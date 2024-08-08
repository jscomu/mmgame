import React from 'react'
import './comCard.css'
//import {Card} from './type_card'

// 프롭스 타입 지정하는데 두가지 있다. type, interface
/*type CpCardProps = {
    id: string;
    src: string;
}*/

type Card = {
    id: string;
    src: string;
}

interface ComCardProps {
    card:Card
}

const ComCard: React.FC<ComCardProps> = ({card}) => {

    return (
        <div className='card' key={card.id}>
            <div>
                <img className='fornt' src={card.src} alt='card front' />
                <img className='back' src='/img/back.png' alt='card back' />
            </div>
        </div>
    )
}

export default ComCard