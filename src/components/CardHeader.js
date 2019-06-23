import React, { useContext } from 'react'
import { Context } from '../context'
import CardTitle from './CardTitle'
import ColorPicker from './ColorPicker'

const CardHeader = ({ card }) => {
  const { deleteCard } = useContext(Context)
  return (
    <div className="card-header">
      <CardTitle card={card} />
      <ColorPicker card={card} />
      <span className="icon has-tooltip" onClick={() => deleteCard({ id: card.cardId })}>
        <i className="fas fa-trash" />
        <span className="tooltip">Delete card</span>
      </span>
    </div>
  )
}

export default CardHeader
