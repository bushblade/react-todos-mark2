import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

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
        return {
          cards: cards.map(c => (c.cardId === payload.cardId ? card : c))
        }
      }
    case 'DELETE_TASK':
      return ({ cards }) => {
        let { card } = payload
        card.tasks = card.tasks.filter(task => {
          return task.taskId !== payload.taskId
        })

        return { cards: cards.map(c => (c.cardId === payload.cardId ? card : c)) }
      }
    default:
      return ({ cards }) => cards
  }
}

class ContextProvider extends Component {
  state = {
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
    ],
    dispatch: action => this.setState(reducer(action))
  }
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { ContextProvider, Consumer }
