import React from 'react'
import { Consumer } from '../context'
import CardTitle from './CardTitle'

const CardHeader = ({ card }) => {
  return (
    <Consumer>
      {context => {
        const { dispatch, DELETE_CARD, UPDATE_TITLE } = context
        return (
          <div className="card-header">
            <CardTitle card={card} dispatch={dispatch} UPDATE_TITLE={UPDATE_TITLE} />
            <span className="icon">
              <i className="fas fa-chevron-down" />
            </span>
            <span
              className="icon"
              onClick={() => {
                dispatch(DELETE_CARD({ id: card.cardId }))
              }}>
              <i className="fas fa-trash" />
            </span>
          </div>
        )
      }}
    </Consumer>
  )
}

export default CardHeader
