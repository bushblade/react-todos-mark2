import React from 'react'
import CardTitle from './CardTitle'
import ColorPicker from './ColorPicker'
import actions from '../actions'

const CardHeader = ({ card, store }) => {
  return (
    <div className="card-header">
      <CardTitle card={card} store={store} />
      <ColorPicker card={card} store={store} />
      <span
        className="icon has-tooltip"
        onClick={() => {
          store.dispatch(actions.DELETE_CARD({ id: card.cardId }))
        }}>
        <i className="fas fa-trash" />
        <span className="tooltip">Delete card</span>
      </span>
    </div>
  )
}

export default CardHeader
