import React, { Component } from 'react'
import { ContextProvider } from './context'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  render() {
    return (
      <ContextProvider>
        <div className="App">
          <HelloWorld />
        </div>
      </ContextProvider>
    )
  }
}

export default App
