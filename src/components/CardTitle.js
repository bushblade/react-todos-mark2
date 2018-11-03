import React, { Component } from 'react'

export default class CardTitle extends Component {
  render() {
    const { dispatch, UPDATE_TITLE, card } = this.props

    return (
      <p
        className="card-title"
        ref={`card-title${card.cardId}`}
        contentEditable
        suppressContentEditableWarning
        onBlur={({ target: { textContent } }) => {
          dispatch(UPDATE_TITLE({ card, textContent }))
        }}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            e.preventDefault()
            this.refs[`card-title${card.cardId}`].blur()
          }
        }}>
        {card.title}
      </p>
    )
  }
}
