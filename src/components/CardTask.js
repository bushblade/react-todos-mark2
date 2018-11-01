import React from 'react'
import { Consumer } from '../context'

const CardTask = ({ task: { taskId, text, checked }, card }) => {
  return (
    <Consumer>
      {context => {
        const { dispatch } = context
        return (
          <div className="card-task">
            <i
              className={`far ${checked ? 'fa-check-square' : 'fa-square'}`}
              onClick={() => {
                dispatch({ type: 'CHECK_TASK', payload: { card, taskId } })
              }}
            />
            <p className={`card-task-text ${checked ? 'checked' : ''}`}>{text}</p>
            <i
              className="fas fa-times"
              onClick={() => {
                dispatch({ type: 'DELETE_TASK', payload: { card, taskId } })
              }}
            />
          </div>
        )
      }}
    </Consumer>
  )
}

export default CardTask
