import React, { Component } from 'react'

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

const reducer = ({ type, payload }) => {
  switch (type) {
    case 'DELETE_CARD':
      return ({ cards }) => {
        return { cards: cards.filter(({ cardId }) => cardId !== payload.id) }
      }

    case 'CHECK_TASK':
      return ({ cards }) => {
        let { card } = payload
        card.tasks = card.tasks.map(task => {
          return task.taskId === payload.taskId ? { ...task, checked: !task.checked } : task
        })
        return { cards: cards.map(c => (c.cardId === card.cardId ? card : c)) }
      }

    case 'DELETE_TASK':
      return ({ cards }) => {
        let { card } = payload
        card.tasks = card.tasks.filter(task => {
          return task.taskId !== payload.taskId
        })
        return { cards: cards.map(c => (c.cardId === card.cardId ? card : c)) }
      }

    case 'UPDATE_TASK':
      return ({ cards }) => {
        let { card } = payload
        card.tasks = card.tasks.map(task => {
          return task.taskId === payload.taskId ? { ...task, text: payload.textContent } : task
        })
        return { cards: cards.map(c => (c.cardId === card.cardId ? card : c)) }
      }
    default:
      return ({ cards }) => cards
  }
}

class ContextProvider extends Component {
  state = {
    cards: [],
    dispatch: action => this.setState(reducer(action))
  }

  componentDidMount() {
    if (localStorage.getItem('cards') !== null) {
      console.log('cards in storage')
      this.setState(JSON.parse(localStorage.getItem('cards')))
    } else {
      this.setState(defaultCards)
    }
  }

  componentDidUpdate() {
    // console.log(this.state.cards)
    if (localStorage.getItem('cards') !== undefined) {
      // console.log('updating storage')
      localStorage.setItem('cards', JSON.stringify({ cards: this.state.cards }))
    }
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { ContextProvider, Consumer }
