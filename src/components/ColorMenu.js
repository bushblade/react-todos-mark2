import React from 'react'

const ColorMenu = ({ colors, card, dispatch, CHANGE_COLOR }) => {
  return (
    <div className="color-picker-container">
      {colors.map(color => (
        <span
          className="color-pick-icon-container"
          key={color}
          onClick={() => dispatch(CHANGE_COLOR({ card, color }))}>
          <span className="color-pick-icon" style={{ backgroundColor: color }} />
        </span>
      ))}
    </div>
  )
}

export default ColorMenu
