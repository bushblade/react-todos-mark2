import React from 'react'
import PropTypes from 'prop-types'

import CardHeader from './CardHeader'
import CardTask from './CardTask'

const Card = ({ card }) => {
  return (
    <div className="card" style={{ backgroundColor: card.color }}>
      <CardHeader card={card} />
      <div className="card-body">
        {card.tasks.map(task => (
          <CardTask key={task.taskId} task={task} card={card} />
        ))}
      </div>
    </div>
  )
}

const { object } = PropTypes

Card.propTypes = {
  card: object.isRequired
}

export default Card