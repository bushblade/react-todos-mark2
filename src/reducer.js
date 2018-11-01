const taskReducer = card => ({ cards }) => {
  return { cards: cards.map(c => (c.cardId === card.cardId ? card : c)) }
}

const reducer = ({ type, payload }) => {
  let card
  switch (type) {
    case 'DELETE_CARD':
      return ({ cards }) => {
        return { cards: cards.filter(({ cardId }) => cardId !== payload.id) }
      }

    case 'CHECK_TASK':
      card = payload.card
      card.tasks = card.tasks.map(task => {
        return task.taskId === payload.taskId ? { ...task, checked: !task.checked } : task
      })
      return taskReducer(card)

    case 'DELETE_TASK':
      card = payload.card
      card.tasks = card.tasks.filter(task => {
        return task.taskId !== payload.taskId
      })
      return taskReducer(card)

    case 'UPDATE_TASK':
      card = payload.card
      card.tasks = card.tasks.map(task => {
        return task.taskId === payload.taskId ? { ...task, text: payload.textContent } : task
      })
      return taskReducer(card)
    default:
      return ({ cards }) => cards
  }
}

export default reducer
