import React from 'react'
import { Consumer } from '../context'

const AddTask = ({ card }) => (
  <Consumer>
    {({ dispatch, ADD_TASK }) => (
      <div className="add-task">
        <span className="icon has-tooltip">
          <i className="fas fa-plus" onClick={() => dispatch(ADD_TASK({ card }))} />
          <span className="tooltip tooltip-right">Add Task</span>
        </span>
      </div>
    )}
  </Consumer>
)

export default AddTask
