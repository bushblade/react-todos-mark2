import React from 'react'
import actions from '../actions'

const AddTask = ({ card, store }) => (
  <div className="add-task">
    <span className="icon has-tooltip">
      <i className="fas fa-plus" onClick={() => store.dispatch(actions.ADD_TASK({ card }))} />
      <span className="tooltip tooltip-right">Add Task</span>
    </span>
  </div>
)

export default AddTask
