import React from 'react'
import { Consumer } from '../context'
import CardTaskText from './CardTaskText'

const CardTask = ({ task: { taskId, text, checked }, card }) => {
  return (
    <Consumer>
      {({ dispatch, CHECK_TASK, UPDATE_TASK, DELETE_TASK, ADD_TASK }) => {
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
      }}
    </Consumer>
  )
}

export default CardTask
