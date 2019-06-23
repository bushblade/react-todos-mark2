import uuid from 'uuid'
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

const taskReducer = (state, cardId) => func => {
  return state.map(card => {
    if (card.cardId === cardId) {
      return { ...card, tasks: func(card.tasks) }
    } else {
      return card
    }
  })
}

export default (state, { type, payload }) => {
  const taskOp = taskReducer(state, payload.cardId)
  switch (type) {
    // delete card
    case DELETE_CARD:
      return state.filter(card => card.cardId !== payload.id)

    // toggle check a task
    case CHECK_TASK:
      return taskOp(tasks =>
        tasks.map(t => (t.taskId === payload.taskId ? { ...t, checked: !t.checked } : t))
      )

    // delete a task
    case DELETE_TASK:
      return taskOp(tasks => tasks.filter(t => t.taskId !== payload.taskId))

    // update a task
    case UPDATE_TASK:
      return taskOp(tasks =>
        tasks.map(t => (payload.taskId === t.taskId ? { ...t, text: payload.text } : t))
      )

    // add a task to a card
    case ADD_TASK:
      return taskOp(tasks => [
        ...tasks,
        {
          taskId: uuid(),
          text: '',
          checked: false
        }
      ])

    // update title
    case UPDATE_TITLE:
      return state.map(card => {
        if (card.cardId === payload.cardId) {
          return {
            ...card,
            title: payload.newTitle
          }
        } else {
          return card
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
        } else {
          return card
        }
      })

    // add a new card
    case ADD_CARD:
      return [
        ...state,
        {
          cardId: uuid(),
          title: '',
          color: 'WhiteSmoke',
          tasks: []
        }
      ]
    default:
      return state
  }
}
