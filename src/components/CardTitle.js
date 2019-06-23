import React, { useRef, useState, useContext, useEffect } from 'react'
import { Context } from '../context'

export default ({ card }) => {
  const titleRef = useRef(card.cardId)
  const [selected, setSelected] = useState(false)
  const { updateTitle, addTask } = useContext(Context)

  useEffect(() => {
    if (card.title.length === 0) {
      titleRef.current.focus()
    }
  }, [])

  return (
    <p
      className={`card-title ${selected ? 'selected' : ''}`}
      ref={titleRef}
      contentEditable
      suppressContentEditableWarning
      onFocus={() => setSelected(true)}
      onBlur={({ target: { textContent } }) => {
        if (textContent !== card.title) {
          updateTitle({ cardId: card.cardId, newTitle: textContent })
        }
        setSelected(false)
      }}
      onKeyDown={e => {
        if (e.keyCode === 13) {
          e.preventDefault()
          titleRef.current.blur()
          if (card.tasks.length === 0) {
            addTask({ cardId: card.cardId })
          }
        }
      }}
    >
      {card.title}
    </p>
  )
}
