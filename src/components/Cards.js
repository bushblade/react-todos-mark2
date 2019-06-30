import React, { useContext } from 'react'
import { Context } from '../context'
import Card from './Card'
import AddCard from './AddCard'
import useColumns from '../hooks/useColumns'

const Cards = () => {
  const { state: cards } = useContext(Context)
  const windowSize = useColumns()
  console.log(windowSize)
  return (
    <>
      {cards.map(card => (
        <div className="column" key={card.cardId}>
          <Card card={card} />
        </div>
      ))}
      <AddCard />
    </>
  )
}

export default Cards
