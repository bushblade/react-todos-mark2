import React from 'react'
import actions from '../actions'
import CardTaskText from './CardTaskText'

const CardTask = ({ card, store, task: { taskId, checked, text } }) => {
  const { dispatch } = store
  const { CHECK_TASK, UPDATE_TASK, DELETE_TASK, ADD_TASK } = actions

  return (
    <div className="card-task">
      <span
        className="icon"
        onClick={() => {
          dispatch(CHECK_TASK({ card, taskId }))
        }}>
        <i className={`far ${checked ? 'fa-check-square' : 'fa-square'}`} />
      </span>

      <CardTaskText
        taskId={taskId}
        text={text}
        checked={checked}
        card={card}
        dispatch={dispatch}
        UPDATE_TASK={UPDATE_TASK}
        ADD_TASK={ADD_TASK}
      />
      <span
        className="icon"
        onClick={() => {
          dispatch(DELETE_TASK({ card, taskId }))
        }}>
        <i className="fas fa-times" />
      </span>
    </div>
  )
}

export default CardTask
