import React from 'react'
import { Consumer } from '../context'

const AddTask = ({ card }) => (
  <Consumer>
    {({ dispatch, ADD_TASK }) => (
      <div className="add-task">
        <button onClick={() => dispatch(ADD_TASK({ card }))}>Add Task</button>
      </div>
    )}
  </Consumer>
)

export default AddTask
