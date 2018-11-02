import React, { Component } from 'react'

export default class CardTaskText extends Component {
  render() {
    const { dispatch, UPDATE_TASK, taskId, text, checked, card } = this.props
    return (
      <p
        className={`card-task-text ${checked ? 'checked' : ''}`}
        contentEditable
        suppressContentEditableWarning
        ref={`task-text${taskId}`}
        onBlur={({ target: { textContent } }) => {
          dispatch(UPDATE_TASK({ card, taskId, textContent }))
          taskText().classList.remove('selected')
        }}
        onKeyDown={({ keyCode }) => {
          if (keyCode === 13) {
            taskText().blur()
          }
        }}
        onFocus={() => {
          taskText().classList.add('selected')
        }}>
        {text}
      </p>
    )
  }
}
