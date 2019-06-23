import React, { useContext } from 'react'
import { Context } from '../context'

const AddTask = ({ card: { cardId } }) => {
  const { addTask } = useContext(Context)
  return (
    <div className="add-task">
      <span className="icon has-tooltip">
        <i className="fas fa-plus" onClick={() => addTask({ cardId })} />
        <span className="tooltip tooltip-right">Add Task</span>
      </span>
    </div>
  )
}

export default AddTask
