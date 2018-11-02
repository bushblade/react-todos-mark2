import React from 'react'
import { Consumer } from '../context'

const CardHeader = ({ card }) => {
  return (
    <Consumer>
      {({ dispatch, DELETE_CARD }) => (
        <div className="card-header">
          <p className="card-title">{card.title}</p>
          <i className="fas fa-chevron-down" />
          <i
            className="fas fa-trash"
            onClick={() => {
              dispatch(DELETE_CARD({ id: card.cardId }))
            }}
          />
        </div>
      )}
    </Consumer>
  )
}

export default CardHeader
