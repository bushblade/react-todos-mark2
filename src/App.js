import React, { Component } from 'react'
import posed, { PoseGroup } from 'react-pose'

import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'

import defaultCards from './defaultCards'

import Card from './components/Card'
import AddCard from './components/AddCard'

const Column = posed.div({
  preenter: {
    opacity: 0
  },
  enter: { opacity: 1, delay: ({ delay }) => delay * 100 },
  exit: { opacity: 0 }
})

class App extends Component {
  state = {
    cards: [],
    dispatch: action => this.setState(action)
  }
  componentDidMount() {
    if (localStorage.getItem('cards') !== null) {
      let fromStorage = JSON.parse(localStorage.getItem('cards'))
      fromStorage.cards.length > 0 ? this.setState(fromStorage) : this.setState(defaultCards)
    } else {
      this.setState(defaultCards)
    }
  }

  componentDidUpdate() {
    if (localStorage.getItem('cards') !== undefined) {
      localStorage.setItem('cards', JSON.stringify({ cards: this.state.cards }))
    }
  }
  render() {
    const { cards } = this.state
    return (
      <div className="App">
        <div className="columns">
          <PoseGroup animateOnMount={true} preEnterPose={'preenter'}>
            {cards.map((card, i) => {
              const delay = card.title.length === 0 && card.tasks.length === 1 ? 0 : i
              return (
                <Column className="column" key={card.cardId} delay={delay}>
                  <Card card={card} store={this.state} />
                </Column>
              )
            })}
          </PoseGroup>
          <AddCard store={this.state} />
        </div>
      </div>
    )
  }
}

export default App
