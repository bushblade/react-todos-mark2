import React from 'react'
import { Consumer } from '../context'

const CardTask = ({ task: { taskId, text, checked }, card }) => {
  return (
    <Consumer>
      {({ dispatch, CHECK_TASK, UPDATE_TASK, DELETE_TASK }) => {
        const docId = `task-text${taskId}`
        const taskText = () => document.getElementById(docId)
        return (
          <div className="card-task">
            <i
              className={`far ${checked ? 'fa-check-square' : 'fa-square'}`}
              onClick={() => {
                dispatch(CHECK_TASK({ card, taskId }))
              }}
            />

            <p
              className={`card-task-text ${checked ? 'checked' : ''}`}
              contentEditable
              suppressContentEditableWarning
              id={docId}
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

            <i
              className="fas fa-times"
              onClick={() => {
                dispatch(DELETE_TASK({ card, taskId }))
              }}
            />
          </div>
        )
      }}
    </Consumer>
  )
}

export default CardTask
