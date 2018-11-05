import React from 'react'

import Card from './Card'
import AddCard from './AddCard'

const Cards = ({ store }) => {
  return (
    <>
      {store.cards.map(card => (
        <Card card={card} key={card.cardId} store={store} />
      ))}
      <AddCard store={store} />
    </>
  )
}

export default Cards
