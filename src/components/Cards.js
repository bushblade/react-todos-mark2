import React, { useContext } from 'react'
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

// this is buggy, addin too many to column 0
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
      console.log(currentColumn)
      currentColumn++
    } else {
      currentColumn = 0
      chunkArr[currentColumn].push(card)
    }
  })
  console.log(chunkArr)
  return chunkArr
}

const Cards = () => {
  const { state: cards } = useContext(Context)
  // const cardsInColumns = useColumns(cards)
  return (
    <>
      {cards &&
        columnChunker(calcColumns(), cards).map((column, index) => (
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
