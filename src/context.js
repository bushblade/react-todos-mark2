import React, { useEffect, useReducer, createContext } from 'react'
import reducer from './reducer'
import defaultCards from './defaultCards'

import {
  DELETE_CARD,
  CHECK_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  ADD_TASK,
  UPDATE_TITLE,
  CHANGE_COLOR,
  ADD_CARD
} from './types'

export const Context = createContext()

const CardProvider = ({ children }) => {
  // clean up from old cards
  ;['cards', 'todocards'].forEach(s => {
    if (localStorage.getItem(s) !== null) {
      localStorage.removeItem(s)
    }
  })
  const getFromLS = () => {
    if (localStorage.getItem('react-todo-cards') !== null) {
      return JSON.parse(localStorage.getItem('react-todo-cards'))
    } else {
      return defaultCards
    }
  }

  const [state, dispatch] = useReducer(reducer, getFromLS())

  const [
    deleteCard,
    checkTask,
    deleteTask,
    updateTask,
    addTask,
    updateTitle,
    changeColor,
    addCard
  ] = [
    DELETE_CARD,
    CHECK_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    ADD_TASK,
    UPDATE_TITLE,
    CHANGE_COLOR,
    ADD_CARD
  ].map(type => payload => dispatch({ type, payload }))

  useEffect(() => {
    if (localStorage.getItem('react-todo-cards') !== undefined) {
      localStorage.setItem('react-todo-cards', JSON.stringify(state))
    }
  }, [state])

  return (
    <Context.Provider
      value={{
        state,
        deleteCard,
        checkTask,
        deleteTask,
        updateTask,
        addTask,
        updateTitle,
        changeColor,
        addCard
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default CardProvider
