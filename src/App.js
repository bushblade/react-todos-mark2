import React, { Component } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'
import defaultCards from './defaultCards'

import Cards from './components/Cards'

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
    return (
      <div className="App">
        <div className="columns">
          <Cards store={{ ...this.state }} />
        </div>
      </div>
    )
  }
}

export default App
