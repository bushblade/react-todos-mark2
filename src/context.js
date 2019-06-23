import React, { useEffect, useReducer, createContext } from 'react'
import reducer from './reducer'

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
  const getFromLS = () => {
    if (localStorage.getItem('cards') !== null) {
      return JSON.parse(localStorage.getItem('cards'))
    } else {
      return []
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
    if (localStorage.getItem('cards') !== undefined) {
      localStorage.setItem('cards', JSON.stringify(state))
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
