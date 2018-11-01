import React from 'react'
import { Consumer } from '../context'
import Card from './Card'

const Cards = () => {
  return (
    <Consumer>
      {({ cards }) => {
        return cards.map(card => <Card card={card} key={card.cardId} />)
      }}
    </Consumer>
  )
}

export default Cards
