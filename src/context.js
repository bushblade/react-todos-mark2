import React, { Component } from 'react'
// import reducer from './reducer'
import contextActions from './contextActions'

const { Provider, Consumer } = React.createContext()

const defaultCards = {
  cards: [
    {
      cardId: 1,
      title: 'default',
      color: 'WhiteSmoke',
      tasks: [
        {
          taskId: 1,
          text: 'some thing to do',
          checked: false
        },
        {
          taskId: 2,
          text: 'some thing else to do',
          checked: false
        }
      ]
    }
  ]
}

class ContextProvider extends Component {
  state = {
    cards: []
    // dispatch: action => this.setState(reducer(action))
  }
  actions = {
    dispatch: action => this.setState(action),
    ...contextActions
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
    return <Provider value={{ ...this.state, ...this.actions }}>{this.props.children}</Provider>
  }
}

export { ContextProvider, Consumer }
