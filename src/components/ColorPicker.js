import React, { Component } from 'react'
import actions from '../actions'

import { Transition } from 'react-spring'

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
        className="icon color-pick has-tooltip"
        onClick={() => {
          toggleMenu()
          document.addEventListener('click', closeDropdown)
        }}>
        <i className="fas fa-chevron-down" />
        <Transition
          items={showMenu}
          from={{ opacity: 0, transform: 'scale(0)', right: '-120%', top: '-50%' }}
          enter={{ opacity: 1, transform: 'scale(1)', right: '0', top: '120%' }}
          leave={{ opacity: 0, transform: 'scale(0)', right: '-120%', top: '-50%' }}
          config={{ duration: 200 }}>
          {showMenu =>
            showMenu &&
            (props => (
              <div className="color-picker" style={{ ...props, backgroundColor: card.color }}>
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
            ))
          }
        </Transition>
        <span className="tooltip">Change Colour</span>
      </span>
    )
  }
}
