import { useEffect, useState } from 'react'

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
      currentColumn = 0
      chunkArr[currentColumn].push(card)
    }
  })
  return chunkArr
}

const useColumns = cards => {
  const [chunkedColumns, setChunkedColumns] = useState(columnChunker(calcColumns(), cards))

  useEffect(() => {
    const resizeEvent = e => setChunkedColumns(columnChunker(calcColumns(), cards))
    window.addEventListener('resize', resizeEvent)
    return () => window.removeEventListener(resizeEvent)
  }, [])
  return chunkedColumns
}

export default useColumns
