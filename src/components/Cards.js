import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../context'
import Card from './Card'
import AddCard from './AddCard'
// import useColumns from '../hooks/useColumns'

const calcColumns = () => {
  const width = window ? window.innerWidth : 100
  if (width < 768) {
    return 1
  } else if (width < 1000) {
    return 2
  } else if (width < 1400) {
    return 3
  } else {
    return 4
  }
}

const columnChunker = (columns, cards) => {
  let currentColumn = 0
  const chunkArr = [
    ...Array(columns)
      .fill(0)
      .map(() => [])
  ]
  cards.forEach(card => {
    if (chunkArr[currentColumn]) {
      chunkArr[currentColumn].push(card)
      currentColumn++
    } else {
      currentColumn = 1
      chunkArr[0].push(card)
    }
  })
  return chunkArr
}

const Cards = () => {
  const { state: cards } = useContext(Context)
  // const cardsInColumns = useColumns(cards)

  const [cardsInColumns, setCardsInColumns] = useState(columnChunker(calcColumns(), cards))

  useEffect(() => {
    const resizeEvent = e => setCardsInColumns(columnChunker(calcColumns(), cards))
    window.addEventListener('resize', resizeEvent)
    return () => window.removeEventListener(resizeEvent)
  }, [])

  return (
    <>
      {cards &&
        cardsInColumns.map((column, index) => (
          <div className="column" key={`column${index}`}>
            {column.map(card => (
              <Card card={card} key={`card${card.cardId}`} />
            ))}
          </div>
        ))}
      <AddCard />
    </>
  )
}

export default Cards
