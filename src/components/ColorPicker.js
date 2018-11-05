import React, { Component } from 'react'
import actions from '../actions'

export default class ColorPicker extends Component {
  state = {
    showMenu: false,
    colors: ['Thistle', 'PaleTurquoise', 'LemonChiffon', 'NavajoWhite', 'WhiteSmoke', 'LightGreen']
  }

  toggleMenu = () =>
    this.setState(({ showMenu }) => {
      return { showMenu: !showMenu }
    })

  closeDropdown = e => {
    if (!e.target.classList.contains('color-pick')) {
      this.setState({ showMenu: false })
      document.removeEventListener('click', this.closeDropdown)
    }
  }

  render() {
    const { card } = this.props
    const { dispatch } = this.props.store
    const { CHANGE_COLOR } = actions
    const { state: { showMenu, colors }, toggleMenu, closeDropdown } = this // prettier-ignore

    return (
      <span
        className={`icon color-pick has-tooltip ${showMenu ? 'active' : ''}`}
        onClick={() => {
          toggleMenu()
          document.addEventListener('click', closeDropdown)
        }}>
        <i className="fas fa-chevron-down" />
        <div className="color-picker" style={{ backgroundColor: card.color }}>
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
        </div>
        <span className="tooltip">Change Colour</span>
      </span>
    )
  }
}
