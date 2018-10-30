import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'DELETE_CONTACT':
      return {}
    default:
      return state
  }
}

class ContextProvider extends Component {
  state = {
    cards: [
      {
        cardId: 1,
        title: 'default',
        color: '',
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
    dispatch: action => this.setState(state => reducer(state, action))
  }
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { ContextProvider, Consumer }
