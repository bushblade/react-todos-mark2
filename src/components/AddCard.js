import React, { useContext } from 'react'
import { Context } from '../context'

const AddCard = () => {
  const { addCard } = useContext(Context)
  return (
    <button className="add-card-btn" onClick={addCard}>
      Add Card
    </button>
  )
}
export default AddCard
