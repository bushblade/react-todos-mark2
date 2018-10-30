import React from 'react'
import { ContextProvider } from './context'
import './App.css'
import HelloWorld from './components/HelloWorld'

const App = () => {
  return (
    <ContextProvider>
      <div className="App"> </div>
    </ContextProvider>
  )
}

export default App
