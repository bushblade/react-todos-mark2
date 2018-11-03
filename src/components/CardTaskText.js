import React, { Component } from 'react'

export default class CardTaskText extends Component {
  componentDidMount() {
    if (this.props.text.length === 0) {
      this.refs[`task-text${this.props.taskId}`].focus()
    }
  }

  render() {
    const { dispatch, UPDATE_TASK, taskId, text, checked, card, ADD_TASK } = this.props
    return (
      <p
        className={`card-task-text ${checked ? 'checked' : ''}`}
        contentEditable
        suppressContentEditableWarning
        ref={`task-text${taskId}`}
        onBlur={({ target: { textContent } }) => {
          dispatch(UPDATE_TASK({ card, taskId, textContent }))
          this.refs[`task-text${taskId}`].classList.remove('selected')
        }}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            e.preventDefault()
            this.refs[`task-text${taskId}`].blur()
            dispatch(ADD_TASK({ card }))
          }
        }}
        onFocus={() => {
          this.refs[`task-text${taskId}`].classList.add('selected')
        }}>
        {text}
      </p>
    )
  }
}
