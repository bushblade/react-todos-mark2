import React, { useContext, useEffect, useRef, useState } from 'react'
import { Context } from '../context'

export default ({ taskId, text, checked, card }) => {
  const [focused, setFocused] = useState(false)
  const taskRef = useRef(taskId)
  const { updateTask, addTask } = useContext(Context)

  useEffect(() => {
    if (text.length === 0) {
      setFocused(true)
      taskRef.current.focus()
    }
  }, [])

  return (
    <p
      className={`card-task-text ${checked ? 'checked' : ''} ${focused ? 'selected' : ''}`}
      contentEditable
      suppressContentEditableWarning
      ref={taskRef}
      onBlur={({ target: { textContent } }) => {
        updateTask({ cardId: card.cardId, taskId, text: textContent })
        setFocused(false)
      }}
      onKeyDown={e => {
        if (e.keyCode === 13) {
          e.preventDefault()
          taskRef.current.blur()
          addTask({ cardId: card.cardId })
        }
      }}
      onFocus={() => setFocused(true)}
    >
      {text}
    </p>
  )
}
