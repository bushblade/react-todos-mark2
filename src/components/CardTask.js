import React from 'react'
import actions from '../actions'
import CardTaskText from './CardTaskText'

const CardTask = ({ card, store, task }) => {
  const { taskId, checked } = task
  const { dispatch } = store
  const { CHECK_TASK, DELETE_TASK } = actions

  return (
    <div className="card-task">
      <span
        className="icon"
        onClick={() => {
          dispatch(CHECK_TASK({ card, taskId }))
        }}>
        <i className={`far ${checked ? 'fa-check-square' : 'fa-square'}`} />
      </span>

      <CardTaskText task={task} card={card} store={store} />
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
