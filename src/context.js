import React, { useEffect, useReducer, createContext } from 'react'
import contextActions from './actions'
import reducer from './reducer'

export const Context = createContext()

const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [])

  // useEffect(() => {
  //   if (localStorage.getItem('cards') !== null) {
  //     let fromStorage = JSON.parse(localStorage.getItem('cards'))
  //     fromStorage.cards.length > 0 ? this.setState(fromStorage) : this.setState(defaultCards)
  //   } else {
  //     this.setState(defaultCards)
  //   }
  // }, [])

  // componentDidUpdate() {
  //   if (localStorage.getItem('cards') !== undefined) {
  //     localStorage.setItem('cards', JSON.stringify({ cards: this.state.cards }))
  //   }
  // }

  return <Context.Provider value={{ cards: state, dispatch }}>{props.children}</Context.Provider>
}

export default CardProvider
