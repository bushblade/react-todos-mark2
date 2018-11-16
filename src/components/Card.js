import React from 'react'

import { Transition, animated } from 'react-spring'

import CardHeader from './CardHeader'
import CardTask from './CardTask'
import AddTask from './AddTask'

const Card = ({ card, store }) => {
  return (
    <div className="card" style={{ backgroundColor: card.color }}>
      <CardHeader card={card} store={store} />
      <div className="card-body">
        <Transition
          items={card.tasks}
          keys={task => task.taskId}
          from={{ height: 0, opacity: 0 }}
          enter={{ height: 'auto', opacity: 1 }}
          leave={{ height: 0, opacity: 0 }}
          trail={100}>
          {task => props => (
            <animated.div style={props}>
              <CardTask store={store} key={task.taskId} task={task} card={card} />
            </animated.div>
          )}
        </Transition>
        <AddTask store={store} card={card} />
      </div>
    </div>
  )
}

export default Card
