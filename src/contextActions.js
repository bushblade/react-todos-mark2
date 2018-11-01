const taskReducer = card => ({ cards }) => {
  return { cards: cards.map(c => (c.cardId === card.cardId ? card : c)) }
}

export default {
  DELETE_CARD: ({ id }) => ({ cards }) => {
    return { cards: cards.filter(({ cardId }) => cardId !== id) }
  },

  CHECK_TASK: ({ card, taskId }) => {
    card.tasks = card.tasks.map(task => {
      return task.taskId === taskId ? { ...task, checked: !task.checked } : task
    })
    return taskReducer(card)
  },

  DELETE_TASK: ({ card, taskId }) => {
    card.tasks = card.tasks.filter(task => {
      return task.taskId !== taskId
    })
    return taskReducer(card)
  },

  UPDATE_TASK: ({ card, taskId, textContent }) => {
    card.tasks = card.tasks.map(task => {
      return task.taskId === taskId ? { ...task, textContent } : task
    })
    return taskReducer(card)
  }
}
