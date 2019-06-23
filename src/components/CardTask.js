import React, { useContext } from 'react'
import { Context } from '../context'
import CardTaskText from './CardTaskText'

const CardTask = ({ task: { taskId, text, checked }, card }) => {
  const { checkTask, deleteTask } = useContext(Context)
  return (
    <div className="card-task">
      <span className="icon" onClick={() => checkTask({ cardId: card.cardId, taskId })}>
        <i className={`far ${checked ? 'fa-check-square' : 'fa-square'}`} />
      </span>

      <CardTaskText taskId={taskId} text={text} checked={checked} card={card} />
      <span className="icon" onClick={() => deleteTask({ cardId: card.cardId, taskId })}>
        <i className="fas fa-times" />
      </span>
    </div>
  )
}

export default CardTask
