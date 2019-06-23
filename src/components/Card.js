import React from 'react'

import CardHeader from './CardHeader'
import CardTask from './CardTask'
import AddTask from './AddTask'

const Card = ({ card }) => {
  return (
    <div className="column">
      <div className="card" style={{ backgroundColor: card.color }}>
        <CardHeader card={card} />
        <div className="card-body">
          {card.tasks.map(task => (
            <CardTask key={task.taskId} task={task} card={card} />
          ))}
          <AddTask card={card} />
        </div>
      </div>
    </div>
  )
}

export default Card
