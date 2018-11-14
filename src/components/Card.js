import React from 'react'

import CardHeader from './CardHeader'
import CardTask from './CardTask'
import AddTask from './AddTask'

const Card = ({ card, store }) => {
  return (
    <div className="card" style={{ backgroundColor: card.color }}>
      <CardHeader card={card} store={store} />
      <div className="card-body">
        {card.tasks.map(task => (
          <CardTask store={store} key={task.taskId} task={task} card={card} />
        ))}
        <AddTask store={store} card={card} />
      </div>
    </div>
  )
}

export default Card
