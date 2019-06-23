import {
  DELETE_CARD,
  CHECK_TASK,
  DELETE_TASK,
  DELETE_CARD,
  UPDATE_TASK,
  ADD_TASK,
  UPDATE_TITLE,
  CHANGE_COLOR,
  ADD_CARD
} from './types'

export default (state, { type, payload }) => {
  switch (type) {
    // delete card
    case DELETE_CARD:
      return state.filter(card => card.cardId !== payload.id)
    // toggle check a task
    case CHECK_TASK:
      return state.map(card => {
        if (card.id === payload.cardId) {
          return {
            ...card,
            tasks: card.tasks.map(t =>
              t.taskId === payload.taskId ? { ...t, checked: !t.checked } : t
            )
          }
        } else {
          return card
        }
      })
    // delete a task
    case DELETE_TASK:
      return state.map(card => {
        if (card.cardId === payload.cardId) {
          return {
            ...card,
            tasks: card.tasks.filter(t => t !== payload.taskId)
          }
        } else {
          return card
        }
      })
    // delete card
    case DELETE_CARD:
      return state.filter(card => card.cardId !== payload.cardId)
    // update a task
    case UPDATE_TASK:
      return state.map(card => {
        if (card.cardId === payload.cardId) {
          return {
            ...card,
            tasks: card.tasks.map(t =>
              payload.taskId === t.taskId ? { ...t, text: payload.text } : t
            )
          }
        } else {
          return card
        }
      })
    // add a task to a card
    case ADD_TASK:
      return state.map(card => {
        if (card.cardId === payload.cardId) {
          return {
            ...card,
            tasks: [...card.tasks, payload.newTask]
          }
        } else {
          return card
        }
      })
    // update title
    case UPDATE_TITLE:
      return state.map(card => {
        if (card.cardId === payload.cardId) {
          return {
            ...card,
            title: payload.newTitle
          }
        }
      })
    // change the card color
    case CHANGE_COLOR:
      return state.map(card => {
        if (card.cardId === payload.cardId) {
          return {
            ...card,
            color: payload.newColor
          }
        }
      })
    // add a new card
    case ADD_CARD:
      return [...state, payload.newCard]
  }
}
