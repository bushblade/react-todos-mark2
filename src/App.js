import React, { Component } from 'react'
import posed, { PosedGroup } from 'react-pose'

import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'

import defaultCards from './defaultCards'

import Card from './components/Card'
import AddCard from './components/AddCard'

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
          {cards.map(card => (
            <Card card={card} key={card.cardId} store={this.state} />
          ))}
          <AddCard store={this.state} />
        </div>
      </div>
    )
  }
}

export default App
