import React, { useContext } from 'react'
import { Context } from '../context'

const AddTask = ({ card }) => {
  const { addTask } = useContext(Context)
  return (
    <div className="add-task">
      <span className="icon has-tooltip">
        <i className="fas fa-plus" onClick={() => addTask({ cardId: card.cardId })} />
        <span className="tooltip tooltip-right">Add Task</span>
      </span>
    </div>
  )
}

export default AddTask
