import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../context'
import { colors } from '../defaultCards'

export default ({ card }) => {
  const { changeColor } = useContext(Context)
  const [showMenu, setMenu] = useState(false)

  const toggleMenu = () => setMenu(!showMenu)

  const closeDropdown = e => {
    if (!e.target.classList.contains('color-pick')) {
      setMenu(false)
      document.removeEventListener('click', closeDropdown)
    }
  }

  useEffect(() => {
    if (showMenu) {
      document.addEventListener('click', closeDropdown)
    }
  }, [showMenu])

  return (
    <span
      className={`icon color-pick has-tooltip ${showMenu ? 'active' : ''}`}
      onClick={toggleMenu}
    >
      <i className="fas fa-chevron-down" />
      <div className="color-picker" style={{ backgroundColor: card.color }}>
        <div className="color-picker-container">
          {colors.map(color => (
            <span
              className="color-pick-icon-container"
              key={color}
              onClick={() => changeColor({ cardId: card.cardId, newColor: color })}
            >
              <span className="color-pick-icon" style={{ backgroundColor: color }} />
            </span>
          ))}
        </div>
      </div>
      <span className="tooltip">Change Colour</span>
    </span>
  )
}
