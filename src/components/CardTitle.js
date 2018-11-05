import React, { Component } from 'react'
import actions from '../actions'

export default class CardTitle extends Component {
  componentDidMount() {
    const { title, cardId } = this.props.card
    if (title.length === 0) {
      this.refs[`card-title${cardId}`].focus()
    }
  }

  render() {
    const { store:{ dispatch }, card } = this.props // prettier-ignore
    const { UPDATE_TITLE } = actions

    return (
      <p
        className="card-title"
        ref={`card-title${card.cardId}`}
        contentEditable
        suppressContentEditableWarning
        onFocus={() => {
          this.refs[`card-title${card.cardId}`].classList.add('selected')
        }}
        onBlur={({ target: { textContent } }) => {
          dispatch(UPDATE_TITLE({ card, textContent }))
          this.refs[`card-title${card.cardId}`].classList.remove('selected')
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
