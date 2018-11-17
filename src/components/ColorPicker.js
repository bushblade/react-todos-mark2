import React, { Component } from 'react'
import posed, { PoseGroup } from 'react-pose'

import actions from '../actions'

import ColorMenu from './ColorMenu'

const ColorPickerMenu = posed.div({
  exit: {
    opacity: 0,
    scale: 0,
    y: 15,
    x: 0,
    transition: { duration: 200, type: 'spring', stiffness: 200, damping: 10, mass: 0.2 }
  },
  enter: {
    opacity: 1,
    scale: 1,
    y: 55,
    x: -40,
    transition: { duration: 200, type: 'spring', stiffness: 200, damping: 10, mass: 0.2 }
  }
})

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
    const { cardId } = this.props.card
    if (!e.target.classList.contains(`color-menu-for${cardId}`)) {
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
        className={'icon color-pick has-tooltip'}
        onClick={() => {
          toggleMenu()
          document.addEventListener('click', closeDropdown)
        }}>
        <i className="fas fa-chevron-down" />
        <PoseGroup>
          {showMenu ? (
            <ColorPickerMenu
              className="color-picker"
              style={{ backgroundColor: card.color }}
              key={`colormenu${card.id}`}
              animateOnMount={true}>
              <ColorMenu
                colors={colors}
                card={card}
                dispatch={dispatch}
                CHANGE_COLOR={CHANGE_COLOR}
              />
            </ColorPickerMenu>
          ) : null}
        </PoseGroup>
        <span className="tooltip">Change Colour</span>
      </span>
    )
  }
}
