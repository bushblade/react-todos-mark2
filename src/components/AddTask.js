import React from 'react'
import actions from '../actions'

const { ADD_TASK } = actions

const AddTask = ({ card, store: { dispatch } }) => (
  <div className="add-task">
    <span className="icon has-tooltip" onClick={() => dispatch(ADD_TASK({ card }))}>
      <i className="fas fa-plus" />
      <span className="tooltip tooltip-right">Add Task</span>
    </span>
  </div>
)

export default AddTask
