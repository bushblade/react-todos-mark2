import React from 'react'
import { Consumer } from '../context'

const CardHeader = ({ card }) => {
  return (
    <Consumer>
      {({ dispatch }) => (
        <div className="card-header">
          <p className="card-title">{card.title}</p>
          <i className="fas fa-chevron-down" />
          <i
            className="fas fa-trash"
            onClick={() => {
              dispatch({ type: 'DELETE_CARD', payload: { id: card.cardId } })
            }}
          />
        </div>
      )}
    </Consumer>
  )
}

export default CardHeader
