import React, { useContext } from 'react'
import { Context } from '../context'
import Card from './Card'
import AddCard from './AddCard'

const Cards = () => {
  const { state } = useContext(Context)
  return (
    <>
      {state.map(card => (
        <Card card={card} key={card.cardId} />
      ))}
      <AddCard />
    </>
  )
}

export default Cards
