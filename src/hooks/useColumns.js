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

const useColumns = () => {
  const [columns, setColumns] = useState(calcColumns())

  useEffect(() => {
    const resizeEvent = e => setColumns(calcColumns())
    window.addEventListener('resize', resizeEvent)
    return () => window.removeEventListener(resizeEvent)
  }, [])
  return columns
}

export default useColumns
