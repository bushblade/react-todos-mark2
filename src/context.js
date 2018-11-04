import React, { Component } from 'react'
import contextActions from './contextActions'
import defaultCards from './defaultCards'

const { Provider, Consumer } = React.createContext()

class CardProvider extends Component {
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
    return <Provider value={{ ...this.state, ...contextActions }}>{this.props.children}</Provider>
  }
}

export { CardProvider, Consumer }
