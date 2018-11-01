const reducer = ({ type, payload }) => {
  switch (type) {
    case 'DELETE_CARD':
      return ({ cards }) => {
        return { cards: cards.filter(({ cardId }) => cardId !== payload.id) }
      }

    case 'CHECK_TASK':
      return ({ cards }) => {
        let { card } = payload
        card.tasks = card.tasks.map(task => {
          return task.taskId === payload.taskId ? { ...task, checked: !task.checked } : task
        })
        return { cards: cards.map(c => (c.cardId === card.cardId ? card : c)) }
      }

    case 'DELETE_TASK':
      return ({ cards }) => {
        let { card } = payload
        card.tasks = card.tasks.filter(task => {
          return task.taskId !== payload.taskId
        })
        return { cards: cards.map(c => (c.cardId === card.cardId ? card : c)) }
      }

    case 'UPDATE_TASK':
      return ({ cards }) => {
        let { card } = payload
        card.tasks = card.tasks.map(task => {
          return task.taskId === payload.taskId ? { ...task, text: payload.textContent } : task
        })
        return { cards: cards.map(c => (c.cardId === card.cardId ? card : c)) }
      }
    default:
      return ({ cards }) => cards
  }
}

export default reducer
