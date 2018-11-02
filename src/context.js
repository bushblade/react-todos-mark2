import React, { Component } from 'react'
import contextActions from './contextActions'
import uuid from 'uuid'

const { Provider, Consumer } = React.createContext()

const defaultCards = {
  cards: [
    {
      cardId: uuid(),
      title: 'default',
      color: 'WhiteSmoke',
      tasks: [
        {
          taskId: uuid(),
          text: 'some thing to do',
          checked: false
        },
        {
          taskId: uuid(),
          text: 'some thing else to do',
          checked: false
        }
      ]
    }
  ]
}

class ContextProvider extends Component {
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

export { ContextProvider, Consumer }
