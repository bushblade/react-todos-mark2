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

// need column index
const smallestColumn = columns => {
  const columnSizes = columns.map(column =>
    column.reduce((acc, card) => {
      if (card.tasks.length > 0) {
        return (acc += card.tasks.length + 2)
      } else {
        return (acc += 2)
      }
    }, 0)
  )
  return columnSizes.indexOf(Math.min(...columnSizes))
}

// need to add new card to smallest column
const columnChunker = (columns, cards) => {
  const chunkArr = [
    ...Array(columns)
      .fill(0)
      .map(() => [])
  ]
  cards.forEach(card => {
    chunkArr[smallestColumn(chunkArr)].push(card)
  })
  return chunkArr
}

const Cards = () => {
  const { state: cards } = useContext(Context)
  // const cardsInColumns = useColumns(cards)

  const [columns, setColumns] = useState(calcColumns())

  useEffect(() => {
    const resizeEvent = e => setColumns(calcColumns())
    window.addEventListener('resize', resizeEvent)
    return () => window.removeEventListener('resize', resizeEvent)
  }, [])

  return (
    <>
      {cards &&
        columnChunker(columns, cards).map((column, index) => (
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
