import React from 'react'
import { ContextProvider } from './context'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'

import Cards from './components/Cards'

const App = () => {
  return (
    <ContextProvider>
      <div className="App">
        <Cards />
      </div>
    </ContextProvider>
  )
}

export default App
