import React, { Fragment } from 'react'

import { Transition, animated } from 'react-spring'

import Card from './Card'
import AddCard from './AddCard'

const Cards = ({ store }) => {
  return (
    <Fragment>
      <Transition
        native
        keys={item => item.cardId}
        items={store.cards}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
        trail={100}>
        {item => props => (
          <animated.div className="column" style={props}>
            <Card card={item} store={store} />
          </animated.div>
        )}
      </Transition>
      <AddCard store={store} />
    </Fragment>
  )
}

export default Cards
