import React from 'react'
import { Consumer } from '../context'

const AddTask = ({ card }) => (
  <Consumer>
    {({ dispatch, ADD_TASK }) => (
      <div className="add-task">
        <span className="icon">
          <i className="fas fa-plus" onClick={() => dispatch(ADD_TASK({ card }))} />
        </span>
      </div>
    )}
  </Consumer>
)

export default AddTask
