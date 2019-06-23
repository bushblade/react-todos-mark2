import uuid from 'uuid'

export default [
  {
    cardId: uuid(),
    title: 'To do app built with ReactJS',
    color: 'WhiteSmoke',
    tasks: [
      {
        taskId: uuid(),
        text: 'Built using React Context API',
        checked: false
      },
      {
        taskId: uuid(),
        text: '...and hooks!',
        checked: false
      },
      {
        taskId: uuid(),
        text: 'this card is the default colour',
        checked: false
      },
      {
        taskId: uuid(),
        text: 'this task is checked',
        checked: true
      }
    ]
  },
  {
    cardId: uuid(),
    title: 'Cards are stored in local storage',
    color: 'PaleTurquoise',
    tasks: [
      {
        taskId: uuid(),
        text: 'there is a dropdown to change colour',
        checked: false
      },
      {
        taskId: uuid(),
        text: 'vanilla CSS - no framework',
        checked: false
      },
      {
        taskId: uuid(),
        text: 'flexbox for responsive layout',
        checked: false
      },
      {
        taskId: uuid(),
        text: 'the X deletes a task ->',
        checked: false
      }
    ]
  },
  {
    cardId: uuid(),
    title: 'Click the button in the bottom right to add a to do card',
    color: 'LemonChiffon',
    tasks: [
      {
        taskId: uuid(),
        text: 'the trash can icon deletes a card',
        checked: false
      }
    ]
  }
]
