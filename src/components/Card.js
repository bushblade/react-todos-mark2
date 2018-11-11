import React from 'react'
import posed, { PoseGroup } from 'react-pose'

import CardHeader from './CardHeader'
import CardTask from './CardTask'
import AddTask from './AddTask'

const TaskBox = posed.div({
  enter: { height: '100%', opacity: 1 },
  exit: { height: 0, opacity: 0 }
})

const Card = ({ card, store }) => {
  return (
    <div className="card" style={{ backgroundColor: card.color }}>
      <CardHeader card={card} store={store} />
      <div className="card-body">
        <PoseGroup flipMove={false}>
          {card.tasks.map(task => (
            <TaskBox key={task.taskId}>
              <CardTask store={store} task={task} card={card} />
            </TaskBox>
          ))}
        </PoseGroup>
        <AddTask store={store} card={card} />
      </div>
    </div>
  )
}

export default Card
