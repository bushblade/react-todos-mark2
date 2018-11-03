import React from 'react'
import { Consumer } from '../context'
import Card from './Card'
import AddCard from './AddCard'

const Cards = () => {
  return (
    <Consumer>
      {({ cards, dispatch, ADD_CARD }) => {
        return (
          <>
            {cards.map(card => (
              <Card card={card} key={card.cardId} />
            ))}
            <AddCard dispatch={dispatch} ADD_CARD={ADD_CARD} />
          </>
        )
      }}
    </Consumer>
  )
}

export default Cards
