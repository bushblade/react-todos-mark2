import React from 'react'
import { CardProvider } from './context'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'

import Cards from './components/Cards'

const App = () => {
  return (
    <CardProvider>
      <div className="App">
        <Cards />
      </div>
    </CardProvider>
  )
}

export default App
