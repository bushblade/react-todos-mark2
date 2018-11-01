import React from 'react'
import { Consumer } from '../context'
import Card from './Card'

const Cards = () => {
  return (
    <Consumer>
      {context => context.cards.map(card => <Card card={card} key={card.cardId} />)}
    </Consumer>
  )
}

export default Cards
