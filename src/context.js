import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

class ContextProvider extends Component {
  state = {
    test: 'Hello World'
  }
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { ContextProvider, Consumer }
